const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult,){
 const logEntry = {
  operation: operationIdentifier,
  prevResult: prevResult,
  number: operationNumber,
  result: newResult
 };
 logEntries.push(logEntry);
 console.log(logEntries);
}


function calculateResult(calculationType){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult; 
  let mathOperator;

  if(enteredNumber == 0){
    return;
  }

  if (calculationType === 'ADD'){
    mathOperator='+';
    currentResult += enteredNumber;
  } else if (calculationType === 'SUBTRACT'){
    mathOperator = '-';
    currentResult -= enteredNumber;
  } else if (calculationType === 'MULTIPLY'){
    mathOperator = '*';
    currentResult *= enteredNumber;
  } else if (calculationType === 'DIVIDE'){
    mathOperator = '/';
    currentResult /= enteredNumber;
  }




  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);

}


function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY')
}

function divide() {
  calculateResult('DIVIDE')
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);