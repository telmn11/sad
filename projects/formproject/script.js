
/*
I used AI to help me with this JavaScript assignment.
AI helped me understand form validation, JavaScript objects,
and XMLHttpRequest (AJAX).
I reviewed the code and made changes to fit my form project.
*/

const form = document.getElementById("signup-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect all form information into one object
    const student = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value,
        gender: document.getElementById("gender").value,
        role: document.querySelector('input[name="role"]:checked')?.value || "",
        hobbies: Array.from(
            document.querySelectorAll('input[name="hobbies"]:checked')
        ).map(item => item.value),
        about: document.getElementById("about").value.trim(),
        birthday: document.getElementById("birthday").value,
        age: Number(document.getElementById("age").value)
    };

    console.log(student);

    // Validate required information
    if (student.name === "") {
        alert("Please enter your name!");
        return;
    }

    if (student.email === "") {
        alert("Please enter your email!");
        return;
    }

    if (student.password.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
    }

    // Validate age
    if (
        document.getElementById("age").value === "" ||
        student.age < 13 ||
        student.age > 100
    ) {
        alert("Please enter an age between 13 and 100!");
        return;
    }

    // AJAX request using XMLHttpRequest
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "submit.json", true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);

            document.getElementById("response").textContent = data.message;

            // Clear the form after successful submission
            form.reset();
        } else {
            alert("Could not submit the form. Please try again.");
        }
    };

    xhr.onerror = function() {
        alert("Something went wrong. Please try again.");
    };

    xhr.send();
});
