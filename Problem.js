 
function filter(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

 
function greaterThan10(n) {
    return n > 10;
}
const arr1 = [0, 10, 20, 30];
const result1 = filter(arr1, greaterThan10);
console.log(result1); 

 
function firstIndex(n,i) {
    return i === 0;
}
const arr2 = [1, 2, 3];
const result2 = filter(arr2, firstIndex);
console.log(result2);  


function plusOne(n) { return n + 1 }
const arr3  = [-2,-1,0,1,2]  ;

const result3  = filter(arr3,plusOne)

console.log(result3); 





// Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
// Output: [-2,0,1,2]
// Explanation:
// Falsey values such as 0 should be filtered out

// Write 3 separate functions for the 3 examples above.

 
