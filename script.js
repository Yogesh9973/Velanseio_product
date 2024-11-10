// Toggle additional details on the product
function toggleDetails() {
    const details = document.getElementById('details');
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

// Simulates adding an item to the cart
function addToCart() {
    const quantity = document.getElementById("quantity").value;
    const confirmation = document.getElementById("confirmation");
    confirmation.textContent = `Added ${quantity} item(s) to your cart!`;
    confirmation.style.display = "block";

    // Hide confirmation message after 3 seconds
    setTimeout(() => {
        confirmation.style.display = "none";
    }, 3000);
}

// Open Modal
document.getElementById("buyNowBtn").addEventListener("click", function () {
    document.getElementById("paymentModal").style.display = "block";
});

// Close Modal
function closeModal() {
    document.getElementById("paymentModal").style.display = "none";
}

// Close Modal by Clicking Outside the Modal Content
window.addEventListener("click", function (event) {
    const modal = document.getElementById("paymentModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


