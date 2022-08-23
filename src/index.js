import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import store from './store'
import { Provider } from 'react-redux'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//pages
import LandingPage from './pages/App';
import ProductPage from './pages/Product';
import CartPage from './pages/Cart';
import AuthPage from './pages/Auth';
import AdminCategoryPage from './pages/Admin/Category';
import AdminProductPage from './pages/Admin/Products/Index';
import AdminProductCreatePage from './pages/Admin/Products/Create';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/products" element={<ProductPage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/admin/categories" element={<AdminCategoryPage />}/>
        <Route path="/admin/products" element={<AdminProductPage />}/>
        <Route path="/admin/products/create" element={<AdminProductCreatePage />}/>
        <Route path="/auth" element={<AuthPage />}/>
      </Routes>
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
