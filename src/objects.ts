

//In js
// let user = {
//     name : "Yogesh Dhimal",
//     email : "yogesh@email.com"
// };
// console.log(user);


//but in ts we write like this 
let user : {name : string, email: string} = {
    name: "Sanket Dhungana",
    email: "sanket@email.com",
};
console.log(user);


//type allias : A name given to type so we can reuse it. 
type Movie = {
    name : string,
    genre : string,
    duration : number,
}

let movie : Movie = {
    name : "Best movie",
    genre : "Horror",
    duration : 120
}
console.log(movie);