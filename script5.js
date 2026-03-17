// Num from 1 to 10
var i = 1;
while (i < 11 ) {
    console.log(i);
    i++;
}
// Even num from 1 to 20
var i = 2;
while (i <= 20) { 
    console.log(i);
    i += 2;
}
// Reverse order
var i = 10;
 for (var i = 10; i>=1; i--) {
    console.log(i);
 }
//  Switch statement
var dayNumber = 4;
 switch (dayNumber) {
    case 1:
    console.log("Monday")
    break;
    case 2:
        console.log("Tuesday")
        break;
     case 3:
      console.log("Wednesday")
      break;
      case 4:
        console.log("Thursday")
        break;
        case 5:
        console.log("Friday")
        break;
        case 6:
         console.log("Saturday")
         break;
         case 7:
         console.log("Sunday")
         break;
 }
//  Grade message
var grade = "C";
switch(grade) {
    case "A":
        console.log("Excellent work!") 
        break;
    case "B":
        console.log("well done!")
        break;
    case "C":
        console.log("Good effort,but need of improvement")
        break;
    case "D":
        console.log("You passed,but need of practice")
        break;
}
// pattern
for (var i = 1; i<= 5; i++) {
    var star = ""
    for (var j = 1; j <= i; j++) {
        star += "*";
    }
    console.log(star);
}