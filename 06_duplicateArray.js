// You have 1 Array given
// You have to Duplicate that array
//  Array = [1,2,3,4]
//  Result = [1,2,3,4,1,2,3,4]

let arr = [1,2,3,4];

function DuplicateArray(array) {
    return array.concat(array)
}

console.log(DuplicateArray(arr));