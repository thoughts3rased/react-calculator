import React from 'react';
import icon from '../paper-icon.png';

export const CalcCopyButton = (props) => {
  return (
    <button className='opButton'
      onClick={navigator.clipboard.writeText(props.displayValue)}>
        <img className='copyIcon' src={icon}/>
    </button>
  )
}