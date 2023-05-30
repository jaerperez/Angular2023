let skills:string[]=['bash','counter'];

interface Character{
    name:string,
    hp:number,
    skills:string[],
    hometwon?:string
}


const strider:Character={
    name:'strider',
    hp:100,
    skills:['bash','counter'],
}

const dracula:Character={
    name:'dracula',
    hp:1000,
    skills:['bash','counter','fly','bite','bit'],
}

strider.hometwon='Gotham';

console.table(dracula);
