import { useState } from "react";
import "./FormAddProduct.css";
import RenderInputs from "../RenderInputs/RenderInputs";

const FormAddProduct = ({ closeModal, getProducts }) => {
  const [formControls, setformControls] = useState({
    imgUrl: {
      value: "",
      type: "text",
      lable: "Img url",
      errorMessage: "Please, enter correct url",
      valid: false,
      touched: false,
    },
    name: {
      value: "",
      type: "text",
      lable: "Name",
      errorMessage: "This input can't be empty",
      valid: true,
      touched: false,
    },
    count: {
      value: 1,
      type: "number",
      lable: "Count",
      errorMessage: "Value can't be less then 0 or empty",
      valid: true,
      touched: false,
    },
    width: {
      value: 1,
      type: "number",
      lable: "Width",
      errorMessage: "Value can't be less then 0 or empty",
      valid: true,
      touched: false,
    },
    heigth: {
      value: 1,
      type: "number",
      lable: "Heigth",
      errorMessage: "Value can't be less then 0 or empty",
      valid: true,
      touched: false,
    },
    weigth: {
      value: 1,
      type: "number",
      lable: "Weigth (g)",
      errorMessage: "Value can't be less then 0 or empty",
      valid: true,
      touched: false,
    },
  });

  let [isFormValid, setFormValid] = useState(false);

  const isValidUrl = (urlString) => {
    try {
      return Boolean(new URL(urlString));
    } catch (e) {
      return false;
    }
  };

  const vlidateControl = (value, controlName) => {
    let isValid = false;

    if (typeof value === "number") {
      value = Number(value);
    }

    if (value) {
      isValid = true;
    }

    if (controlName === "imgUrl") {
      isValid = isValidUrl(value);
    }

    return isValid;
  };

  const onChangeHandler = (event, controlName) => {
    let newFormControls = formControls;
    const control = formControls[controlName];

    control.value = event.target.value;
    control.valid = vlidateControl(control.value, controlName);

    newFormControls[controlName] = control;
    setformControls((prevState) => ({
      ...prevState,
      [controlName]: {
        ...prevState[controlName],
        value: control.value,
        valid: control.valid,
        touched: true,
      },
    }));

    let chek = true;

    Object.keys(formControls).forEach((name) => {
      if (formControls[name].valid !== true) {
        chek = false;
      }
    });
    setFormValid(chek);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  function writeNewData() {
    const res = {};
    Object.entries(formControls).forEach((key) => {
      if (key[1].value) {
        res[key[0]] = key[1].value;
      }
    });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(res),
    };
    fetch("http://localhost:3000/posts/", requestOptions).then((response) => {
      if (response.status === 201) {
        getProducts();
        closeModal();
      } else {
        throw new Error(response.status);
      }
    });
  }

  return (
    <form onSubmit={(event) => submitHandler(event)}>
      <RenderInputs
        formControls={formControls}
        onChangeHandler={onChangeHandler}
      />

      <button onClick={closeModal}>Cancel</button>
      <input
        type={"submit"}
        value={"Apply"}
        disabled={!isFormValid}
        onClick={writeNewData}
      />
    </form>
  );
};

export default FormAddProduct;
