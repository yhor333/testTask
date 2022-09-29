import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import FormAddProduct from "../../Components/FormAddProduct/FormAddProduct";
import { useState } from "react";
import ProductList from "../../Components/ProductList/ProductList";
import Loader from '../../Components/Loader/Loader';
import { useSelector } from 'react-redux';
import './ListPage.css';

const ListPage = () => {
  const { isLoading, products } = useSelector((state) => state.productList)
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
      <main className="main">
        <div>
          <h2>Your List</h2>
          { isLoading ? <Loader /> : <ProductList />}
          <button onClick={() => console.log(products)}>DAAAAAA</button>
          <hr />
          <Popup modal open={open} closeOnDocumentClick onClose={closeModal}>
            <FormAddProduct closeModal={closeModal}/>
          </Popup>
        </div>
      </main>
  );
};

export default ListPage;
