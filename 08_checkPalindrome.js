function CheckPalindrome(name){
    const palString = name.split("").reverse().join("")
    if(palString == name){
        console.log("Yes Its Palindrome");
    }
    else{
        console.log("No Its Not");
    }
}

CheckPalindrome('karak')