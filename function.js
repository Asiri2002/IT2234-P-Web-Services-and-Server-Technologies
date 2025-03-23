function printmsg(){
    console.log("hellow world");
}
printmsg();

console.log("\n");

function sum(a,b){
    return a + b;
}
console.log(sum(10,15));

function sub(){
    return 15-10;
}
console.log(sub());

console.log("\n");

// write a  boolean function to find a given number is prime

function prime(n){
    let isPrime = true;
    if (n === 1) {
        return false;
    }else if (n > 1) {
        for (let i = 2; i <= n/2; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            return true;
        } else {
            return false;
        }
    }
    else {
        return false;
    }
}

console.log("10: "+prime(10));
console.log("3: "+prime(3));
console.log("2: "+prime(2));
console.log("299: "+prime(299));
console.log("4: "+prime(4));

console.log("\n");

// using recursion 
function isPrime(n, divisor = 2) {
    if (n <= 1) return false;
    if (divisor > Math.sqrt(n)) return true;
    if (n % divisor === 0) return false;
    return isPrime(n, divisor + 1);
}
console.log(isPrime(11));
console.log(isPrime(15)); 
console.log(isPrime(2));  
