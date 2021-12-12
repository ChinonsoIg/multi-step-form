import React from 'react'

const Stepper = ({ step }) => {

  // const step = 4;
  return (
    <ul className='stepper'>
      <li>
        <span  
          className={step > 1 
          ? 'step-passed' : 'step-not-passed'} >
            1
        </span>
          <hr className={step > 1 ? 'hr-passed' : 'hr-not-passed'} />
      </li>
      <li>
        <span 
          className={step > 2 
          ? 'step-passed' : 'step-not-passed'}>
            2
        </span>
        <hr className={step > 2 ? 'hr-passed' : 'hr-not-passed'} />
      </li>
      <li>
        <span 
          className={step > 3 
          ? 'step-passed' : 'step-not-passed'}>
            3
        </span>
        <hr className={step > 3 ? 'hr-passed' : 'hr-not-passed'} />
      </li>
      <li>
        <span 
          className={step > 4 
          ? 'step-passed' : 'step-not-passed'}>
            {4}
        </span>
        <hr className={step > 4 ? 'hr-passed' : 'hr-not-passed'} />
      </li>
      <li>
        <span 
          className={step > 5 
          ? 'step-passed' : 'step-not-passed'}>
            {5}
        </span>
      </li>
    </ul>
  )
}

export default Stepper









// .container {
//   width:100%;
//   margin-top: 100px;
//   }
//   .progressbar {
//   counter-reset: step;
//   }
//   .progressbar li{
//   list-style-type: none;
//   float: left;
//   width: 33.33%;
//   position:relative;
//   text-align: center;
//   font-weight: 600;
//   }
