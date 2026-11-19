const form = document.getElementById("signup-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter your email!");
        return;
    }

    fetch("submit.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("response").textContent = data.message;
            form.reset();
        });
});