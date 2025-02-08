// Sample Product Data
const products = [
  { id: 1, name: "Product 1", image: "assets/img/product1.jpeg" },
  { id: 2, name: "Product 2", image: "assets/img/product1.jpeg" },
  { id: 3, name: "Product 3", image: "assets/img/product1.jpeg" },
  { id: 4, name: "Product 4", image: "assets/img/product1.jpeg" },
  { id: 5, name: "Product 5", image: "assets/img/product1.jpeg" },
  { id: 6, name: "Product 6", image: "assets/img/product1.jpeg" },
  { id: 7, name: "Product 7", image: "assets/img/product1.jpeg" },
  { id: 8, name: "Product 8", image: "assets/img/product1.jpeg" },
  { id: 9, name: "Product 9", image: "assets/img/product1.jpeg" },
  { id: 10, name: "Product 10", image: "assets/img/product1.jpeg" },
];

// DOM Elements
const featuredCard = document.getElementById('featured-card');
const productGrid = document.getElementById('product-grid');

// Initial Render
function renderProducts() {
  // Render featured card
  featuredCard.innerHTML = `
    <img src="${products[0].image}" alt="${products[0].name}">
    <h3>${products[0].name}</h3>
  `;

  // Render the first 4 products in the grid
  productGrid.innerHTML = products.slice(1, 9).map(product => `
    <div class="product-card" data-id="${product.id}">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
    </div>
  `).join('');
}

// Handle Card Click
function handleCardClick(event) {
  const clickedCard = event.target.closest('.product-card');
  if (!clickedCard) return;

  const clickedCardId = clickedCard.dataset.id;
  const clickedProduct = products.find(p => p.id == clickedCardId);

  // Swap featured card with clicked card
  const currentFeatured = featuredCard.innerHTML;
  featuredCard.innerHTML = clickedCard.innerHTML;
  clickedCard.innerHTML = currentFeatured;

  // Add smooth transition animations
  featuredCard.style.opacity = 0;
  clickedCard.style.opacity = 0;

  setTimeout(() => {
    featuredCard.style.opacity = 1;
    clickedCard.style.opacity = 1;
  }, 10);
}

// Event Listeners
productGrid.addEventListener('click', handleCardClick);

// Initial Render
renderProducts();
