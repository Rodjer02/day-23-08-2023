import ConvertorForm from "../ComvertorForm/ConvertorForm";

export default function FromThisCurrency({ currencies, setCurrencies }) {
  return (
    <>
      <ConvertorForm
        currencies={currencies}
        setCurrencies={setCurrencies}
        nameRadioBtn={"inThisCurrency"}
      />
    </>
  );
}
