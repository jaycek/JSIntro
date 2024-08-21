document.write("Hello World -Changed");
document.write("<br>");
document.write("Hello World- Changed");
console.log("This is a test message")
console.warn("Warning")
console.error("error message")

// Single line comment
/*This 
is a 
multiline comment */

//let var const

let person 
person="Anie"
console.log(person)

var age=19
console.log(age)

const pi=3.14
console.log(pi)

console.log(a)
var a=10

// console.log(b)
// let b=10
//Hoisting

function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // same variable
        console.log(x);  // 2
    }
    console.log(x);  // 2
}
varTest()

function letTest() {
    let y = 1;
    if (true) {
        let y = 2;  // different variable
        console.log(y);  // 2
    }
    console.log(y);  // 1
}
letTest()