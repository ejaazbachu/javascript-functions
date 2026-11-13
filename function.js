function city(capital) {
    console.log("The capital of kenya is " + capital);
}
city("Nairobi");

function country(name) {
    return "The country is " + name;
}
console.log(country("Kenya"));

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
reverseString("Hello");

function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("Hello"));

function capitalizeWords(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
console.log(capitalizeWords("hello world"));

function findMax(numbers) {
    return Math.max(...numbers);
}
function findMin(numbers) {
    return Math.min(...numbers);
}
console.log(findMax([1, 2, 3, 4, 5]));
console.log(findMin([1, 2, 3, 4, 5]));

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));

function filterEvenNumbers(numbers, condition) {
    let filtered = [];
    for (let i = 0; i < numbers.length; i++) {
        if (condition(numbers[i])) {
            filtered.push(numbers[i]);
        }
    }
    return filtered;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5], (num) => num % 2 === 0));

function calculateFactorial(n) {
    if (n === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(calculateFactorial(5));

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));

function fibonacci(n) {
    let fib = [];
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        fib.push(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
    return fib;
}
console.log(fibonacci(10));