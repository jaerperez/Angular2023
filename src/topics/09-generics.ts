export function whatsMytype<T>(argunment:any):T {
    return argunment;
}


// const amIsString = whatsMytype<string>('Hello');
// const amIsNumber = whatsMytype<number>(1);
// const amIsBoolean = whatsMytype<boolean>(true);

const amIsString:string = whatsMytype('Hello');
const amIsNumber:number = whatsMytype(1);
const amIsBoolean:boolean = whatsMytype(true);    




console.log(amIsString.split(''));
console.log(amIsNumber.toFixed(2));
console.log(amIsBoolean);



