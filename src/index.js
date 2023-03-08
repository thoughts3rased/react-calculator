import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CalcButtons } from './components/CalcButtonFrame';
import { CalcDisplay } from './components/CalcDisplay';


const Calculator = (props) => {
  const [displayValue, setDisplayValue] = useState(0)
  const [previousValue, setPreviousValue] = useState(0)
  const [currentOperation, setCurrentOperation] = useState(null)
  const [lastOperator, setLastOperator] = useState(null)
  const [lastOperand, setLastOperand] = useState(null)

  const CalcFrame = ({value}) => {
      return (
        <>
          <div className='frame'>
            <h1 className='title'>Cesio ClassWoz™</h1>
            <CalcDisplay className='display' value={displayValue} />
            <CalcButtons displayValue = {displayValue} 
            previousValue = {previousValue} 
            currentOperation = {currentOperation}
            lastOperand = {lastOperand}
            lastOperator = {lastOperator}
            setDisplayValue = {setDisplayValue}
            setPreviousValue = {setPreviousValue}
            setCurrentOperation = {setCurrentOperation}
            setLastOperator = {setLastOperator}
            setLastOperand = {setLastOperand}/>
          </div>
        </>
      )
    }
  return (<CalcFrame className='frame' value={displayValue}/>)
}

ReactDOM.render(
  <Calculator className='frame'/>,
  document.getElementById('root')
)