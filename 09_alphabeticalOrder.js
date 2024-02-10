function alphabeticalOrder(string) {
    const newString = string.split("").sort().join("");
    console.log(newString);
}

alphabeticalOrder("abcdefhg")
alphabeticalOrder("karan")