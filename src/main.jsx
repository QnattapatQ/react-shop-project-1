import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home_Page from './component/All_Pages/Home_Page.jsx';
import ProductDetail from './component/ProductDetail/ProductDetail.jsx';
import Women from './component/All_Pages/Women.jsx';
import Men from './component/All_Pages/Men.jsx';
import About from './component/All_Pages/About.jsx';
import Contact from './component/All_Pages/Contact.jsx';
import Shop from './component/All_Pages/Shop.jsx';
import CheckOutProduct from './component/All_Pages/CheckOutProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home_Page/>
  },
  {
    path: "/product/:id",
    element: <ProductDetail/>
  },
  {
    path: "/shop",
    element: <Shop/>
  },
  {
    path: "/women",
    element: <Women/>
  },
  {
    path: "/men",
    element: <Men/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/checkout",
    element: <CheckOutProduct/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
