import { Discount } from "../types";

export function formatPrice(price: number, decimalPlaces = 0): string {
  const lakSymbol = "₭";
  return price ? price
    .toLocaleString("en-US", {
      style: "currency",
      currency: "LAK",
      currencyDisplay: "symbol",
      minimumFractionDigits: decimalPlaces,
    })
    .replace("LAK", lakSymbol) : '';
}

export const calculateDiscountedPrice = (
  originalPrice: number,
  discount: Discount,
): number => {
  let discountAmount: number;
  if (discount.type === "percentage") {
    discountAmount = (originalPrice * discount.value) / 100;
  } else discountAmount = discount.value;

  const discountedPrice: number = originalPrice - discountAmount;
  return discountedPrice;
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};



  // Function to disable keyboard interactions
 export const disableKeyboard = () => {
    document.addEventListener('keydown', handleKeyDown);
  };

  // Function to enable keyboard interactions
export  const enableKeyboard = () => {
    document.removeEventListener('keydown', handleKeyDown);
  };