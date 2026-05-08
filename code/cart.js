let buttons = document.querySelectorAll(".food-item button");
let cartCount = document.getElementById("cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cartCount.innerText = cart.length;

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        let isLoggedIn = localStorage.getItem("isLoggedIn");

        if (!isLoggedIn) {

            alert("⚠ Please login first to add items into cart");

            window.location.href = "login.html";

            return;
        }

        let foodItem = button.parentElement;

        let name = foodItem.querySelector("h3").innerText;

        let price = parseInt(
            foodItem.querySelector("span").innerText.replace("₹", "")
        );

        let image = foodItem.querySelector("img").getAttribute("src");

        let existingItem = cart.find(item => item.name === name);

        if (existingItem) {

            existingItem.quantity += 1;

        } else {

            cart.push({
                name,
                price,
                image,
                quantity: 1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        cartCount.innerText = cart.length;

        alert("✅ Item Added To Cart");
    });
});