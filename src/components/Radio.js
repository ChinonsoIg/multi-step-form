import React from 'react';

const Radio = ({ name, value, label, onChange, title }) => {
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

    </div>
  )
}

export default Radio;




// switch (step) {
//   case 1:
//     setFullName(e.target.value)
//     break;
//   case 2:
//     setEmail(e.target.value)
//     break;
//   case 3:
//     setSwedbankId(e.target.value)
//     break;
//   default:
//     break;
// }