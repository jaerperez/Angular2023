
export  interface passenger {   
    name: string;
    children?: string[];
}

const passenger1: passenger = {
    name: 'John',
    children: ['Jane', 'John']
}

const passenger2: passenger = {
    name: 'Jaer',
}

const printChildren2=(passenger:passenger)=>{
    const children= passenger.children?.length || 0;
    console.log(children);
}

printChildren2(passenger1);
printChildren2(passenger2);
