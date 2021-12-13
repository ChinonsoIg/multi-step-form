import React from 'react';

const Input = ({ name, value, label, placeHolder, onChange, title, errors }) => {

  return (
    <div>
      <label>
        {label}:
        <input 
          type="text" 
          name={name} 
          placeholder={placeHolder} 
          value={value} 
          onChange={onChange} 
          title={title} 
        />
      </label>
      <p className='error'>{errors}</p>
    </div>
  );
}

export default Input;
