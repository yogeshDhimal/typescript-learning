

// emuns : A group of realted, fixed named values

//lets say: status 3 ota matra xa: pending, approved, rejected, so for this we can create enum and group them

// enum Status {
//     Pending,  //0   they are representred by  numbers 0, 1, 2, 3.........
//     Approved, //1
//     Rejected //2
// };

// let status : Status = Status.Approved;
// console.log(status); // this will give 1 in output


// enum Role {
//     User, 
//     Admin, 
//     Moderator
// };

// let role : Role = Role.Moderator;

// console.log(role); //output ma 2 dinxa

//enum ko value deault ma number ma hunxa. Tyo lai string ma pani banauna milxa
//Like this : 

enum Role {
    User = "User",
    Admin = "Admin",
    Moderator = "Moderator",
};

let role : Role = Role.Admin;
console.log(role); //aaba chai yesle admin nai dinxa






//using enums in functions


enum Status {
    Pending = "Pending",
    Approved = "Approved",
    Rejected = "Rejected",
};

function updateStatus (status : Status) : void {
    console.log(`Status : ${status}`);
};

updateStatus(Status.Approved);
