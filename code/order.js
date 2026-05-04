let orders = JSON.parse(localStorage.getItem("orders")) || [];

let container = document.getElementById("orders-container");

if (orders.length === 0) {
  container.innerHTML = "<p style='text-align:center;'>No orders yet 😔</p>";
} else {

  orders.forEach((order, index) => {

    let div = document.createElement("div");
    div.classList.add("order-box");

    let itemsHTML = "";

    order.items.forEach(item => {
      itemsHTML += `
        <p>${item.name} - ₹${item.price}</p>
      `;
    });

    div.innerHTML = `
      <h3>Order ${index + 1}</h3>
      <p><b>Date:</b> ${order.date}</p>
      ${itemsHTML}
      <hr>
    `;

    container.appendChild(div);
  });
}