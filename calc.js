console.log("Hello, world!");

function doMath(num1,op,num2){

var result=null;
  switch(op){
    case "+":
      result= num1 + num2;
      break;
    case "/":
      result= num1 / num2;
      break;
    case "*":
      result= num1 * num2;
      break;
    case "-":
      result= num1 - num2;
      break;
  }
  console.log(result);
}
var num1 =parseFloat(process.argv[3]);
var op = process.argv[4];
var num2 = parseFloat(process.argv[5]);
doMath(num1,op,num2);
 console.log(process.argv[3]);
