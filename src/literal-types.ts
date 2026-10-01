

// A type that alloes only a specific value

let direction : 'left' | "right";
direction = "left";
console.log(direction);

direction = "right";
console.log(direction);

//yesle error dinxa. Because direction can be either left or right
direction = "down";