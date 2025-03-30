
let cart = [];

function addToCart(category, item, price) {
  cart.push({ category, item, price: parseFloat(price) });
  updateOrderSummary();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateOrderSummary();
}

function updateOrderSummary() {
  const summary = document.getElementById("orderSummary");
  summary.innerHTML = "<h3>Order Summary:</h3>";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    summary.innerHTML += `<p>${item.category} - ${item.item} - ${item.price.toFixed(6)} BTC 
    <button onclick="removeFromCart(${index})">Remove</button></p>`;
  });

  summary.innerHTML += `
    <p><b>Total BTC:</b> ${total.toFixed(6)}</p>
    <p><b>Send total to wallet:</b></p>
    <p>BTC: YourBTCWalletHere</p>
    <p>Paste txID below after payment:</p>
    <input type="text" placeholder="Transaction ID">
    <button onclick="alert('Got it, babe~ I’ll verify & ship!')">Submit</button>
  `;
}
