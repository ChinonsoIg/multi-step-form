import React, { useState } from 'react'
import Intro from './Intro'
import Input from "./Input";
import Radio from './Radio';
import Preview from "./Preview";
import Stepper from './Stepper';

const Home = () => {
  const [step, setStep] = useState(1);

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

  const handleStep = (val, e) => {
    console.log(step)
    e.preventDefault();
    setStep(prev => prev + val);
    console.log(step)
  }

  const handleChange = (e) => {

    // console.log(e.target.type)
    
    if (e.target.type === 'text') {
      setData(prev => ({ 
        ...prev, 
        [e.target.title]: {
          ...prev[e.target.title],
          value: e.target.value
        } 
      }))
    } else if (e.target.type === 'radio') {
      console.log(e.target.title, e.target.type, e.target.value)
      setData(prev => ({ 
        ...prev, 
        [e.target.title]: {
          ...prev[e.target.title],
          value: e.target.value
        } 
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(prev => ({
      step: prev + 1
    }))

  }

  return (
    <div className='home-container'>
      <Stepper
        step={step}
      />

      <div className='form-container'>
        <form>
          <div /*className='form-container'*/>
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
                placeHolder='Email...'
                value={data.stepTwo.value}
                onChange={(e) => handleChange(e)}
              />
            )}
            {step === 3 && (
              <Radio
                title='stepThree'
                name='hasSwedbankAccount'
                label={data.stepThree.label}
                value={data.stepThree.value}
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
                  onChange={(e) => handleChange(e)}
                />
              ) : (
                <Input 
                  title='stepFourB'
                  name='otherBankPin'
                  label={data.stepFourB.label}
                  placeHolder='Other bank PIN...'
                  value={data.stepFourB.value}
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
            <button onClick={() => setStep(step - 1)}>
              Prev
            </button>
          )}
          
          {step < 6 ? (
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
