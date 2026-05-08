

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItemsDiv = document.getElementById("cart-items");
let subtotalDisplay = document.getElementById("subtotal");
let gstDisplay = document.getElementById("gst");
let totalDisplay = document.getElementById("total");
let deliveryDisplay = document.getElementById("delivery");

function renderCart() {

  cartItemsDiv.innerHTML = ""; 
  let subtotal = 0;

  cart.forEach((item, index) => {

    let div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
  <div class="cart-item-inner">
    <button class="remove-btn" onclick="removeItem(${index})"><span class="material-symbols-outlined">delete</span></button>

    <img src="${item.image}" class="cart-img">

    <div class="cart-details">
      <h4>${item.name}</h4>
      <p>₹${item.price}</p>
    </div>
  </div>
`;

    cartItemsDiv.appendChild(div);

    subtotal += item.price;
  });

  let orderBtn = document.querySelector(".order-btn");

if (cart.length === 0) {
    orderBtn.disabled = true;
    orderBtn.style.background = "gray";
} else {
    orderBtn.disabled = false;
}

  // // Bill calculation
  // let gst = Math.round(subtotal * 0.05);
  // let delivery = 40;
  // let total = subtotal + gst + delivery;

  // subtotalDisplay.innerText = "₹" + subtotal;
  // gstDisplay.innerText = "₹" + gst;
  // totalDisplay.innerText = "₹" + total;

  let gst = 0;
let delivery = 0;
let total = 0;

if (cart.length > 0) {
    gst = Math.round(subtotal * 0.05);
    delivery = 40;
    total = subtotal + gst + delivery;
}

subtotalDisplay.innerText = "₹" + subtotal;
gstDisplay.innerText = "₹" + gst;


deliveryDisplay.innerText = "₹" + delivery;
totalDisplay.innerText = "₹" + total;
}

function removeItem(index) {
  cart.splice(index, 1); // remove item
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart(); // refresh UI
}

function clearCart() {
  localStorage.removeItem("cart");
  cart = [];
  renderCart();
}

renderCart();

function placeOrder() {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let address = document.getElementById("address").value;

  if (cart.length === 0) {

    alert("Cart is empty ❌");

    return;
  }

  if (address.trim() === "") {

    alert("Please enter delivery address 📍");

    return;
  }

  // Existing orders
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  // New Order Object
  let newOrder = {

    items: cart,

    address: address,

    date: new Date().toLocaleString(),

    orderTime: new Date().getTime()
  };

  // Save order
  orders.push(newOrder);

  localStorage.setItem("orders", JSON.stringify(orders));

  // Clear cart
  localStorage.removeItem("cart");

  alert("🎉 Order Placed Successfully");

  window.location.href = "order_history.html";
}