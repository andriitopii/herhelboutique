import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db } from "../../config/Firebase";
import { imgData } from "../../config/Firebase";
import {collection, addDoc, setDoc, doc} from "firebase/firestore";
import {v4} from "uuid"

const ProductPage = () => {
    const {id} = useParams();


    console.log(useParams())
  return <h1>User ID: {id}</h1>;
    
}
 
export default ProductPage;