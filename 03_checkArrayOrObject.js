// Check whether the given data is array or object.

function checkArray(data){
    return Array.isArray(data);
}

console.log(checkArray({}));  // returns false  Means Not an Array
console.log(checkArray([]));  // Returns true  Means Its an Array