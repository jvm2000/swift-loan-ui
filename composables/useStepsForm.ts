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
  contact_number: '',
  landline_number: ''
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

const generalForm = computed(() => ({
  ...primaryPersonalInfoForm.value,
  ...primaryAddressForm.value,
  ...primaryIdentificationForm.value,
  ...primaryEmployeeForm.value,
  ...primaryIncomeForm.value,
  ...primaryFamilyForm.value,
  ...coBorrowerPersonalInfoForm.value,
  ...coBorrowerAddressForm.value,
  ...coBorrowerIdentificationForm.value,
  ...coBorrowerEmployeeForm.value,
  ...coBorrowerIncomeForm.value,
  ...coBorrowerFamilyForm.value
}))

export const useStepsForm = () => {   
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
    generalForm
  }
}