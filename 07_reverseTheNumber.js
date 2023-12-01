//  1 Number is given, Reverse that number.

function reverseNumber(num) {
    return num.toString().split("").reverse().join("");
}

console.log(reverseNumber(45678));