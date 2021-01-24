import { useSelector } from "react-redux";
import { getAmount, getCurrencyData } from "../store";

export function RateTable() {
  const amount = useSelector(getAmount);
  const currencyData = useSelector(getCurrencyData);

  return (
    <table className="ExchangeRate-table">
      <tbody>
        {Object.entries(currencyData).map(([code, rate]) => {
          // NOTE: normally avoid floating point math in JS
          const exchangeAmount = amount * rate || 0.0;
          return (
            <tr key={code}>
              <td>{code}</td>
              <td>
                {exchangeAmount.toLocaleString("en", {
                  style: "currency",
                  currency: code,
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
