import "./index.css";
import FromThisCurrency from "./components/FromThisCurrency/FromThisCurrency";
import InThisCurrency from "./components/InThisCurrency/InThisCurrency";
import { useState } from "react";

function App() {
  const [currencies, setCurrencies] = useState([
    { title: "RUB", id: 1 },
    { title: "USD", id: 2 },
    { title: "EUR", id: 3 },
    { title: "GBP", id: 4 },
  ]);

  return (
    <div className="App">
      <div className="convertor">
        <FromThisCurrency
          currencies={currencies}
          setCurrencies={setCurrencies}
        />
        <InThisCurrency currencies={currencies} setCurrencies={setCurrencies} />
      </div>
    </div>
  );
}

export default App;
