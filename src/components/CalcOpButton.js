import React from "react";
import { backspace } from "../functions/Backspace";
import { clearExpression } from "../functions/ClearExpression";
import { equationButton } from "../functions/EquationButtonRoutine";

export const CalcOpButton = (props) => {
    var group = "opButton"
    if (props.op == "clearScreen" || props.op == "clear") group = "commandButton";
  
    return (
      <button className={group}
      onClick={() =>{
        if ((props.displayValue == "NaN" || props.displayValue == "Infinity") && (props.op != "clear" && props.op != "clearScreen")){
          return
        }
        switch(props.op){
          case "clear":
            clearExpression(props)
            break;
          case "clearScreen":
            props.setDisplayValue("0")
            break;
          case "backspace":
            backspace(props)
            break;
          case "decimal":
            if (!props.displayValue.includes(".")){
              props.setDisplayValue(props.displayValue + ".")
            }
            break;
          case "equate":
            equationButton(props)
            break;
          default:
            if(props.op == "subtract" && props.displayValue == "0") return props.setDisplayValue("-0");
            props.setPreviousValue(props.displayValue)
            props.setCurrentOperation(props.op)
            props.setDisplayValue("0")
            break;
          }
        }
      }>
        {props.buttonText}
      </button>
    )
  }