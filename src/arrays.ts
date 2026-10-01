

let names : string[] = ["Yogesh", "Sanket", "Jeyush"];  //yesko type string of array ho
console.log(names);

let ages : number[] = [12, 31, 34, 67];  //yesko type string of number ho
console.log(ages);

let results : boolean[] = [true, false, false]; 
console.log(results);

names.push("Goat");//This is valid
console.log(names);




// names.push(24); //yesle eror dinxa. Because name is already declared as array of string
// src/arrays.ts:15:12 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
// 15 names.push(24); //yesle eror dinxa. Because name is already declared as array of string



//ts can infer array types also
// let fruits = ["Mango", "Apple", "Banana"]; // ts sees the values and infer names->string[]
// console.log(fruits);

// fruits.push(245);
// console.log(fruits); //yesle error dinxa 