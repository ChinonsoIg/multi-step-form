import React from 'react'

const Stepper = ({ step, width }) => {

  if (width <= 646) {
    return (
      <div>
        <ul className='stepper'>
          <li className='stepper-list'>
            <span className='step-not-passed'>
              {step}
            </span>
            <b className='step-number-mobile'>Step {step}</b>
          </li>
        </ul>
      </div>
    )
  }

  
  return (
    <ul className='stepper'>
      <li className='stepper-list'>
        <span  
          className={step > 1 
          ? 'step-passed' : 'step-not-passed'} >
            {1}
        </span>
        <hr className={step > 1 ? 'hr-passed' : 'hr-not-passed'} />
      </li>
      <li className='stepper-list'>
        <span 
          className={step > 2 
          ? 'step-passed' : 'step-not-passed'}>
            {2}
        </span>
        <hr className={step > 2 ? 'hr-passed' : 'hr-not-passed'} />
      </li>
      <li className='stepper-list'>
        <span 
          className={step > 3 
          ? 'step-passed' : 'step-not-passed'}>
            {3}
        </span>
        <hr className={step > 3 ? 'hr-passed' : 'hr-not-passed'} />
      </li>
      <li className='stepper-list'>
        <span 
          className={step > 4 
          ? 'step-passed' : 'step-not-passed'}>
            {4}
        </span>
        <hr className={step > 4 ? 'hr-passed' : 'hr-not-passed'} />
      </li>
      <li className='stepper-list'>
        <span 
          className={step > 5 
          ? 'step-passed' : 'step-not-passed'}>
            {5}
        </span>
        <hr className={step > 4 ? 'hr-passed' : 'hr-not-passed'} />
      </li>
      <li className='stepper-list'>
        <span 
          className={step > 6 
          ? 'step-passed' : 'step-not-passed'}>
            {6}
        </span>
      </li>
    </ul>
  )
}

export default Stepper;