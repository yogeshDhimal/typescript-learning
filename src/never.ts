// 


//never represent a value that never occurs


function throwError() : never {
    throw new Error("Something went wrong");
} //yo function le kaile pani value return gardaina because it always throws error



//Never is used: never infinite lop vako function sanga pani use hunxa. yo function kaile finish hudaina, so it never return value.

function runForever(): never {
    while (true) {
      console.log("Running...");
    }
}

// runForever(); this will run forever