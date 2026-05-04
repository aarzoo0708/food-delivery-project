

let buttons = document.querySelectorAll(".food-item button");
let cartCount = document.getElementById("cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
cartCount.innerText = cart.length;

buttons.forEach((button) => {
  button.addEventListener("click", () => {

    let foodItem = button.parentElement;

    let name = foodItem.querySelector("h3").innerText;
    let price = parseInt(
      foodItem.querySelector("span").innerText.replace("₹", "")
    );
    let image = foodItem.querySelector("img").getAttribute("src");

    cart.push({ name, price, image });

    localStorage.setItem("cart", JSON.stringify(cart));

    cartCount.innerText = cart.length;
  });
});