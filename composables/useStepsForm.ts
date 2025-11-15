import type { PrimaryAppPersonalInfo } from "~/types/form"

const primaryPersonalInfoForm = ref<PrimaryAppPersonalInfo>({
  first_name: '',
  middle_name: '',
  last_name: '',
  birthday: '',
  gender: ''
})

export const useStepsForm = () => {   
  return {
    primaryPersonalInfoForm,
  }
}