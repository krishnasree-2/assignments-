export function displayTodos(data) {
  let container = document.getElementById("todo-container");
  container.innerHTML = "";

  data.forEach(todo => {
    let div = document.createElement("div");
    div.style.padding = "10px";
    div.style.margin = "10px";
    div.style.border = "1px solid #ccc";

    div.innerHTML = `
      <h3>${todo.title}</h3>
      <p>Status: ${todo.completed ? "✔ Completed" : "❌ Pending"}</p>
    `;
    container.append(div);
  });
}
