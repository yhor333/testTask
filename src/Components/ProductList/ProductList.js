import "./ProductList.css";
import { productList } from "../../Features/Products/productSlice";
import { useSelector } from "react-redux";
import Product from "./Product/Product";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduts } from "../../Features/Products/productSlice";

const ProductList = ({ getProducts }) => {
  const products = useSelector(productList);
  let sortedArr = [];
  let [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    let sortedProducts = [...products]
      .sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase()
          ? -1
          : a.name.toLowerCase() > b.name.toLowerCase()
          ? 1
          : a.name.toLowerCase() < b.name.toLowerCase()
          ? -1
          : a.name.toLowerCase() > b.name.toLowerCase()
          ? 1
          : 0
      )
      .sort((a, b) => b.count - a.count);
    setListProducts(sortedProducts);
    const htmlProducts = document.querySelectorAll(".product");
    const dropdown = document.querySelector(".dropdown");
    const select = dropdown.querySelector(".select");
    const caret = document.querySelector(".caret");
    const menu = document.querySelector(".menu");
    const options = document.querySelectorAll("menu li");
    const selected = document.querySelector(".selected");
    select.onclick = () => {
      caret.classList.toggle("caret-rotate");
      menu.classList.toggle("menu-open");
    };

    options.forEach((option) => {
      option.addEventlistener("click", () => {
        selected.innerHTML = option.innerText;
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");
      });
    });

    htmlProducts.forEach((product) => {
      product.addEventListener("click", (event) => {
        console.log(products);
      });
    });
  }, [products]);
  return (
    <React.Fragment>
      <div className="dropdown">
        <div className="select">
          <span className="selected">Sort</span>
          <div className="caret"></div>
        </div>
        <ul className="menu">
          <li
            onClick={() => {
              sortedArr = [...products].sort((a, b) =>
                a.name.toLowerCase() < b.name.toLowerCase()
                  ? -1
                  : a.name.toLowerCase() > b.name.toLowerCase()
                  ? 1
                  : a.name.toLowerCase() < b.name.toLowerCase()
                  ? -1
                  : a.name.toLowerCase() > b.name.toLowerCase()
                  ? 1
                  : 0
              );
              setListProducts(sortedArr);
            }}
          >
            sort by name
          </li>
          <li
            onClick={() => {
              sortedArr = [...products].sort((a, b) => b.count - a.count);
              setListProducts(sortedArr);
            }}
          >
            sort by count
          </li>
        </ul>
      </div>
      <ul>
        {listProducts.map((product) => {
          return (
            <Product
              getProducts={getProducts}
              imgUrl={product.imgUrl}
              count={product.count}
              name={product.name}
              weigth={product.weigth}
              width={product.width}
              heigth={product.heigth}
              key={product.id}
              id={product.id}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default ProductList;
