import type { AddressInfo, Employee, Identification, Income, PersonalInfo } from "~/types/form"

const primaryPersonalInfoForm = ref<PersonalInfo>({
  first_name: '',
  middle_name: '',
  last_name: '',
  birthday: '',
  gender: ''
})
const primaryAddressForm = ref<AddressInfo>({
  home_address: '',
  length_of_stay: '',
  ownership: '',
  contact_number: ''
})
const primaryIdentificationForm = ref<Identification>({
  marital_status: '',
  nationality: '',
  valid_id_number: ''
})
const primaryEmployeeForm = ref<Employee>({
  company_name: '',
  position: '',
  company_address: '',
  company_contact_number: '',
  years_of_service: ''
})
const primaryIncomeForm = ref<Income>({
  monthly_income: '',
  other_icome: '',
})

export const useStepsForm = () => {   
  const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbw65zFEZTYbwyWfvViRHboquouvjNi8oJjWXb9Vp7wH_Gg25aUFM54ldJpA6dWpvL9-/exec'

  async function submit() {
    try {
      await useFetch(googleScriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: primaryPersonalInfoForm.value,
      })
    } catch (error) {
      console.error('Error sending data to Google Sheet:', error);
    }
  }

  return {
    primaryPersonalInfoForm,
    primaryAddressForm,
    primaryIdentificationForm,
    primaryEmployeeForm,
    primaryIncomeForm,
    submit
  }
}