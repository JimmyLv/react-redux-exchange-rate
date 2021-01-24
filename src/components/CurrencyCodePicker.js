import { useDispatch, useSelector } from "react-redux";
import { getCurrencyCode, supportedCurrencies, updateCurrencyCode } from '../store'

export function CurrencyCodePicker() {
  const dispatch = useDispatch();
  const currencyCode = useSelector(getCurrencyCode);

  function setCurrencyCode(e) {
    dispatch(updateCurrencyCode(e.target.value));
  }
  return (
    <select
      className="currencyCode"
      value={currencyCode}
      onChange={setCurrencyCode}
    >
      {supportedCurrencies.map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
}
