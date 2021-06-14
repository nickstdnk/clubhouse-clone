import { useState, createContext } from 'react'
import { WelcomeStep } from "../components/steps/WelcomeStep"

const stepsComponents = {
  0: WelcomeStep
}

type MainContextProps = {
  onNextStep: () => void;
  step: number;
};

export const MainContext = createContext<MainContextProps>({} as MainContextProps);

export default function Home() {
  const [step, setStep] = useState<number>(0);
  const Step = stepsComponents[step];

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <MainContext.Provider value={{ step, onNextStep }}>
      <Step />
    </MainContext.Provider>
  );
}
