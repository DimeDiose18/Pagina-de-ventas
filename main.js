const navBarEmail = document.querySelector('.navbar-email');
const botonDeMenu = document.querySelector('.menu');
const carritoMenu = document.querySelector('.navbar-shopping-card');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.card-container');

navBarEmail.addEventListener('click', toggleDesktopMenu);
botonDeMenu.addEventListener('click', toggleMobileMenu);
carritoMenu.addEventListener('click', toggleCarrito);


function toggleDesktopMenu() {
  const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')
 
  if(!isShoppingCartContainerClosed) {
   shoppingCartContainer.classList.add('inactive');
  }
 
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
 const isCarritoClosed = shoppingCartContainer.classList.contains('inactive')
 
 if(!isCarritoClosed) {
  shoppingCartContainer.classList.add('inactive');
 }

  mobileMenu.classList.toggle('inactive');
}

function toggleCarrito() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if(!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  } 
  
  shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name: "Mini Lip & Cheek Essentials",
  price: 18.00,
  image: "https://cdn.shopify.com/s/files/1/0314/1143/7703/products/pdp-gallery-mini-lip-cheek-essentials-1440x1952.png?v=1650415791",
});
productList.push({
  name: "Always An Optimist 4-In-1 Mist",
  price: 24.00,
  image: "https://cdn.shopify.com/s/files/1/0314/1143/7703/products/4-IN-1-MIST-SKU-1_c9988cd0-b4d3-4fb7-b9e2-5e3a36bf5d05.jpg?v=1598637698",
});
productList.push({
  name: "Perfect Strokes Universal Volumizing Mascara",
  price: 20.00,
  image: "https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Full-Size-Mascara-Open-SKU.jpg?v=1629247163",
});
//
productList.push({
  name: "Liquid Touch Foundation Brush",
  price: 28.00,
  image: "https://cdn.shopify.com/s/files/1/0314/1143/7703/products/FOUNDATION-BRUSH-SKU-1_b4e67510-3fda-4ca6-a72a-e7b955d788a8.jpg?v=1598638646",
});
productList.push({
  name: "Compact Mirror",
  price: 8.00,
  image: "https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Compact-Mirror-Open-SKU.jpg?v=1608351844",
});
productList.push({
  name: "Liquid Touch Weightless Foundation",
  price: 29.00,
  image: "https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Foundation-130N-SKU.jpg?v=1610501757",
});
productList.push({
  name: "Perfect Strokes Matte Liquid Liner",
  price: 19.00,
  image: "https://cdn.shopify.com/s/files/1/0314/1143/7703/products/LIQUID_LINER-SKU-1.jpg?v=1630031335",
});
productList.push({
  name: "Always an Optimist Pore Diffusing Primer",
  price: 26.00,
  image: "https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Pore-Primer-SKU.jpg?v=1617149124",
});
productList.push({
  name: "Always an Optimist Weightless Eye Primer",
  price: 18.00,
  image: "https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Eyeshadow-Primer-SKU.jpg?v=1617149462",
});
productList.push({
  name: "Positive Light Liquid Luminizer",
  price: 22.00,
  image: "https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Luminizer-ENCHANT-SKU.jpg?v=1598652680",
});
productList.push({
  name: "Soft Pinch Liquid Blush",
  price: 20.00,
  image: "https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Liquid-Blush-Matte-BLISS-SKU.jpg?v=1639020840",
});
productList.push({
  name: "Always an Optimist Soft Radiance Setting Powder",
  price: 22.00,
  image: "https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Setting-Powder-Light-Medium-SKU.jpg?v=1639181034",
});
productList.push({
  name: "Brow Harmony Shape & Fill Duo",
  price: 24.00,
  image: "https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Brow-Harmony-Palette-Soft-Blonde-SKU.jpg?v=1630021431",
});
productList.push({
  name: "Rare Beauty Discovery Eyeshadow Palette / Came To Play",
  price: 29.00,
  image: "https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Came-to-Play-SKU.jpg?v=1634319954",
});
productList.push({
  name: "Rare Beauty Discovery Eyeshadow Palette",
  price: 29.00,
  image: "https://cdn.shopify.com/s/files/1/0314/1143/7703/products/True-to-Myself-SKU.jpg?v=1617143677",
});

function renderProducts(arr) {
  for(product of arr) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);
  productImg.classList.add('product-img');

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$'+ product.price+',00';
  const productName = document.createElement('p');
  productName.innerText = product.name;

  productDiv.append(productPrice, productName);

  const productFigure = document.createElement('figure');
  const productImgCard = document.createElement('img');
  productImgCard.setAttribute('src', './images/shopping-car1.svg');

  productFigure.appendChild(productImgCard);

  productInfo.append(productDiv, productFigure);

  productCard.append(productImg, productInfo);

  cardsContainer.appendChild(productCard)};   
};

renderProducts(productList);