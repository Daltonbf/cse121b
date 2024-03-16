function add(number1, number2) {
    return number1 + number2;
  }
  function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);
  const subtract = function(number1, number2) {
    return number1 - number2;
  };
  const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
  };
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
  const multiply = (number1, number2) => number1 * number2;
  const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
  };
  document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
  function divide(number1, number2) {
    return number1 / number2;
  }
  const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
  };
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
  document.querySelector('#getTotalDue').addEventListener('click', function() {
    let subtotal = parseFloat(document.querySelector('#subtotal').value);
    let membershipCheckbox = document.querySelector('#membership').checked;
    let discount = membershipCheckbox ? subtotal * 0.2 : 0;
    let total = subtotal - discount;
    document.querySelector('#total').textContent = `Total Due: $${total.toFixed(2)}`;
  });
  let array = Array.from({length: 13}, (_, i) => i + 1);
  document.querySelector('#array').textContent = array;
  let oddNumbers = array.filter(num => num % 2 !== 0);
  document.querySelector('#odds').textContent = oddNumbers;
  let evenNumbers = array.filter(num => num % 2 === 0);
  document.querySelector('#evens').textContent = evenNumbers;
  let sumOfArray = array.reduce((acc, cur) => acc + cur, 0);
  document.querySelector('#sumOfArray').textContent = sumOfArray;
  let multiplied = array.map(num => num * 2);
  document.querySelector('#multiplied').textContent = multiplied;
  let sumOfMultiplied = array.map(num => num * 2).reduce((acc, cur) => acc + cur, 0);
  document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;