

//Optional properties
type Anime = {
    name : string,
    genre : string[],
    duration : number,
    rating? : number, // rating optional ho. 
};

let anime : Anime = {
    name : "One piece",
    genre : ["Adventure", "Comedy"],
    duration : 24,
    // rating : 9.2, yesma rating nadida pani hunxa.Beause rating is optional
};
console.log(anime);