import "./ProductList.css";
import { productList } from "../../Features/Products/productSlice";
import { useSelector } from "react-redux";
import Product from "./Product/Product";
import { useEffect, useState } from "react";

const ProductList = () => {
  const products = useSelector(productList);
  console.log(products);
  return (
    <ul>
      {products.map((product) => {
        return (
          <Product
            imgUrl={product.imgUrl}
            count={product.count}
            name={product.name}
            weigth={product.weigth}
            width={product.width}
            heigth={product.heigth}
            key={product.name}
          />
        );
      })}
    </ul>
  );
};

export default ProductList;
