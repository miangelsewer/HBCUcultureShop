function searchProducts() {
    let input = document.querySelector(".search-bar").value.toLowerCase();
    let productCards = document.querySelectorAll(".col-md-4"); // Select product cards

    productCards.forEach(card => {
        let title = card.querySelector(".card-title").textContent.toLowerCase(); // Get product name
        if (title.includes(input)) {
            card.style.display = "block";  // Show matching products
        } else {
            card.style.display = "none";   // Hide non-matching products
        }
    });
}