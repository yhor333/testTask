import Input from "../Input/Input";

const RenderInputs = ({ formControls, onChangeHandler }) => {
  return Object.keys(formControls).map((controlName, index) => {
    const control = formControls[controlName];
    return (
      <Input
        lable={control.lable}
        key={control + index}
        type={control.type}
        value={control.value}
        valid={control.valid}
        touched={control.touched}
        errorMessage={control.errorMessage}
        onChange={(event) => onChangeHandler(event, controlName)}
      />
    );
  });
};

export default RenderInputs;
