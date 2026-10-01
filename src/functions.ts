
//In js we write like this
// function add (a, b) {
//     return a + b;
// };
// console.log(add(5, 7));


//but in ts

function add (a:number, b:number):number {
    return a + b;
};
console.log(add(10, 78));


//optional parameters in functions
function greet(name? : string) : void {
    console.log(`Hello ${name}`);
}

//both of these works because name is optional
(greet());//here it will be Hello undefined. optional paramater dena vane tyo undefined hunxa

(greet("Thomas"));



//default parameters : A parameter that gets a default value when no value is provided.
function greet2(name : string = "bro"){
    console.log(`Hello ${name}`);
};

greet2();


