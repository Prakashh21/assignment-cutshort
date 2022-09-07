import React, { useEffect, useRef, useState } from 'react';

function Stepper({ steps, currentStep }) {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();
  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          selected: true,
          completed: true,
        };
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],

          selected: false,
          completed: true,
        };
      } else {
        newSteps[count] = {
          ...newSteps[count],
          selected: false,
          completed: false,
        };
      }
      count++;
    }
    return newSteps;
  };
  useEffect(() => {
    const stepsState = steps.map((_, index) => {
      let obj = { completed: false, selected: index === 0 ? true : false };
      return obj;
    });
   
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);

    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <>
        <div
          key={index}
          className={
            index !== newStep.length - 1
              ? 'w-full flex items-center '
              : 'flex items-center'
          }
        >
          <div className='relative flex flex-col items-center text-teal-600'>
            <div
              className={`rounded-full transition duration-400 ease-in-out border-2 border-gray-300 h-9 w-9 flex items-center justify-center py-3 ${
                step.completed ? 'bg-[#664de5] text-white border-[#664de5]' : ''
              }`}
            >
              {index + 1}
              {/* Display Number */}
            </div>
          </div>
          <div
            className={`flex-auto w-full  transition duration-400 ease-in-out bg-gray-400 h-[1.6px] `}
          >
            {console.log(step)}
            <div
              className={`h-full  bg-[#664de5] ${
                step.selected ? `w-2/4` : step.completed ? 'w-full' : 'w-0'
              }`}
            ></div>
            {/* Display Line */}
          </div>
        </div>
      </>
    );
  });

  return (
    <div className='mx-4 py-4 flex justify-between items-center'>
      {displaySteps}
    </div>
  );
}

export default Stepper;
