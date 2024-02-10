function camelCase(string){
    const CamelString = string.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
       
    });
    console.log(CamelString.join(" "));
}

camelCase("karan ambadas kabadE");