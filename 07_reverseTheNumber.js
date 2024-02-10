//  1 Number is given, Reverse that number.

// Method 1

function reverseNumber(num) {
    return num.toString().split("").reverse().join("");
}
console.log(reverseNumber(45678));

// Method 2
// function reversingNumber(num){
//     revrs = 0;
//     while (num>0) {
//         let rem = num%10;
//         revrs = revrs*10+rem;
//         num = Math.floor(num/10)
        
//     } console.log(revrs);
// }
// console.log(reversingNumber(1234));
