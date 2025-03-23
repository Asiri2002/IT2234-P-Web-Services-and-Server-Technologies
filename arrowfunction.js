//arrowfunction
const msg = () => {return "hellow"};
console.log(msg());

//sum two numbers
const sum = (x,y) => {return x + y}
console.log(sum(10,20));
console.log(sum(1,9));
console.log(sum(100,1));

console.log("\n")

//default parameters
const mult = (x=10,y=100) => {return x*y}
console.log(mult())
console.log(mult(90))
console.log(mult(x=4))
console.log(mult(y=3))
console.log(mult(4,5))

console.log("\n")

//takes n as an array of numbers
const mysum = (...n) => {
    let sum = 0; for(let array of n){
        sum += array;
    } 
    console.log(sum);
};
mysum(10,20,30);
mysum(1,2,3,4,5,6);

console.log("\n");

const mysub = (...n) => {
    let sub = 0;for(let array of n){
        sub -= array;
    }
    console.log(sub);
}
mysub(20,200,400);

console.log("\n");

const mysum2 = (...n) => {return n.reduce((t,i) => t = t + i)};
console.log(mysum2(1,2,3,4,5));
console.log("\n")

// callback function: function passing as parameter to anthor function
const greet= (msg, fun) => {
    console.log("Hi..." +msg);
    fun();
}

greet("Good Morning", () => {console.log("Asiri")});

const myName= (name) => {console.log("My name is"+ name)};