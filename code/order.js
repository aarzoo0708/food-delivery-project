let orders = JSON.parse(localStorage.getItem("orders")) || [];

let container = document.getElementById("orders-container");

// No Orders
if (orders.length === 0) {

  container.innerHTML = `
    <h2 style="text-align:center; margin-top:40px;">
      No orders yet 😔
    </h2>
  `;

} else {

  function renderOrders() {

    container.innerHTML = "";

    orders.forEach((order, index) => {

      let div = document.createElement("div");

      div.classList.add("order-box");

      // Current Time
      let currentTime = new Date().getTime();

      // Time Difference in Minutes
      let diff =
      Math.floor((currentTime - order.orderTime) / 1000 / 60);

      // Dynamic Status
      let status = "";
      let remainingTime = "";

      if (diff < 10) {

        status = "🍳 Preparing";

        remainingTime =
        `${10 - diff} mins remaining`;

      } else if (diff < 15) {

        status = "🚚 Out For Delivery";

        remainingTime =
        `${15 - diff} mins remaining`;

      } else {

        status = "✅ Delivered";

        remainingTime = "Order Delivered";
      }

      // Food Items
      let itemsHTML = "";

      order.items.forEach(item => {

        itemsHTML += `

          <div class="ordered-item">

            <p>
               ${item.name}
            </p>

            <p>
              ₹${item.price}
            </p>

          </div>
        `;
      });

      // Main HTML
      div.innerHTML = `

        <h2>
          📦 Order ${index + 1}
        </h2>

        <p>
          <b>Order Date:</b>
          ${order.date}
        </p>

        <p>
          <b>Status:</b>
          ${status}
        </p>

        <p>
          <b>Delivery Update:</b>
          ${remainingTime}
        </p>

        <p>
          <b>Delivery Address:</b>
          ${order.address}
        </p>

        <hr>

        ${itemsHTML}

      `;

      container.appendChild(div);

    });
  }

  // Initial Render
  renderOrders();

  // Auto Refresh Every 30 Seconds
  setInterval(renderOrders, 30000);
}