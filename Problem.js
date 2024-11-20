 
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

 
function firstIndex(n, i) {
    return i === 0;
}
const arr2 = [1, 2, 3];
const result2 = filter(arr2, firstIndex);
console.log(result2);  

 
