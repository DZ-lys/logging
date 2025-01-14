"use client";

import { Finished } from "@/components/Finished";
import { First } from "@/components/FirstStep";
import { Second } from "@/components/SecondStep";
import { Third } from "@/components/ThirdStep";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const FormSteps = [First, Second, Third, Finished][currentStep];

  return (
    <div className="flex h-[100vh] justify-center items-center ">
      <FormSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
}
