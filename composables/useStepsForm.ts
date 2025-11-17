import type { AddressInfo, Employee, Family, Identification, Income, PersonalInfo } from "~/types/form"

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
const primaryFamilyForm = ref<Family>({
  mothers_maiden_name: '',
})
const coBorrowerPersonalInfoForm = ref<PersonalInfo>({
  first_name: '',
  middle_name: '',
  last_name: '',
  birthday: '',
  gender: ''
})
const coBorrowerAddressForm = ref<AddressInfo>({
  home_address: '',
  length_of_stay: '',
  ownership: '',
  contact_number: ''
})
const coBorrowerIdentificationForm = ref<Identification>({
  marital_status: '',
  nationality: '',
  valid_id_number: ''
})
const coBorrowerEmployeeForm = ref<Employee>({
  company_name: '',
  position: '',
  company_address: '',
  company_contact_number: '',
  years_of_service: ''
})
const coBorrowerIncomeForm = ref<Income>({
  monthly_income: '',
  other_icome: '',
})
const coBorrowerFamilyForm = ref<Family>({
  mothers_maiden_name: '',
})

const primaryForm = computed(() => ({
  ...primaryPersonalInfoForm.value,
  ...primaryAddressForm.value,
  ...primaryIdentificationForm.value,
  ...primaryEmployeeForm.value,
  ...primaryIncomeForm.value,
  ...primaryFamilyForm.value,
}))

export const useStepsForm = () => {   
  const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbwAFYY6o2i-G1HqaUqhzzCp30z9zVsH4x7kBAkjfc3Qfj0vFrRZuW4-IWIZcSchpqH3/exec'

  async function submit() {
    try {
      await useFetch(googleScriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: primaryForm.value,
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
    primaryFamilyForm,
    coBorrowerPersonalInfoForm,
    coBorrowerAddressForm,
    coBorrowerIdentificationForm,
    coBorrowerEmployeeForm,
    coBorrowerIncomeForm,
    coBorrowerFamilyForm,
    submit
  }
}