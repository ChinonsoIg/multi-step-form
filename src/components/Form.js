import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Input from './Input';
import Radio from './Radio';
import Preview from './Preview';
import Stepper from './Stepper';
import { validateEmail } from '../utils/functions';

const Form = ({ width }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState('');

  const [data, setData] = useState({
    stepOne: {
      // name: 'fullName',
      value: '',
      // type: 'input',
      label: 'Full name',
    },
    stepTwo: {
      // name: 'email',
      value: '',
      // type: 'input',
      label: 'Email',
    },
    stepThree: {
      // name: 'hasSwedbankAccount',
      value: '',
      // type: 'radio',
      label: 'Do you have an account with Swedbank?',
    },
    stepFourA: {
      // name: 'swedBankPin',
      value: '',
      // type: 'input',
      label: 'Swedbank PIN',
    },
    stepFourB: {
      // name: 'otherBankPin',
      value: '',
      // type: 'input',
      label: 'Other bank PIN',
    },
    stepFive: {
      name: 'purposeOfLoan',
      value: '',
      type: 'input',
      label: 'Why should we give you loan?',
    }
  });
  

  const handleStep = (value) => {

    if (value === 1) {    
      if (step === 1) {
        if (data.stepOne.value === '') {
          const err = 'Field is required!';
          return setErrors(err);
        } else {       
          setStep(step + value);
          setErrors('')
          return;
        }
      } else if (step === 2) {
        if (data.stepTwo.value === '') {
          const err = 'Email is required!';
          return setErrors(err);
        } else if (!validateEmail(data.stepTwo.value)) {
          const err = 'Email must be valid!';
          return setErrors(err);
        } else {
          setStep(step + value);
          setErrors('')
          return;
        }
      } else if (step === 3) {
        if (data.stepThree.value === '') {
          const err = 'Please select an option!';
          return setErrors(err);
        } else {
          setStep(step + value);
          setErrors('')
          return;
        }
      } else if (step === 4) {
        if ((data.stepFourA.value === '') && (data.stepFourB.value === '')) {
          const err = 'Field is required!';
          return setErrors(err);
        } else {
          setStep(step + value);
          setErrors('');
          return;
        }
      } else if (step === 5) {
        if (data.stepFive.value === '') {
          const err = 'Field is required!';
          return setErrors(err);
        } else {
          setStep(step + value);
          setErrors('')
          return;
        }
      } 

  } else {
    setStep(step + value);
    setErrors('')
  }
    
    
  }

  const handleChange = (e) => {
    
    setData(prev => ({ 
      ...prev, 
      [e.target.title]: {
        ...prev[e.target.title],
        value: e.target.value
      } 
    }))

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTimeout(() => { 
      navigate('/');
    }, 3000);

  }

  return (
    <div className='home-container'>
      <Stepper
        step={step}
        width={width}
      />

      <div className='form-container'>
        <form>
          <div>
            {step === 1 && (
              <Input 
                title='stepOne'
                name='fullName'
                label={data.stepOne.label}
                placeHolder='Full name...'
                value={data.stepOne.value}
                errors={errors}
                onChange={(e) => handleChange(e)}
              />
            )}
            {step === 2 && (
              <Input 
                title='stepTwo'
                name='email'
                label={data.stepTwo.label}
                placeHolder='Email...'
                value={data.stepTwo.value}
                errors={errors}
                onChange={(e) => handleChange(e)}
              />
            )}
            {step === 3 && (
              <Radio
                title='stepThree'
                name='hasSwedbankAccount'
                label={data.stepThree.label}
                value={data.stepThree.value}
                errors={errors}
                onChange={(e) => handleChange(e)}
              />
            )}
              
            {step === 4 && (
              data.stepThree.value === 'yes' ? (
                <Input 
                  title='stepFourA'
                  name='swedBankPin'
                  label={data.stepFourA.label}
                  placeHolder='Swedbank PIN...'
                  value={data.stepFourA.value}
                  errors={errors}
                  onChange={(e) => handleChange(e)}
                />
              ) : (
                <Input 
                  title='stepFourB'
                  name='otherBankPin'
                  label={data.stepFourB.label}
                  placeHolder='Other bank PIN...'
                  value={data.stepFourB.value}
                  errors={errors}
                  onChange={(e) => handleChange(e)}
                />
              )
            )}
            {step === 5 && (
              <Input 
                title='stepFive'
                name='purposeOfLoan'
                label={data.stepFive.label}
                placeHolder='Purpose of loan...'
                value={data.stepFive.value}
                errors={errors}
                onChange={(e) => handleChange(e)}
              />
            )}
            {step === 6 && (
              <Preview 
                data={[
                  {
                    label: data.stepOne.label, 
                    value: data.stepOne.value
                  },
                  {
                    label: data.stepTwo.label, 
                    value: data.stepTwo.value
                  },
                  {
                    label: data.stepThree.label, 
                    value: data.stepThree.value
                  },
                  {
                    label: data.stepFourA.label, 
                    value: data.stepFourA.value
                  },
                  {
                    label: data.stepFourB.label, 
                    value: data.stepFourB.value
                  },
                  {
                    label: data.stepFive.label, 
                    value: data.stepFive.value
                  }
                ]}
              />
            )}
          </div>
          <div>
            
          </div>
        </form>

        <div className='btn-container'>
          {step > 1 && (
            <button onClick={() => handleStep(-1)}>
              Prev
            </button>
          )}
          
          {step < 6 ? (
            <button onClick={() => handleStep(1)}>
              Next
            </button>
          ) : (
            <button onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          )}
        </div>
      </div>

    </div>
  );
}

export default Form;
