import React, {useState} from 'react'
import "../Calculator.css"
import Screen from './Screen'
import Key from './Key'

const Calculator = () => {

  const [valueDisplayedOnScreen, setValueDisplayedOnScreen] = useState("0");
  const [inputValue, setInputValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [expectsInput, setExpectsInput] = useState(false);

  const mathOperatorKeys = ["/", "x", "-", "+", "="];
  const functionalKeys = ["AC", "+/-", "%"];

  const handleActionToExecute = value => {
    if(functionalKeys.includes(value)) {
      handleFunctionalKeyClick(value);
    }
    else if(mathOperatorKeys.includes(value)) {
      handleMathOperatorKeyClick(value)
    }
    else {
      handleNumberKeyClick(value);
    }
  }

  const handleFunctionalKeyClick = value => {
    switch (value) {
      case "AC": allClear(); break;
      case "+/-": inverse(); break;
      case "%": percentage(); break;
      // no default
    }
  }

  const allClear = () => {
    setValueDisplayedOnScreen("0");
    setInputValue(null);
    setOperator(null);
    setExpectsInput(false);
  }

  const inverse = () => {
    setValueDisplayedOnScreen(-parseFloat(valueDisplayedOnScreen));
  }

  const percentage = () => {
    setValueDisplayedOnScreen(parseFloat(valueDisplayedOnScreen)/100);
  }

  const handleNumberKeyClick = value => {
    if(expectsInput){
      setValueDisplayedOnScreen(value);
      setExpectsInput(false);
    } 
    else {
      setValueDisplayedOnScreen(valueDisplayedOnScreen === "0" ? String(value) : valueDisplayedOnScreen + value); 
    }
  }

  const handleMathOperatorKeyClick = value => {
    const screenValueOfCalculatorInFloat = parseFloat(valueDisplayedOnScreen);
    
    if (inputValue === null) {
      setInputValue(parseFloat(valueDisplayedOnScreen));
    }
    else {
      if(operator) {
        const calcResult = operate(operator, inputValue, screenValueOfCalculatorInFloat);
        setInputValue(calcResult);
        setValueDisplayedOnScreen(String(calcResult));
      }
    }
    setOperator(value);
    setExpectsInput(true);
  }

  const operate = (operator, inputValue, valueDisplayedOnScreen) => {
    switch (operator) {
      case "+": return inputValue + valueDisplayedOnScreen;
      case "-": return inputValue - valueDisplayedOnScreen;
      case "x": return inputValue * valueDisplayedOnScreen;
      case "/": return inputValue / valueDisplayedOnScreen;
      case "=": return valueDisplayedOnScreen;
      // no default
   }
  }

  return (
    <div className='calculator-view'>
      <div className='inner-calculator-view'>
        <Screen value={valueDisplayedOnScreen} />
        <Key buttonStyle="orangeButton" largeButtonStyle="largeButton" actionToExecute={handleActionToExecute} />
      </div>  
    </div>
  )
}

export default Calculator