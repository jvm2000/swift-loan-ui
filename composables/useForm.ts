const stepMap: Record<any, number> = {
  personal: 1,
  employment: 2,
  income: 3,
  loan: 4,
  contact: 5,
  address: 6,
  reference: 7,
  assets: 8,
  liabilities: 9,
  coMaker: 10,
  summary: 11,
  confirmation: 12,
}
const currentStep = ref<number>(1)
const totalSteps = 12

export const useForm = () => {
  function setStep(step: number) {
    if (typeof step === 'string') currentStep.value = stepMap[step]
    
    if (step >= 1 && step <= totalSteps) currentStep.value = step
  }

  function nextStep() {
    if (currentStep.value < totalSteps) currentStep.value++
  }

  function prevStep() {
    if (currentStep.value === 1) return

    if (currentStep.value > 1) currentStep.value--
  }

  const progress = computed(() => Math.round((currentStep.value / totalSteps) * 100))

  return {
    currentStep,
    totalSteps,
    setStep,
    nextStep,
    prevStep,
    progress,
  }
}
