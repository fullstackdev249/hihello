import React from 'react'

const Screen = props => {
  return (
    <div className='input-output-screen'>
        <input type='text' value={props.value}  tabIndex="-1" maxlength="9" />
    </div>
  )
}

export default Screen