import React from 'react';

function StepperControl({ handleClick, currentStep, steps }) {
  return (
    <div className='container flex  justify-center mt-4 mb-8'>
      {/* Next Button */}
      <button
        onClick={() => handleClick()}
        className='w-full py-3 px-4 rounded-md bg-[#664de5] text-white text-sm font-medium cursor-pointer  hover:bg-[#7e65fb] hover:text-white transition duration-200'
      >
        {currentStep === steps.length ? 'Launch Eden' : 'Create Workspace'}
      </button>
    </div>
  );
}

export default StepperControl;
