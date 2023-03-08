
export function clearExpression (props){
    props.setDisplayValue("0")
    props.setPreviousValue("0")
    props.setCurrentOperation(null)
    props.setLastOperand(null)
    props.setLastOperator(null)
}