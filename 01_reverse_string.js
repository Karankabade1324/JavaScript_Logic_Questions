// 1 string is given, we have to reverse it.
// String  --> Hello karan how are you
// Result --> you are how karan Hello

let mainString = "Hello karan how are you";

let resultString = mainString.split(" ").reverse().join(" ");

console.log(resultString);