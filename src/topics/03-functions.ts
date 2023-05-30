function addNumbers(a:number,b:number):number{
    return a + b;

}

const addNumbersArrow = (a:number,b:number):string => {
    return (a + b).toString();
}


function multiply(firstNumber:number,secondNumber?:number,base:number=2):number{
    return firstNumber * base;
}

interface Character{
    name:string;
    hp:number;
    showHp:()=>void;
}

const healCharacter =(character:Character,amount:number)=>{
    character.hp += amount;
}

const newCharacter:Character={
    name:'Strider',
    hp:100,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}


healCharacter(newCharacter,20);
newCharacter.showHp();



// const result:number=addNumbers(5,4);
// const result2:string=addNumbersArrow(5,9);
// const multiplyResult:number=multiply(5);

// console.log(result, result2, multiplyResult);

export {};
