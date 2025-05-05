// Ensure the script runs after the page loads
document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.querySelector(".search-bar");

    if (!searchBar) {
        console.error("Search bar element not found!");
        return; // Exit if search bar doesn't exist
    }

    searchBar.addEventListener("input", searchProducts);
});

function searchProducts() {
    let input = document.querySelector(".search-bar").value.trim().toLowerCase();
    let productCards = document.querySelectorAll(".col-md-4");

    // Debugging: Log input value
    console.log("Search Query:", input);

    productCards.forEach(card => {
        let titleElement = card.querySelector(".card-title");

        // Check if title exists before attempting to access its text
        if (!titleElement) {
            console.error("Product card missing title:", card);
            return;
        }

        let title = titleElement.textContent.trim().toLowerCase();
        
        // Debugging: Log each product title being checked
        console.log("Checking product:", title);

        card.style.display = title.includes(input) ? "block" : "none";
    });
}