import { useEffect,useState } from "react";
import { auth } from "../../../config/Firebase";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";

const Orders = () => {

   
    return ( <h1 className="admin-section-title">Замовлення</h1> );
}
 
export default Orders;