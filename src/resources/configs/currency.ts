export const supportedCurrencies = ["IDR", "USD", "SGD"];

export const numberFormatByCurrency = supportedCurrencies.reduce(
  (acc, currency) => {
    acc[currency] = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    });
    return acc;
  },
  {} as Record<string, Intl.NumberFormat>,
);

export const formatCurrency = (amount: number | string, currency: string) => {
  if (typeof amount === "string") {
    return numberFormatByCurrency[currency].format(Number.parseFloat(amount));
  }
  return numberFormatByCurrency[currency].format(amount);
};
