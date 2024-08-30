// Agregar funcionalidad al botón "Agregar al carrito"
document.querySelectorAll('.btn-secondary').forEach(button => {
    button.addEventListener('click', () => {
        alert('Servicio agregado al carrito');
    });
});

// Animación para las secciones al hacer scroll
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseover', function (e) {
        const rect = icon.getBoundingClientRect();
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('span');
            particle.classList.add('particle');
            particle.style.left = `${e.clientX - rect.left}px`;
            particle.style.top = `${e.clientY - rect.top}px`;
            icon.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 500);
        }
    });
});
const observerOptions = {
    threshold: 0.1
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up'); // Clases dinámicas para efectos diferentes
        }
    });
}, observerOptions);

document.querySelectorAll('.animate').forEach(section => {
    scrollObserver.observe(section);
});

// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    let cartCount = 0;
    let totalPrice = 0;
    let cartItems = [];
    const cartCountElement = document.getElementById('cart-count');
    const cartLink = document.getElementById('cart-link');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const closeCartButton = document.getElementById('close-cart');

    // Función para actualizar el contenido del carrito en la ventana lateral
    function updateCartSidebar() {
        // Limpiar el contenido actual
        cartItemsContainer.innerHTML = '';

        // Agregar cada artículo al carrito
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        // Actualizar el total
        cartTotalElement.textContent = totalPrice.toFixed(2);
    }

    // Agregar funcionalidad a los botones de "Agregar al carrito"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceElement = button.parentElement;
            const serviceName = serviceElement.querySelector('h3').textContent;
            const servicePrice = parseFloat(serviceElement.getAttribute('data-price'));

            // Actualizar cantidad del carrito y precio total
            cartCount++;
            totalPrice += servicePrice;

            // Agregar el artículo al array de items del carrito
            cartItems.push({ name: serviceName, price: servicePrice });

            // Mostrar la cantidad de ítems en el carrito
            cartCountElement.textContent = cartCount;

            // Actualizar la vista del carrito
            updateCartSidebar();
        });
    });

    // Abrir el carrito cuando se hace clic en el ícono del carrito
    cartLink.addEventListener('click', function(event) {
        event.preventDefault();
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('open');
    });

    // Cerrar el carrito cuando se hace clic en el botón de cerrar o en el overlay
    closeCartButton.addEventListener('click', function() {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('open');
    });

    cartOverlay.addEventListener('click', function() {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('open');
    });
});
