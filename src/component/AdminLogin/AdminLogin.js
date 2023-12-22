import React, { useEffect } from "react";
import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/Firebase";
import AdminPanel from "../AdminPanel/AdminPanel";
import { Link, useNavigate, Navigate } from "react-router-dom";

const AdminLogin = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

  const nav = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  

  if (auth.currentUser != null) {
    nav("panel");
  } else
    return (
      <div className="container-login">
        <div  className="box-login load">
          <Link to="/admin" className="form-logo--black">Herhel Boutique</Link>
          <input
            className="form-admin-text"
            type="email"
            placeholder="Email"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />

          <input
            className="form-admin-text"
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />

          
          <button
            className="btn-form-style"
            onSubmit={login}
            onClick={login}
            type="submit"
          >
            Увійти
          </button>

          <p className="form-copyright">Powered by <Link to="">Topii Web Studio</Link></p>
        </div>
      </div>
    );
};

export default AdminLogin;
