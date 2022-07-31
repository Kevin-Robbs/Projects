// Always Hungry
function alwaysHungry(arr) {
    var inArray = false
    for(var i=0; i < arr.length; ++i){
        while(arr[i] == "food"){
            console.log("yummy")
            inArray = true
            break;
        }
    }

    if(inArray == false){
        console.log("I'm hungry")
    }
} 
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; ++i){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// Better than average
function betterThanAverage(arr) {
    var sum = 0;
    var avg = 0;
    for(var i=0; i<arr.length; ++i){
        sum = sum + arr[i];
    }
    avg = sum / arr.length

    var count = 0
    for(var i=0; i<arr.length; ++i){
        if(arr[i]>avg){
            ++count
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//Array Reverse
function reverse(arr) {
    var newArray = []
    for(var i=arr.length; i>0; --i){
        newArray.push(arr[i-1])
    }


    return newArray;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    var newArray = []
    newArray.push(fibArr[0])
    newArray.push(fibArr[1])
    for (var i = 2; i < n; i++) {
        
        sum = fibArr[0] + fibArr[1]; //1
        newArray.push(sum);
        fibArr[0] = fibArr[1]; //index 0 now equals 1
        fibArr[1] = sum; //index of 1 now equals 1 or value of sum
        
    }
    return newArray
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



