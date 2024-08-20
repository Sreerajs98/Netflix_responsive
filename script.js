
// script.js

document.addEventListener("DOMContentLoaded", () => {
    const faqTitles = document.querySelectorAll(".FAQ__title");

    faqTitles.forEach((title) => {
        title.addEventListener("click", () => {
            const content = title.nextElementSibling;
            const icon = title.querySelector("i");

            // Toggle the active class to open/close the accordion
            content.classList.toggle("active");

            // Toggle the icon between plus and minus
            if (content.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.classList.remove("fa-plus");
                icon.classList.add("fa-minus");
            } else {
                content.style.maxHeight = 0;
                icon.classList.remove("fa-minus");
                icon.classList.add("fa-plus");
            }
        });
    });
});

// script.js (continued)

document.querySelector(".primary__button").addEventListener("click", (e) => {
    const emailLabel = document.querySelector(".email__label");

    if (!emailLabel.textContent.trim()) {
        alert("Please enter a valid email address.");
    } else {
        alert("Thanks! You'll be redirected to the sign-up page.");
        // You can add further actions like redirecting to another page
    }
});

// script.js (continued)

document.querySelector(".signin__button").addEventListener("click", () => {
    alert("Sign-in functionality is not yet implemented.");
    // You could redirect the user to a sign-in page or add more functionality here.
});
