import {Product, taxCalculation} from './06-function-destructuring.ts'


const shoppingCart:Product[] = [
    {
        description: "Phone 1",
        price: 100
    },
    {
        description: "Phone 2",
        price: 200
    },
    {
        description: "Phone 3",
        price: 300
    }
]

const [total, tax]=taxCalculation({
    product:shoppingCart, 
    tax:0.15
});

console.log("Total: ", total);
console.log("Tax: ", tax);