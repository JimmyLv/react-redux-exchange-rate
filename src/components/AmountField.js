import { useDispatch, useSelector } from 'react-redux'
import { getAmount, updateAmount } from '../store'

export function AmountField() {
  const dispatch = useDispatch();
  const amount = useSelector(getAmount);

  const handleAmountChange = (e) => {
    let newAmount = e.target.value;
    dispatch(updateAmount(newAmount));
  };
  return (
    <form className="ExchangeRate-form">
      <input
        aria-label="Amount in base currency"
        type="text"
        value={amount}
        onChange={handleAmountChange}
      />
    </form>
  );
}
