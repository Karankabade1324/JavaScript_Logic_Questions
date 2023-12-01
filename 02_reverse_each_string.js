//  1 String is given, we have to reverse each word of that string.
//  String  --> My name is karan
//  Result  ==> narak si eman yM

let mainString = "My name is karan";

let resultString = mainString.split(" ").reverse().map(function(word){
    return word.split("").reverse().join("");
});

console.log(resultString.join(" "));