document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome to The World of Chess!");

    // Highlight the current navigation page

    const currentPage = window.location.pathname.split("/").pop();

    const navigationLinks = document.querySelectorAll("nav a");

    navigationLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.style.color = "#e5c77b";
        }

    });

});