
//yo normal generic function vayo
function getValue<T> (value : T) {
    console.log(value);
}

//aaba yesma default type dinuparo vane:
// function getValue2<T = string>(value : T) {
//     console.log(value);
// }
// getValue2("Yogesh");





//Note :::::: A better example is when thjere is no argument from which ts can infer types. Yo bela chai default kam lagxa
function createArray<T = string>(): T[] {
    return [];
}
let result = createArray(); // default ma yo a rray of string ho
console.log(result); 

let result2 = createArray<number>(); // yesma maile number vane so yo rray of number vayo