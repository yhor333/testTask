import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import FormAddProduct from "../../Components/FormAddProduct/FormAddProduct";
import ProductList from "../../Components/ProductList/ProductList";
import { useSelector } from "react-redux";
import "./ListPage.css";
import { useDispatch } from "react-redux";
import { addProduts } from "../../Features/Products/productSlice";
import { useEffect } from "react";

let isResposeExist = false;

const ListPage = () => {
  const { products } = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  function getProducts() {
    let url = "http://localhost:3000/posts/";
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          isResposeExist = true;
        }
        return response.json();
      })
      .then((result) => {
        return dispatch(addProduts(result));
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    if (isResposeExist) return;
    getProducts();
  });

  return (
    <main className="main">
      <div>
        <h2>Your List</h2>
        <ProductList />
        <hr />
        <Popup
          modal
          trigger={<button className="button">Add product</button>}
          closeOnDocumentClick
        >
          {(close) => (
            <FormAddProduct closeModal={close} getProducts={getProducts} />
          )}
        </Popup>
      </div>
    </main>
  );
};

export default ListPage;
