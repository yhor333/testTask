import "./Product.css";

const Product = ({ name, count, heigth, imgUrl, weigth, width }) => {
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
      </div>
    </li>
  );
};

export default Product;
