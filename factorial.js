// write a javascript code for n factorial numbers

let factorial = (n) => {
    if(n == 1)
    return n;
    else{
        return n * factorial(n-1)
    }
}

console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(6))
console.log(factorial(7))
console.log(factorial(8))
console.log(factorial(9))
console.log(factorial(10))