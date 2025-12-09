// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🔥 Replace with YOUR firebaseConfig
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const bookList = document.getElementById("bookList");
const addBookForm = document.getElementById("addBookForm");

// -----------------------
// ADD BOOK
// -----------------------
addBookForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const price = document.getElementById("price").value.trim();
  const imageUrl = document.getElementById("imageUrl").value.trim();

  if (!title || !author || !price) {
    alert("Please fill all fields");
    return;
  }

  await addDoc(collection(db, "books"), {
    title,
    author,
    price: Number(price),
    coverImageURL: imageUrl || "https://via.placeholder.com/200x250",
    createdAt: serverTimestamp()
  });

  addBookForm.reset();
});

// -----------------------
// LOAD BOOKS REALTIME
// -----------------------
onSnapshot(collection(db, "books"), (snapshot) => {
  bookList.innerHTML = "";

  snapshot.forEach((doc) => {
    const book = { id: doc.id, ...doc.data() };
    bookList.innerHTML += createBookCard(book);
  });

  addCardEvents();
});

// -----------------------
// CARD TEMPLATE
// -----------------------
function createBookCard(book) {
  return `
    <div class="bg-white rounded-xl shadow p-4">
      <img src="${book.coverImageURL}" class="w-full h-48 object-cover rounded mb-3" />

      <h3 class="text-lg font-semibold">${book.title}</h3>
      <p class="text-gray-600">by ${book.author}</p>
      <p class="font-semibold mt-1">₹${book.price}</p>

      <div class="flex gap-2 mt-3">
        <button data-update="${book.id}" class="flex-1 border px-2 py-1 rounded">Update</button>
        <button data-delete="${book.id}" class="flex-1 border px-2 py-1 rounded">Delete</button>
        <button data-view="${book.id}" class="flex-1 border px-2 py-1 rounded">View</button>
      </div>
    </div>
  `;
}

// -----------------------
// CARD BUTTON EVENTS
// -----------------------
function addCardEvents() {
  document.querySelectorAll("[data-delete]").forEach(btn => {
    btn.onclick = () => deleteBook(btn.dataset.delete);
  });

  document.querySelectorAll("[data-update]").forEach(btn => {
    btn.onclick = () => updateAuthor(btn.dataset.update);
  });

  document.querySelectorAll("[data-view]").forEach(btn => {
    btn.onclick = () => openModal(btn.dataset.view);
  });
}

// -----------------------
// DELETE BOOK
// -----------------------
async function deleteBook(id) {
  if (!confirm("Delete this book?")) return;
  await deleteDoc(doc(db, "books", id));
}

// -----------------------
// UPDATE AUTHOR
// -----------------------
async function updateAuthor(id) {
  const newAuthor = prompt("Enter new author name:");
  if (!newAuthor || !newAuthor.trim()) return;
  await updateDoc(doc(db, "books", id), { author: newAuthor });
}

// -----------------------
// VIEW DETAILS (MODAL)
// -----------------------
async function openModal(id) {
  const ref = doc(db, "books", id);
  const bookSnap = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js")
    .then(m => m.getDoc(ref));
  const book = bookSnap.data();

  document.getElementById("modalTitle").textContent = book.title;
  document.getElementById("modalAuthor").textContent = "by " + book.author;
  document.getElementById("modalImg").src = book.coverImageURL;
  document.getElementById("modalPrice").textContent = "Price: ₹" + book.price;

  document.getElementById("modal").classList.remove("hidden");
}

document.getElementById("closeModal").onclick = () => {
  document.getElementById("modal").classList.add("hidden");
};
