export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150,
};

const tablet: Product = {
  description: "iPad Air",
  price: 350,
};

export interface TaxCalculationOptions {
  tax: number;
  product: Product[];
}

// function taxCalculation(options:TaxCalculationOptions):number[]{
// function taxCalculation({tax, products}:TaxCalculationOptions):[number,number]{
export function taxCalculation(options: TaxCalculationOptions): [number, number] {
  let total = 0;
  const { product: p, tax: t } = options;

  p.forEach(({ price }) => {
    total += price;
  });
  return [total, total * t];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculation({ product: shoppingCart, tax });

console.log("Total: ", result[0]);
console.log("Tax: ", result[1]);
