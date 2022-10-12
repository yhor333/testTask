import Popup from "reactjs-popup";
import "./Product.css";
import Editor from "../../Editor/Editor";

const Product = ({
  name,
  count,
  heigth,
  imgUrl,
  weigth,
  width,
  id,
  getProducts,
}) => {
  function deleteProduct(id) {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      if (response.status === 200) {
        getProducts();
      }
    });
  }
  return (
    <li className="product">
      <div className="product__img-wrapper">
        <img src={imgUrl} alt={name}></img>
      </div>
      <div className="product__description-wrapper">
        <h3>{name}</h3>
        <h6>Heigth {heigth}</h6>
        <h6>Width {width}</h6>
        <h6>Weigth {weigth}</h6>
        <h6>Count {count}</h6>
        <Popup trigger={<button>Delete</button>}>
          {(close) => (
            <div>
              <button onClick={() => deleteProduct(id)}>Apply</button>
              <button onClick={() => close()}>Cancel</button>
            </div>
          )}
        </Popup>
        <Popup trigger={<button id={id}>Edit</button>}>
          {(close) => (
            <Editor id={id} getProducts={getProducts} closeModal={close} />
          )}
        </Popup>
      </div>
    </li>
  );
};

export default Product;
