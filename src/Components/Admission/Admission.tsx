import React from 'react'
import ReactDOM from 'react-dom'
import MultiStep from 'react-multistep'
import StepOne from './StepOne'
import StepTwo from './StepTwo'

const steps = [
  { title: 'BRN Info', component: <StepOne /> },
  { title: 'Basic Info', component: <StepTwo /> },
]

// custom styles
const Admission = () => {
    return (
        <div className='container'>
    <MultiStep activeStep={0} steps={steps} />
  </div>
    );
};

export default Admission;