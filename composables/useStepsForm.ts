import type { AddressInfo, CoBorrowerAddressInfo, CoBorrowerEmployee, CoBorrowerFamily, CoBorrowerIdentification, CoBorrowerIncome, CoBorrowerPersonalInfo, Employee, Family, Identification, Income, PersonalInfo } from "~/types/form"

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
  years_of_service: '',
  company_hr_email: ''
})
const primaryIncomeForm = ref<Income>({
  monthly_income: '',
  other_icome: '',
})
const primaryFamilyForm = ref<Family>({
  mothers_maiden_name: '',
})
const coBorrowerPersonalInfoForm = ref<CoBorrowerPersonalInfo>({
  co_first_name: '',
  co_middle_name: '',
  co_last_name: '',
  co_birthday: '',
  co_gender: '',
  co_relationship_to_principal_borrower: ''
})
const coBorrowerAddressForm = ref<CoBorrowerAddressInfo>({
  co_home_address: '',
  co_length_of_stay: '',
  co_ownership: '',
  co_contact_number: '',
  co_landline_number: ''
})
const coBorrowerIdentificationForm = ref<CoBorrowerIdentification>({
  co_marital_status: '',
  co_nationality: '',
  co_valid_id_number: ''
})
const coBorrowerEmployeeForm = ref<CoBorrowerEmployee>({
  co_company_name: '',
  co_position: '',
  co_company_address: '',
  co_company_contact_number: '',
  co_years_of_service: '',
  co_company_hr_email: ''
})
const coBorrowerIncomeForm = ref<CoBorrowerIncome>({
  co_monthly_income: '',
  co_other_icome: '',
})
const coBorrowerFamilyForm = ref<CoBorrowerFamily>({
  co_mothers_maiden_name: '',
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