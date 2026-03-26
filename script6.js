function calculator(num1 , num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result= num1 + num2;
            break;
        case '-':
            result= num1 - num2; 
            break;
        case '*':
            result= num1 * num2;
            break;
        case '/':
            result= num2 !==0 ? num1 / num2 : "Error :Div by 0";
            break;
    }
    console.log("The result is:", result);
}
   calculator(5 , 10, '+');
   calculator(5 , 20, '/');
   calculator(7 , 2, '*');
   calculator(4 , 2 ,'-');