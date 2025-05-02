let cart = JSON.parse(localStorage.getItem("cart")) || {}; // Retrieves cart from storage

function addToCart(item, price, imageUrl) {
    // To add an item to the cart
    if (cart[item]) {
        cart[item].quantity += 1;
    } else {
        cart[item] = { quantity: 1, price: price,image: imageUrl };
    }

    localStorage.setItem("cart", JSON.stringify(cart)); // This saves cart to local storage
    alert(item + " added to cart!");
}