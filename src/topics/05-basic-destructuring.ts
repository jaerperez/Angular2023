

interface AudioPLayer{
    audioVolumen:number;
    songDuration:number;
    song:string;
    details:Details;
}

interface Details{
    author:string;
    year:number;
}

const audioPlayer:AudioPLayer={
    audioVolumen:90,
    songDuration:360,
    song:'La macarena', 
    details:{
        author:'Los del rio',
        year:1994
    } 
}

// const {song:anothersong,songDuration:duration, details}=audioPlayer;
// const {author:aut}=details;

// console.log('song:',anothersong);
// console.log('duration:',duration);  
// console.log('author:',aut);





export{}