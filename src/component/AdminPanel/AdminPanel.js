import { signOut } from "firebase/auth";
import { Navigate, Link, Outlet } from "react-router-dom";
import { auth } from "../../config/Firebase";
import "./AdminPanel.css";

import { useState } from "react";

const AdminPanel = () => {
  let [authUser, setAuthUser] = useState(auth.currentUser == !null);

  const logout = async () => {
    setAuthUser(signOut(auth));
  };

  if (auth.currentUser == null) {
    return <Navigate to="/admin" />;
  } else
    return (
      <div className="section-admin">
        <section className="menu">
          <Link to="/admin/panel" className="form-logo">
            Herhel Boutique
          </Link>
          <ul className="menu-dashboard">
            <li className="menu-dashboard-list">
              <Link to="/admin/panel/add" className="btn-menu">
                <span className="icon-btn-menu-admin i-b-m-a--add-product"></span>
                Додати товар
              </Link>
            </li>
            <li className="menu-dashboard-list">
              <Link to="/admin/panel/orders" className="btn-menu">
                <span className="icon-btn-menu-admin i-b-m-a--add-orders"></span>
                Замовлення
              </Link>
            </li>
            <li className="menu-dashboard-list">
              <Link to="/admin/panel/catalog" className="btn-menu">
                <span className="icon-btn-menu-admin i-b-m-a--add-catalog"></span>
                Каталог
              </Link>
            </li>
            <li className="menu-dashboard-list">
              <Link to="/admin/panel/customers" className="btn-menu">
                <span className="icon-btn-menu-admin i-b-m-a--customors"></span>
                Клієнти
              </Link>
            </li>
            <li className="menu-dashboard-list">
              <Link to="/admin/panel/edit-hero" className="btn-menu">
                <span className="icon-btn-menu-admin i-b-m-a--add-hero"></span>
                Cлайдер
              </Link>
            </li>
            <li className="menu-dashboard-list">
              <Link to="/admin/panel/add-top" className="btn-menu">
                <span className="icon-btn-menu-admin i-b-m-a--add-top"></span>
                Додати топ товар
              </Link>
            </li>
            <li className="menu-dashboard-list">
              <Link to="/admin/panel/opinions" className="btn-menu">
                <span className="icon-btn-menu-admin i-b-m-a--opinions"></span>
                Відгуки
              </Link>
            </li>
          </ul>
          <button className="btn-logout" onClick={logout}>
            <span className="icon-btn-menu-admin i-b-m-a--log-out"></span>
            Вийти
          </button>
        </section>
        <section className="content-admin">
          <Outlet />
        </section>
      </div>
    );
};
export default AdminPanel;
