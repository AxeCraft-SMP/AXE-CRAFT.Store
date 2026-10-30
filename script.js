
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function clearCart() {
  cart = [];
  renderCart();
}

function renderCart() {
  const items = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  if (!items || !totalElement) return;

  if (cart.length === 0) {
    items.innerHTML = "Your cart is empty.";
    totalElement.textContent = "0";
    return;
  }

  let total = 0;

  items.innerHTML = cart.map((item, index) => {
    total += item.price;

    return `
      <div>
        🛍️ ${item.name} - $${item.price}
        <button onclick="removeFromCart(${index})">✖</button>
      </div>
    `;
  }).join("");

  totalElement.textContent = total;
}

function copyIP(ip, button) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(ip)
      .then(() => showCopied(button))
      .catch(() => alert("Copy failed. IP: " + ip));
  } else {
    alert("Copy this IP: " + ip);
  }
}

function showCopied(button) {
  const oldText = button.textContent;
  button.textContent = "✅ COPIED!";

  setTimeout(() => {
    button.textContent = oldText;
  }, 1500);
}

