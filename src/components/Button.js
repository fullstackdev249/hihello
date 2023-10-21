import React from 'react'

const Button = props => {
    const { value, buttonStyle, largeButtonStyle, onClick } = props;

    const buttonStyleClass = (value === "/" || value === "x" || value === "-" || value === "+" || value === "=") && buttonStyle;
    const largeButtonStyleClass = value === "0" && largeButtonStyle;
    
    const buttonClasses =  `${buttonStyleClass} ${largeButtonStyleClass}`;

    const handleButtonClick = () => {
        onClick(value);
    }

    return (
        <button name={value} className={buttonClasses} onClick={handleButtonClick}>
            {value}
        </button>
    )
}

export default Button