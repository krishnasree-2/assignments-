document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if(storedUser && storedUser.email === email && storedUser.password === password){
        localStorage.setItem("loggedIn", "true");
        alert("Login successful!");
        window.location.href = "todos.html";
    } else {
        alert("Invalid Credentials");
    }
});
