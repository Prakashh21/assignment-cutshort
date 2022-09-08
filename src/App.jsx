import React, { useState } from 'react';

import Stepper from './components/Stepper';
import StepperControl from './components/StepperControl';
import Welcome from './components/steps/Welcome';
import Setup from './components/steps/Setup';
import Planning from './components/steps/Planning';
import Congratulations from './components/steps/Congratulations';
import Logo from './components/Logo';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ['Welcome', 'Setup', 'Planning', 'Congratulations'];
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Welcome />;
      case 2:
        return <Setup />;
      case 3:
        return <Planning />;
      case 4:
        return <Congratulations />;
      default:
        return '';
    }
  };
  const handleClick = () => {
    let newStep = currentStep;
    newStep += 1;

    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };
  return (
    <div className="App h-full font-Inter  flex justify-center items-center w-full min-h-screen">
      <div className="max-w-md  pt-10 mx-auto p-7 rounded-xl w-full">
        <div className="p-3 space-y-10">
          {/* Stepper */}
          <Logo />
          <div className="container horizontal mt-5">
            <Stepper steps={steps} currentStep={currentStep} />
          </div>
          {displayStep(currentStep)}
          {/* Navigation controls */}
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
