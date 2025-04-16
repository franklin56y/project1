document.addEventListener("DOMContentLoaded", function () {
    // Select the menu toggle button
    const menuToggle = document.querySelector(".menu-toggle");
    // Select the navbar links container
    const links = document.querySelector(".links");
  
    // Add click event listener to the menu toggle button
    menuToggle.addEventListener("click", function () {
      // Toggle the 'show' class on the links container
      links.classList.toggle("show");
      // Toggle the 'active' class on the menu toggle button
      menuToggle.classList.toggle("active");
    });
  });
  
  AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
  });
  
  const cart = [];
  let totalPrice = 0;
  
      function addToCart(productName, productPrice) {
          cart.push({ name: productName, price: productPrice });
          totalPrice += productPrice;
  
          // Update cart display
          const cartItems = document.getElementById('cart-items');
          cartItems.innerHTML = cart.map(item => `<p>${item.name} - $${item.price.toFixed(2)}</p>`).join('');
          document.getElementById('total-price').innerText = `Total: $${totalPrice.toFixed(2)}`;
  
          // Update cart count
          document.getElementById('cart-count').innerText = cart.length;
      }
      function toggleCart() {
        const cartModal = document.getElementById('cart-modal');
        cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
    }
  
    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        const cartModal = document.getElementById('cart-modal');
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    };
     // Handle payment form submission
     document.getElementById("payment-form").onsubmit = function (event) {
      event.preventDefault();
    
      // Check if the cart is empty
      if (cart.length === 0) {
        alert("Your cart is empty. Please add items to your cart.");
        return;
      }
    
      // Get the selected payment method
      const paymentMethod = document.querySelector(
        'input[name="payment-method"]:checked'
      ).value;
    
      // Show a success message
      alert(
        `Payment Successful! You selected ${paymentMethod} as your payment method.`
      );
    
      // Clear the cart after successful payment
      cart.length = 0;
      totalPrice = 0;
    
      // Update the cart display
      document.getElementById("cart-items").innerHTML =
        "<p>No items in the cart.</p>";
      document.getElementById("total-price").innerText = "Total: $0.00";
      document.getElementById("cart-count").innerText = "0";
    
      // Optionally, redirect to a success page
      // window.location.href = "success.html";
    };

// Ensure AOS is initialized only once
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  once: true, // Whether animation should happen only once
});

// Include the AOS library in your HTML file instead of the JavaScript file.
// Ensure AOS is initialized only once
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true, // Whether animation should happen only once
});
