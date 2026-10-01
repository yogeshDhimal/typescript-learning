

//Type narrowing: Checking the type of a value so TypeScript knows its specific type
// let value : string | number = "Ball";

// if(typeof value === "string") {
//     console.log(value.toUpperCase());
// };


let value: string | number = 100;

if (typeof value === "number") {
  console.log(value.toFixed(2));
}

//type narrowing is  mainly used when the same variable can contain different types, and we need to handle each type differently