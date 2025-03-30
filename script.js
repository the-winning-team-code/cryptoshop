function checkPassword() {
  const input = document.getElementById("password").value;
  const correct = "trappacrypto"; // change this to your naughty secret~

  if (input === correct) {
    window.location.href = "menu.html";
  } else {
    alert("Wrong code, cheeky.");
  }
}

let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(`${name} added, love~`);
}

function confirmOrder() {
  const summary = document.getElementById("orderSummary");
  summary.innerHTML = "<h3>Order Summary:</h3>";

  cart.forEach(item => {
    summary.innerHTML += `<p>${item.name} - ${item.price}</p>`;
  });

  summary.innerHTML += `
    <p><b>Send total to wallet:</b></p>
    <p>ETH: 0xYourWalletHere</p>
    <p>BTC: YourBTCWalletHere</p>
    <p>Paste txID below after payment:</p>
    <input type="text" placeholder="Transaction ID">
    <button onclick="alert('Got it, babe~ I’ll verify & ship!')">Submit</button>
  `;
}
