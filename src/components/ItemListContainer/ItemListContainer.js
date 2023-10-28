import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

/*    useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (categoryId) {
          response = await getProductsByCategory(categoryId);
        } else {
          response = await getProducts();
        }
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [categoryId]); */

  useEffect(() =>{
    const coleccionProductos = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)):collection(db, "productos")
    getDocs(coleccionProductos)
    .then((res)=> {
      const list = res.docs.map((product)=> {
        return{
          id:product.id,
          ...product.data()
        }
      })
      setProducts(list)
    })
    .catch((error)=> console.log(error))
  }, [categoryId])

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

