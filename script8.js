//Random number
let random_variable100 = (Math.floor (Math.random()*100));
console.log(random_variable100);
//sqr root
let sqr_root = (Math.sqrt(64));
console.log(sqr_root);
//power
let power = (Math.pow(2,3));
console.log(power);
//generate number 1 and 10
let random_variable10 = (Math.floor(Math.random())*10 + 1);
console.log(random_variable10);
//guessing number
let game_number = Math.floor(Math.random()*10) + 1;
let user_guess = 5;
console.log("Computer Number:" + game_number);
if (user_guess === game_number) {
    console.log("Correct Guess");
} else {
    console.log("Try Again");
}
