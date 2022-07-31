// Print odds 1-20
for (var i = 1; i <= 20; i++) {
    if(i%2 == 1){
        console.log(i)
    }
}
// Decreasing Multiples of 3
for (var i = 100; i >= 1; i--) {
    if(i%3 == 0){
        console.log(i)
    }
}
// Print the sequence
for(var i=4; i>=-4; i -= 1.5){
    console.log(i);
}
// Sigma
var sum = 0;
for(var i=1; i<= 100; ++i){
    sum = sum + i;
}
console.log(sum)
// Factorial
var sum = 1;
for(var i=1; i<= 12; ++i){
    sum = sum * i;
}

console.log(sum)