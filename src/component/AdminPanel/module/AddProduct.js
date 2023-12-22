import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db } from "../../../config/Firebase";
import { imgData } from "../../../config/Firebase";
import {  setDoc, doc, collection, addDoc, } from "firebase/firestore";
import CategoryHair from "./token/CategoryHair";
import CategoryFace from "./token/CategoryFace";
import CategoryBody from "./token/CategoryBody";
import {v4} from "uuid"

const AddProduct = () => {
  const [typeCategory, setTypeCategory] = useState("");
  const [benefit, setBenefit] = useState([]);
  const [count, setCount] = useState(1);
  const [varianProd, setVariantProd] = useState([]);
  const [imgProd, setImgProd] = useState([])
  const [imgUrl, setImgUrl] = useState([])

  
  
  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    reset,
    getValues,
    setValue,
  } = useForm({ mode: "all" });

  
  
  // Додавання варіантів товару у форму
  const addVariant = (e) => {
    if (varianProd.length <= 2) {
      setVariantProd([
        ...varianProd,
        <>
          <li key={varianProd.length} className="form-li-diferent">
            <input
              {...register("price" + count, { required: true })}
              className="form-adm-input"
              placeholder="Ціна"
              type="number"
            ></input>
            <input
              {...register("oldPrice" + count)}
              className="form-adm-input --text-decoration"
              placeholder="Знижка"
              type="number"
            ></input>
            <input
              {...register("waga" + count, { required: true })}
              type="number"
              className="form-adm-input"
              placeholder="мл"
            ></input>
          </li>
          <div className="error-mess">
            {errors?.price1 && <>{errors?.price1.message || "Помилка"}</>}
            {errors?.price2 && <>{errors?.price2.message || "Помилка"}</>}
          </div>
        </>,
      ]);
      setCount(count + 1);
    } else {
      return;
    }
  };
  // Переваги товару
  const addBenefit = (item) => {
    const words = item.split(",");
    setBenefit(words);

  };
  // Видалення варіантів товару у форму
  const deleteVariant = () => {
    if (varianProd.length == 0) {
      return;
    }
    varianProd.length = varianProd.length - 1;
    setVariantProd([...varianProd]);
    setCount(count - 1);
  };
  
  // Основна функція додавання товару в базу даних
  const addProduct = async(data) => {
    
    for(let i = 0; i <= imgProd.length; i++){
      const imgName = imgProd[i];
      if (imgName) {
        const storageRef = ref(imgData, `images/${imgName.name}` + v4());
        try {
          await uploadBytes(storageRef, imgName);
          const downloadURL = await getDownloadURL(storageRef);
          setImgUrl([...imgUrl, downloadURL])
          console.log(`File ${i + 1} uploaded. URL: ${downloadURL}`);
        } catch (error) {
          console.error(`Error uploading file ${i + 1}:`, error.message);
        }
        
      }
    }

    
    

    let title = data.title;
    if(count == 1){
     await setDoc(doc(db, "product", title.toLowerCase().replace(/ /g, "-")), {
            title: data.title,
            brand: data.brand,
            category: data.category,
            typeUse: data.typeUse,
            promo: data.promo,
            type1: {price1: data.price1,
            oldPrice1: data.oldPrice1, waga1: data.waga1},
            description: data.description,
            options: data.options,
            url: "/catalog/product/"+title.toLowerCase().replace(/ /g, "-"),
            benefit: benefit,
            urlImg:imgUrl


         });} else if(count == 2) {
          await setDoc(doc(db, "product", title.toLowerCase().replace(/ /g, "-")), {
            title: data.title,
            brand: data.brand,
            category: data.category,
            typeUse: data.typeUse,
            promo: data.promo,
            type1: {price1: data.price1,
            oldPrice1: data.oldPrice1, waga1: data.waga1},
            type2: {price2: data.price2,
              oldPrice2: data.oldPrice2, waga2: data.waga2},
              type3: {price3: data.price2,
                oldPrice2: data.oldPrice2, waga2: data.waga2},
            description: data.description,
            options: data.options,
            url: "/catalog/product/"+title.toLowerCase().replace(/ /g, "-"),
            benefit: benefit,
            urlImg:imgUrl


         });
         }
    alert(JSON.stringify(data));
  };

  
  return (
    <>
      <h1 className="admin-section-title">Додати продукт</h1>
      <form onSubmit={handleSubmit(addProduct)} className="form-add-prod">
        {/* Назва товару */}
        <label className="form-label">
          Назва товару
          <input
            className="form-adm-input"
            {...register("title", {
              required: "Назва обовязкова для заповнення",
              minLength: {
                value: 10,
                message: "Мінімальна кількість символів 10",
              },
            })}
            placeholder="Philip Martin's"
          ></input>
          <div className="error-mess">
            {errors?.title && <>{errors?.title.message || "Помилка"}</>}
          </div>
        </label>
        {/*Бренд  */}
        <label className="form-label">
          Бренд
          <select
            className="form-adm-selected"
            {...register("brand", {
              required: "Оберіть бренд",
            })}
          >
            <option></option>
            <option value="Arosha">Arosha</option>
            <option value="Bioloqique Recherche">Bioloqique Recherche</option>
            <option value="DSD">DSD</option>
            <option value="Instytutum">Instytutum</option>
            <option value="Jalupro">Jalupro</option>
            <option value="Jan Marini">Jan Marini</option>
            <option value="Manta">Manta</option>
            <option value="Philip Martin's">Philip Martin's</option>
            <option value="Revitalash">Revitalash</option>
            <option value="ZO Obagi">ZO Obagi</option>
            <option value="Medik8">Medik8</option>
          </select>
          <div className="error-mess">
            {errors?.brand && <>{errors?.brand.message || "Помилка"}</>}
          </div>
        </label>
        {/* Категорія */}
        <label className="form-label">
          Категорія
          <select
            {...register("category", {
              onChange: (e) => setTypeCategory(e.target.value),
              required: "Оберіть категорію",
            })}
            className="form-adm-selected"
          >
            <option selected value="">
              Обери..
            </option>
            <option value="hair">Догляд за волоссям</option>
            <option value="body">Догляд для тіла</option>
            <option value="face">Догляд за обличчям</option>
          </select>
          <div className="error-mess">
            {errors?.category && <>{errors?.category.message || "Помилка"}</>}
          </div>
        </label>

        {/* Тип*/}
        <label className="form-label">
          Тип
          <select
            {...register("typeUse", {
              required: "Оберіть тип",
            })}
            className="form-adm-selected"
          >
            {typeCategory == "hair" ? <CategoryHair /> : <></>}
            {typeCategory == "body" ? <CategoryBody /> : <></>}
            {typeCategory == "face" ? <CategoryFace /> : <></>}
          </select>
          <div className="error-mess">
            {errors?.typeUse && <>{errors?.typeUse.message || "Помилка"}</>}
          </div>
        </label>
        {/* Виділення */}
        <label className="form-label">
          Виділення
          <select {...register("promo")} className="form-adm-selected">
            <option value=""></option>
            <option value="top">TOP</option>
            <option value="hot">HOT</option>
            <option value="sale">SALE</option>
          </select>
          <div className="error-mess">
            {errors?.promo && <>{errors?.promo.message || "Помилка"}</>}
          </div>
        </label>
        {/* Варіанти товару */}
        <label className="form-label">
          Ціна, знижка, різновид
          <ul className="form-ul-diferent">
            {varianProd}
            <div className="form-add-variant--cont-row">
              <button
                className="btn-form-style"
                type="button"
                onClick={addVariant}
              >
                Додати
              </button>
              <button
                className="btn-form-style"
                type="button"
                onClick={deleteVariant}
              >
                Видалити
              </button>
            </div>
          </ul>
        </label>
        {/* Опис товару */}
        <label className="form-label">
          Опис
          <textarea
            {...register("description", {
              required: "Введіть опис товару",
              minLength: { value: 100, message: "Мінімум 100 символів" },
              maxLength: { value: 1500, message: "Максимум 1500 символів" },
            })}
            className="form-admin-textarea"
            type="text"
          ></textarea>
          <div className="error-mess">
            {errors?.description && (
              <>{errors?.description.message || "Помилка"}</>
            )}
          </div>
        </label>
        {/*Характеристики  */}
        <label className="form-label">
          Характеристики
          <textarea
            {...register("options", {
              required: "Введіть характеристики товару",
              minLength: { value: 100, message: "Мінімум 100 символів" },
              maxLength: { value: 1500, message: "Максимум 600 символів" },
            })}
            className="form-admin-textarea"
            type="text"
          ></textarea>
          <div className="error-mess">
            {errors?.options && <>{errors?.options.message || "Помилка"}</>}
          </div>
        </label>
        {/* 5 переваг */}
        <label className="form-label">
          Переваги
          <ul className="form-ul-diferent">
            {benefit.map((item) => (
              <li  className="form-li-diferent-start">
                <span className="list-arrow list-arrow-dark"></span>
                <h3 className="list-text list-text-black">{item}</h3>
              </li>
            ))}
          </ul>
          <input
            {...register("benefit")}
            onChange={(e) => addBenefit(e.target.value)}
            className="form-adm-input"
            type="text"
            placeholder="Перерахуй через кому"
          ></input>
          <div className="error-mess">
            {errors?.benefit && <>{errors?.benefit.message || "Помилка"}</>}
          </div>
          
        </label>

        <label className="form-label">
          Зображення
          <input onChange={(e) => setImgProd(e.target.files)}  type="file" accept="image/png" multiple></input>
        </label>
        {console.log(imgProd)}
        <button type="submit" disabled={!isValid}className="btn-form-style">
          Додати товар
        </button>
        
      
      </form>
    </>
  );
};

export default AddProduct;
