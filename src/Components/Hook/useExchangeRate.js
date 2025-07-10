import { useEffect, useState } from "react";

export default function useExchangeRate(base = "USD", target = "NPR") {
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.exchangerate.fun/latest?base=${base}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.rates?.[target]) {
          setRate(data.rates[target]);
          console.log(
            `[ExchangeRate API] 1 ${base} = ${data.rates[target]} ${target}`
          );
        } else {
          console.warn("Target currency not found in API response.");
        }
      })
      .catch((err) => {
        console.error("Exchange rate fetch failed:", err);
      })
      .finally(() => setLoading(false));
  }, [base, target]);

  return { rate, loading };
}
