// import React from 'react'
import { useState, useEffect } from "react";
// import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  const {categoryId} = useParams()

  useEffect(() => {

    const productsRef = !categoryId 
    ? collection(db, "products")
    : query(collection(db, "products"), where("category", "==", categoryId))
    
    getDocs(productsRef)
      .then(querySnapshot =>{
        const productsAdapted = querySnapshot.docs.map(doc => {
          const fields = doc.data()
          return {id: doc.id, ...fields}
        })
        setProducts(productsAdapted)
      })

    // const asyncFunc = categoryId ? getProductsByCategory : getProducts

    // asyncFunc(categoryId)
    //   .then(response => {
    //     setProducts(response)
    //   })
    //   .catch(error => {
    //     console.error(error)
    //   })
  }, [categoryId])

  return (
    <div>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
    </div>    
  )
}

export default ItemListContainer;
