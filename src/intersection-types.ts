

//uses the & symbol. Combines multiples types into 1

type Type1 = {
    name : string;
}

type Type2 = {
    age : number;
}

type Type3 = Type1 & Type2;  // This type 2 has rhe properties of both type 1 and type 2


let user : Type3 = {
    name : "Yogesh",
    age : 22,
}

console.log(user);


//Also with with same in interface