// ===============================
// 1️⃣ RUN CODE AFTER PAGE LOADS
// ===============================

// This waits until the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Make the page invisible first
    document.body.style.opacity = 0;

    // Add a smooth transition effect (fade in)
    document.body.style.transition = "opacity 0.8s ease";

    // After 100 milliseconds, make it visible again
    // This creates the fade-in effect
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);

});



// =====================================
// 2️⃣ AUTO HIGHLIGHT CURRENT NAV LINK
// =====================================

// Select ALL navigation links inside .nav-links
const links = document.querySelectorAll(".nav-links a");

// Loop through each link one by one
links.forEach(link => {

    // Check if the link's URL matches the current page URL
    if (link.href === window.location.href) {

        // If it matches, add the "active" class
        // This class changes the color in CSS
        link.classList.add("active");
    }

});



// =====================================
// 3️⃣ CONTACT FORM SUBMISSION MESSAGE
// =====================================

// Select the form element on the page
const form = document.querySelector("form");

// Check if a form exists (important because other pages don’t have form)
if (form) {

    // Add event listener when form is submitted
    form.addEventListener("submit", function (event) {

        // Prevent the default action (which reloads the page)
        event.preventDefault();

        // Show a popup message
        alert("Thanks! I will get back to you soon.");

        // Clear all input fields inside the form
        form.reset();
    });

}


// Select toggle button
const toggleBtn = document.getElementById("theme-toggle");

// Check saved theme from browser storage
const savedTheme = localStorage.getItem("theme");

// If user previously selected light mode
if (savedTheme === "light") {
    document.body.classList.add("light");
    toggleBtn.textContent = "☀";
}

// When toggle button is clicked
toggleBtn.addEventListener("click", () => {

    // Toggle light class on body
    document.body.classList.toggle("light");

    // If light mode is active
    if (document.body.classList.contains("light")) {

        toggleBtn.textContent = "☀";

        // Save preference
        localStorage.setItem("theme", "light");

    } else {

        toggleBtn.textContent = "🌙";

        // Save preference
        localStorage.setItem("theme", "dark");
    }
});