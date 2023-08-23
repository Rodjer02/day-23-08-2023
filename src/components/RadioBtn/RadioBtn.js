import "./RadioBtn.css";
export default function RadioBtn({ currencies, setCurrencies, nameRadioBtn }) {
  return (
    <>
      {currencies.map((currency, i, arr) => (
        <div className="form_radio_btn" key={currency.id}>
          <input
            style={{ padding: "20px 10px", border: "solid 1px black" }}
            type="radio"
            id={nameRadioBtn + currency.id}
            value={currency.title}
            name={nameRadioBtn}
          />
          <label htmlFor={nameRadioBtn + currency.id}>{currency.title}</label>
        </div>
      ))}
    </>
  );
}
