import React from 'react';

const Button = (props) => {
  // Define default styles
  const backgroundColor = props.backgroundColor || 'bg-coral-red';
  const textColor = props.textColor || 'text-white';
  const borderColor = props.borderColor || 'border-coral-red';
  const fullWidth = props.fullWidth;

  return (
    <button 
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${props.backgroundColor ? `${props.backgroundColor} ${props.textColor} ${borderColor}` : 'bg-coral-red text-white border-coral-red'} 
        rounded-full ${fullWidth && 'w-full'}`}
    >
      {props.label}
      {props.iconURL && (
        <img 
          src={props.iconURL} 
          alt="arrow right icon" 
          className='ml-2 rounded-full w-5 h-5' 
        />
      )}
    </button>
  );
};

export default Button;
