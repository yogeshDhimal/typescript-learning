

let value : any;

value = 25;
console.log(value);

value = "Apple";
console.log(value);

value = ["apple", "Ball"];
console.log(value);

//here all of these ar valid . any vaneko jun pani type dida hunxa




//any le type checking hatauxa. flexibility dinxa tara code run garda error aaune kura pani allow garxa
//example : 
let value2: any = "Hello";

console.log(value2.toUpperCase()); // works
console.log(value2.toFixed());     // TypeScript allows it/ tofixd vanekoi number ko metho ho, yo compile garda error auuxa tara ts le aaile kei error ni deko xaina