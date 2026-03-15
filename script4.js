var num = 2;
if (num = 2) {
    console.log("positive number");
} else if ( num < 2) {
     console.log("negative number");
}

var num = 24;
if (num % 2 == 0 ) {
     console.log("even")
} else
    console.log("odd");

var age = 18;
console.log(age >= 18 ? "eligible" : "not eligible");

var num = 85;
if (num < 60) {
    console.log("Grade: F");
} else if (num < 70) {
      console.log("Grade: D");
} else if (num < 80) {
    console.log("Grade: C");
} else if (num < 90) {
    console.log("Grade: B");
} else if (num <= 100) {
     console.log("Grade: A");
} 

var num1 = 40;
var num2 = 20;
var operation = "*";
if (operation == "+") {
     console.log(num1 + num2);
} else if (operation == "-") {
    console.log(num1 - num2);
} else if (operation == "*") {
    console.log(num1 * num2);
} else if (operation == "/") {
     console.log(num1 / num2);
}