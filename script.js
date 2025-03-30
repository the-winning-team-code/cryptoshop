
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
  summary.innerHTML = "<h3>Order Summary</h3>";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    summary.innerHTML += `<p>${item.category} - ${item.item} - $${item.price.toFixed(2)} 
    <button onclick="removeFromCart(${index})">Remove</button></p>`;
  });
  summary.innerHTML += `
    <p><strong>Total: $${total.toFixed(2)}</strong></p>
    <p>Send total to designated crypto wallet. No mistakes. No refunds.</p>
    <p>Paste your transaction ID below for confirmation:</p>
    <input type="text" placeholder="Transaction ID">
    <button onclick="alert('Order submitted. You will be contacted.')">Submit</button>
  `;
}
