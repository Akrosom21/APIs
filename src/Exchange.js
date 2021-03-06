import React, {useState} from "react";
import axios from "axios";

function Exchange() {
  const Key = '7339c6e7b31545c88c6a523cab2cdd24'
  const [toUsd, setToUsd] = useState(null)
  const [toEur, setToEur] = useState(null)
  const [toRub, setToRub] = useState(null)
  axios.get(`https://openexchangerates.org/api/latest.json?app_id=${Key}`)
      .then(data => {
          setToUsd((1 / data.data.rates.GBP).toFixed(2))
          setToEur((data.data.rates.EUR / data.data.rates.GBP).toFixed(2))
          setToRub((data.data.rates.RUB / data.data.rates.GBP).toFixed(2))
      })
  return (
    <div className="exchange">
      <h1>Currency Exchange</h1>
      <span>1 GPB =</span>
      <ul>
        <li>{toUsd} USD</li>
        <li>{toEur} EUR</li>
        <li>{toRub} RUB</li>
      </ul>
    </div>
  );
}

export default Exchange;
