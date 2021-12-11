import React from 'react'

const Input = ({ name, value, label, placeHolder, onChange, title }) => {

  return (
    <div>
      <label>
        {label}:
        <input type="text" name={name} placeholder={placeHolder} value={value} onChange={onChange} title={title} />
      </label>
    </div>
  );
}

export default Input;
