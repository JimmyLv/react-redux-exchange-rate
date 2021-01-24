import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCurrencyData } from "../store";
import { AmountField } from "./AmountField";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { RateTable } from "./RateTable";

export function ExchangeRate() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateCurrencyData());
  }, []);
  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates <CurrencyCodePicker />
        </h1>
      </section>
      <section>
        <AmountField />
      </section>
      <section>
        <RateTable />
      </section>
    </>
  );
}
