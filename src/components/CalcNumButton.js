import React from "react";

export const CalcNumButton = (props) => {
    return (
      <button className='numButton' 
      onClick={() => {
        if (props.displayValue === "Infinity" || props.displayValue === "NaN" || props.displayValue.length > 18 )return;
        if (props.displayValue === "0") props.setDisplayValue(props.number);
        else if (props.displayValue === "-0") props.setDisplayValue("-"+props.number);
        else props.setDisplayValue(`${props.displayValue}${props.number}`);
      }}>
        {props.number}
      </button>
    )
}
