import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
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
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

