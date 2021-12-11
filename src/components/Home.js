import React, { useState } from 'react'
import Intro from './Intro'
import Input from "./Input";

const Home = () => {
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    stepOne: {
      name: 'fullName',
      label: 'Full name',
      value: '',
      type: 'input',
      label: 'Full name',
      required: true,
    },
    stepTwo: {
      name: 'email',
      value: '',
      type: 'input',
      label: 'Email',
    },
    stepThree: {
      name: 'hasSwedbankAccount',
      value: '',
      type: 'radio',
      label: 'Do you have an account with Swedbank',
      choices: [
        { value: 'no', label: 'No' },
        { value: 'yes', label: 'Yes' }
      ]
    },
    stepFourA: {
      name: 'swedBankPin',
      value: '',
      type: 'input',
      label: 'Swedbank PIN',
    },
    stepFourB: {
      name: 'otherBankPin',
      value: '',
      type: 'input',
      label: 'Swedbank PIN',
    },
    stepFive: {
      name: 'purposeOfLoan',
      value: '',
      type: 'input',
      label: 'Why should we give you loan?',
    }
  });

  const handleStep = (val, e) => {
    console.log(step)
    e.preventDefault();
    setStep(prev => prev + val);
    console.log(step)
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

    console.log(data)
  }

  // console.log(data['stepFive'])

  return (
    <div className='home-container'>
      {/* <Intro /> */}

      <div className='form-container'>
        <form>
          <div className='form-container'>
            {step === 1 && (
              <Input 
                title='stepOne'
                name='fullName'
                label={data.stepOne.label}
                placeHolder='Full name...'
                value={data.stepOne.value}
                onChange={(e) => handleChange(e)}
              />
            )}
            {step === 2 && (
              <Input 
                title='stepTwo'
                name='email'
                label={data.stepTwo.label}
                placeHolder='Email'
                value={data.stepTwo.value}
                onChange={(e) => handleChange(e)}
              />
            )}
            {step === 3 && (
              <Input 
                title='stepFive'
                name='purposeOfLoan'
                label='Purpose Of Loan'
                placeHolder='Purpose of loan'
                value={data.stepFive.value}
                onChange={(e) => handleChange(e)}
              />
            )}
          </div>
          <div>
            
          </div>
        </form>

        <div className='btn-container'>
          {step > 1 && (
            <button onClick={() => setStep(step - 1)}>
              Prev
            </button>
          )}
          
          {step < 4 ? (
            <button onClick={() => setStep(step + 1)}>
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

export default Home;
