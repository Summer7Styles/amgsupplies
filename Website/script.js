// Simple JavaScript form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent successfully!');
});
// script.js
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    if (product) {
        document.getElementById('product-name').value = `Cement Product ${product.charAt(1)}`;
    }
};
