function sum(first, second){
  var result = (first + second);
  document.write(result);
}

function subtract(first, second){
  var result = first - second;
  document.write(result);
}

function multiply(first, second){
  var result = first * second;
  document.write(result);
}

function division(first, second){
  var result = first / second;
  document.write(result);
}

var choice = window.prompt("Choose 'a' for addition, 's' for subtraction, 'm' for multilplication and 'd' for division");

var first = Number(window.prompt("Input first number"));

var second = Number(window.prompt("Input second number"));

if (choice === 'a'){
  sum(first, second)
}else if (choice === 's'){
  subtract(first, second)
}else if (choice === 'm'){
  multiply(first, second)
}else if (choice === 'd'){
  division(first, second)
}else{document.write('error')}