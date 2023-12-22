import React from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import "./master.css";
import reportWebVitals from './reportWebVitals';
import Nav from './component/Nav/Nav';
import Main from './page/main/Main';
import Admin from './page/admin/Admin';
import Catalog from './page/catalog/Catalog';
import NotFound from './page/404/NotFound';
import Footer from './component/Footer/Footer';
import AdminPanel from './component/AdminPanel/AdminPanel';
import AddProduct from './component/AdminPanel/module/AddProduct';
import Orders from './component/AdminPanel/module/Orders';
import CatalogAdmin from './component/AdminPanel/module/CatalogAdmin';
import Customers from './component/AdminPanel/module/Customers';
import EditHero from './component/AdminPanel/module/EditHero';
import AddTop from './component/AdminPanel/module/AddTop';
import OpinionsEdit from './component/AdminPanel/module/OpinionsEdit';
import ProductPage from './component/ProductPage/ProductPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   
    <BrowserRouter>
    <Nav/>
    <Routes>
      
      <Route path='/' element={<Main/>}/>
      <Route path='/admin' element={<Admin />}/>
      
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path="/catalog/product/:id" element={<ProductPage/>}/>
      <Route path='/not' element={<NotFound/>}/>
    </Routes>
    <Routes>
          <Route path="/admin/panel/" element={<AdminPanel />}>
            <Route path="add" element={<AddProduct/>} />
            <Route path="orders" element={<Orders />} />
            <Route path="catalog" element={<CatalogAdmin />} />
            <Route path="customers" element={<Customers />} />
            <Route path="edit-hero" element={<EditHero />} />
            <Route path="add-top" element={<AddTop />} />
            <Route path="opinions" element={<OpinionsEdit />} />
          </Route>
        </Routes>
    <Footer/>
    </BrowserRouter>
   
  
);

reportWebVitals();
