import React from 'react'

const Stepper = ({ step,title }) => {
  return (
    <div>
      <p>step number : {step}</p>
      <p>step title: {title}</p>
    </div>
  )
}

export default Stepper




// const [data, setData] = useState({
//   stepOne: {
//     name: 'fullName',
//     label: 'Full name',
//     value: '',
//     type: 'input',
//     placeHolder: 'Full name',
//     required: true,
//   },
//   stepTwo: {
//     name: 'email',
//     label: 'Label',
//     value: '',
//     type: 'input',
//     placeHolder: 'Email',
//     required: true,
//   },
//   stepThree: {
//     name: 'hasSwedbankAccount',
//     value: '',
//     type: 'radio',
//     required: true,
//     choices: [
//       { value: 'female', label: 'Female' },
//       { value: 'male', label: 'Male' }
//     ]
//   },
//   stepFourA: {
//     name: 'swedBankPin',
//     value: '',
//     type: 'input',
//     placeHolder: 'Swedbank PIN',
//     required: true,
//   },
//   stepFourB: {
//     name: 'otherBankPin',
//     value: '',
//     type: 'input',
//     placeHolder: 'Swedbank PIN',
//     required: true,
//   },
//   stepFive: {
//     name: 'purposeOfLoan',
//     value: '',
//     type: 'input',
//     placeHolder: 'Why should we give you loan?',
//     required: true,
//   }
// });