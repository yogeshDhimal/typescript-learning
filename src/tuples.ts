

//Tuple : Array where each position has specific type

let user : [string, number] = ["Yogesh", 20]; // here position 0 is string and position 1 is number so this is correct
console.log(user);


//But this is mistake as types are in wrong positions. 
// let user : [string, number] = [12. "Sanket"];


//we can access tuples just like arrays.
console.log(user[0]);
console.log(user[1]);

