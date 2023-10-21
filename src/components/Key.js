import React from 'react'
import Button from './Button';

const keys = ["AC", "+/-", "%", "/",  "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];

const Key = props => {
  const {buttonStyle, largeButtonStyle, actionToExecute} = props;

  const handleButtonClick = value => {
    actionToExecute(value);
  }

  return (
    <div className='key-buttons'>
        {keys.map(key => 
          <Button value={key} buttonStyle={buttonStyle} largeButtonStyle={largeButtonStyle} onClick={handleButtonClick} />
        )}
    </div>
  )
}

export default Key