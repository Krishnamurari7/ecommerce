# 🛍️ ShoppyGlobe - E-commerce React App

ShoppyGlobe is a basic e-commerce application built with **React**, **Redux**, and **React Router**. It fetches real-time product data from a public API and allows users to browse products, view details, and manage a shopping cart.

- npm install

## github

- https://github.com/Krishnamurari7/ecommerce

## 🚀 Features

- 🧩 Component-Based Structure
- 📦 Fetch products from `https://dummyjson.com/products`
- 🛒 Add to Cart / Remove from Cart functionality
- 🔍 Search filter for products
- 🔄 Quantity management in cart
- 🌐 React Router for navigation
- 🧠 State Management using Redux Toolkit
- ⚙️ Custom Hook for fetching products
- ⚠️ Error Handling for API requests
- ⏳ Lazy Loading & Code Splitting
- 📱 Responsive CSS styling

## 📁 Folder Structure

src/
├── components/
│ ├── Cart.jsx
│ ├── CartItem.jsx
│ ├── Header.jsx
│ ├── NotFound.jsx
│ ├── ProductDetail.jsx
│ ├── ProductItem.jsx
│ └── ProductList.jsx
├── hooks/
│ └── useFetchProducts.js
├── redux/
│ ├── cartSlice.js
│ └── store.js
├── App.jsx
├── index.css
└── main.jsx