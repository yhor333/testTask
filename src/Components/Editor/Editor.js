import { useSelector } from "react-redux";
import { productList } from "../../Features/Products/productSlice";
import FormAddProduct from "../FormAddProduct/FormAddProduct";

const Editor = ({ id, getProducts, closeModal }) => {
  const products = useSelector(productList);
  let heigth;
  let width;
  let count;
  let weigth;
  let name;
  let imgUrl;
  for (let item of products) {
    if (item.id === +id) {
      heigth = item.heigth;
      width = item.width;
      count = item.count;
      weigth = item.weigth;
      name = item.name;
      imgUrl = item.imgUrl;
    }
  }
  return (
    <FormAddProduct
      getProducts={getProducts}
      heigth={heigth}
      id={id}
      imgUrl={imgUrl}
      name={name}
      weigth={weigth}
      count={count}
      width={width}
      closeModal={closeModal}
    />
  );
};

export default Editor;
