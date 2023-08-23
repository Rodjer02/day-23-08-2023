import Input from "../Input/Input";
import RadioBtn from "../RadioBtn/RadioBtn";

export default function ConvertorForm({
  currencies,
  setCurrencies,
  nameRadioBtn,
}) {
  return (
    <div className="form">
      <RadioBtn
        className="buttons"
        currencies={currencies}
        setCurrencies={setCurrencies}
        nameRadioBtn={nameRadioBtn}
      />
      <Input />
    </div>
  );
}
