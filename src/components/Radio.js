import React from 'react';

const Radio = ({ name, label, onChange, title, errors }) => {
  return (
    <div>
      <p>{label}</p>
      <div style={{display: 'flex', justifyContent: 'flex-start'}}>
        <label>
          <input
            type='radio'
            name={name}
            value='no'
            title={title}
            onChange={onChange}
          />
          No
        </label>

        <label>
          <input
            type='radio'
            name={name}
            value='yes'
            title={title}
            onChange={onChange}
          />
          Yes
        </label>
      </div>
      <p className='error'>{errors}</p>
    </div>
  )
}

export default Radio;
