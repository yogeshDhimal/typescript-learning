


// One practical example


//example api response
interface ApiResponse<T> {
    data : T;
    success : boolean;
}


interface User {
    name : string;
    age : number;
}



//user respose example

let userResponse : ApiResponse<User> = {
    data : {
        name : "Yogesh Dhimal",
        age : 21,
    },
    success : true,
}
console.log(userResponse);


// Yo ni garna milxa. Same Apiresponse use garna milxa tala ko sabai ma. 
// ApiResponse<User>
// ApiResponse<Product>
// ApiResponse<Product[]>
// ApiResponse<string>