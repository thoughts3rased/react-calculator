import React from 'react';
import { CalcNumButton } from './CalcNumButton';
import { CalcOpButton } from './CalcOpButton';
import { CalcCopyButton } from './CalcCopyButton';

export const CalcButtons = (props) => {
    //Rows of buttons are defined using line breaks, might be a better way to do this
    return(
      <>
      <div className='buttonFrame'>
          <CalcNumButton     displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} number = "1"/>
          <CalcNumButton     displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} number = "2"/>
          <CalcNumButton     displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} number = "3"/>
          <CalcOpButton  currentOperation = {props.currentOperation} setCurrentOperation = {props.setCurrentOperation} displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} previousValue = {props.previousValue} setPreviousValue = {props.setPreviousValue}  lastOperand = {props.lastOperand} setLastOperand = {props.setLastOperand} lastOperator = {props.lastOperator} setLastOperator = {props.setLastOperator} className='operator' op = "multiplication" buttonText="x"/>
          <CalcOpButton  currentOperation = {props.currentOperation} setCurrentOperation = {props.setCurrentOperation} displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} previousValue = {props.previousValue} setPreviousValue = {props.setPreviousValue}  lastOperand = {props.lastOperand} setLastOperand = {props.setLastOperand} lastOperator = {props.lastOperator} setLastOperator = {props.setLastOperator} className='operator' op="backspace" buttonText= "DEL"/>
          <br />
          <CalcNumButton     displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} number = "4"/>
          <CalcNumButton     displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} number = "5"/>
          <CalcNumButton     displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} number = "6"/>
          <CalcOpButton  currentOperation = {props.currentOperation} setCurrentOperation = {props.setCurrentOperation} displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} previousValue = {props.previousValue} setPreviousValue = {props.setPreviousValue}  lastOperand = {props.lastOperand} setLastOperand = {props.setLastOperand} lastOperator = {props.lastOperator} setLastOperator = {props.setLastOperator} className='operator' op = "division" buttonText="÷"/>
          <CalcCopyButton displayValue = {props.displayValue} className='operator'/>
          <br />
          <CalcNumButton     displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} number = "7"/>
          <CalcNumButton     displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} number = "8"/>
          <CalcNumButton     displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} number = "9"/>
          <CalcOpButton  currentOperation = {props.currentOperation} setCurrentOperation = {props.setCurrentOperation} displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} previousValue = {props.previousValue} setPreviousValue = {props.setPreviousValue}  lastOperand = {props.lastOperand} setLastOperand = {props.setLastOperand} lastOperator = {props.lastOperator} setLastOperator = {props.setLastOperator} className='operator' op = "subtraction" buttonText="-"/>
          <CalcOpButton  currentOperation = {props.currentOperation} setCurrentOperation = {props.setCurrentOperation} displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} previousValue = {props.previousValue} setPreviousValue = {props.setPreviousValue}  lastOperand = {props.lastOperand} setLastOperand = {props.setLastOperand} lastOperator = {props.lastOperator} setLastOperator = {props.setLastOperator} className='commandButton' op = "clearScreen" buttonText="C"/>
          <br />
          <CalcNumButton     displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} number = "0"/>
          <CalcOpButton  currentOperation = {props.currentOperation} setCurrentOperation = {props.setCurrentOperation} displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} previousValue = {props.previousValue} setPreviousValue = {props.setPreviousValue}  lastOperand = {props.lastOperand} setLastOperand = {props.setLastOperand} lastOperator = {props.lastOperator} setLastOperator = {props.setLastOperator} className='operator' op = "decimal" buttonText="."/>
          <CalcOpButton  currentOperation = {props.currentOperation} setCurrentOperation = {props.setCurrentOperation} displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} previousValue = {props.previousValue} setPreviousValue = {props.setPreviousValue}  lastOperand = {props.lastOperand} setLastOperand = {props.setLastOperand} lastOperator = {props.lastOperator} setLastOperator = {props.setLastOperator} className='operator' op = "equate" buttonText="="/>
          <CalcOpButton  currentOperation = {props.currentOperation} setCurrentOperation = {props.setCurrentOperation} displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} previousValue = {props.previousValue} setPreviousValue = {props.setPreviousValue}  lastOperand = {props.lastOperand} setLastOperand = {props.setLastOperand} lastOperator = {props.lastOperator} setLastOperator = {props.setLastOperator} className='operator' op = "addition" buttonText="+"/>
          <CalcOpButton  currentOperation = {props.currentOperation} setCurrentOperation = {props.setCurrentOperation} displayValue = {props.displayValue} setDisplayValue = {props.setDisplayValue} previousValue = {props.previousValue} setPreviousValue = {props.setPreviousValue}  lastOperand = {props.lastOperand} setLastOperand = {props.setLastOperand} lastOperator = {props.lastOperator} setLastOperator = {props.setLastOperator} className='commandButton' op = "clear" buttonText = "CE"/>
      </div>
    </>
    )
  }