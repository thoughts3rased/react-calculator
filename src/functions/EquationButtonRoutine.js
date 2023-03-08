import { evaluateEquation } from "./EvaluateExpression";

export function equationButton(props){
    switch (props.currentOperation){
        case null:
            if (props.lastOperand !== null) props.setDisplayValue(evaluateEquation(Number(props.displayValue), Number(props.lastOperand), props.lastOperator));
            break;
        default:
          var result = evaluateEquation(Number(props.previousValue), Number(props.displayValue), props.currentOperation)
          props.setDisplayValue(String(result))
          props.setLastOperand(String(props.displayValue))
          props.setLastOperator(props.currentOperation)
      }
      props.setCurrentOperation(null)
}