export function backspace(props){
    if (String(props.displayValue).length === 1 && !props.currentlyDecimal){
        if (props.displayValue !== "0"){
          props.setDisplayValue("0")
        }
      } else {
          props.setDisplayValue(String(props.displayValue).substring(0, String(props.displayValue).length - 1))
      }
}