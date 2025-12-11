import { Navbar } from "../components/navbar.js";
import { Footer } from "../components/footer.js";
import { displayTodos } from "./displayTodos.js";

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

let loggedIn = localStorage.getItem("loggedIn");

if(!loggedIn){
    alert("Please login first");
    window.location.href = "login.html";
}

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => {
    displayTodos(data.slice(0,20)); // Display first 20
  });
