<script setup lang="ts">
type Options = {
  name: string,
  value: string
}

const genders: Options[] = [
  { name: 'Male', value: 'Male' },
  { name: 'Female', value: 'Female' },
  { name: 'Others', value: 'Others' }
]
const relationships: Options[] = [
  { name: 'Parent', value: 'Parent' },
  { name: 'Spouse', value: 'Spouse' },
  { name: 'Sibling', value: 'Sibling' },
  { name: 'Common Law Partner', value: 'Common law partner' },
]
const { prevStep, nextStep } = useForm()
const { coBorrowerPersonalInfoForm } = useStepsForm()
const errors = ref<{ [key: string]: string[] }>({});
const loading = ref(false)
const title = useState<string>('page-title')
title.value = 'Co-Borrower - Personal Information'

function backToFamily() {
  navigateTo('/family')

  prevStep()
}

function validatePrimaryPersonalInfo() {
  const data = coBorrowerPersonalInfoForm.value

  if (!data.first_name?.trim()) errors.value.first_name = ["First name is required"]

  if (!data.last_name?.trim()) errors.value.last_name = ["Last name is required"]

  if (!data.birthday) errors.value.birthday = ["Birthday is required"]

  if (!data.gender) errors.value.gender = ["Gender is required"]

  if (!data.relationship_to_principal_borrower) errors.value.relationship_to_principal_borrower = ["Relationship to principal borrower is required"]
}

async function proceedToAddress() {
  loading.value = true

  errors.value = {}

  await new Promise(resolve => setTimeout(resolve, 1000))
    
  validatePrimaryPersonalInfo()

  loading.value = false

  if (Object.keys(errors.value).length) return

  navigateTo('/borrower-address')

  nextStep()
}

useHead({ title: 'Co-Borrower - Personal' })
</script>

<template>
  <div class="space-y-4 pb-6 border-b border-gray-200">
    <BaseInput 
      v-model="coBorrowerPersonalInfoForm.first_name"
      label="First Name"
      placeholder="Enter first name"
      required
      :error="getError(errors, 'first_name')"
    />

    <BaseInput 
      v-model="coBorrowerPersonalInfoForm.middle_name"
      label="Middle Name"
      placeholder="Enter middle name (optional)"
    />

    <BaseInput 
      v-model="coBorrowerPersonalInfoForm.last_name"
      label="Last Name"
      placeholder="Enter last name"
      required
      :error="getError(errors, 'last_name')"
    />

    <BaseDatePicker 
      v-model="coBorrowerPersonalInfoForm.birthday"
      label="Birthday"
      placeholder="Pick a date"
      required
      :error="getError(errors, 'birthday')"
    />

    <BaseSelect 
      v-model="coBorrowerPersonalInfoForm.gender"
      label="Gender"
      placeholder="Select Gender"
      :options="genders"
      required
      :error="getError(errors, 'gender')"
    />

    <BaseSelect 
      v-model="coBorrowerPersonalInfoForm.relationship_to_principal_borrower"
      label="Relationship to Principal Burrower"
      placeholder="Select Relationship"
      :options="relationships"
      required
      :error="getError(errors, 'relationship_to_principal_borrower')"
    />
  </div>

  <div class="flex items-center w-full justify-between">
    <BaseButton
      is-secondary
      @click="backToFamily"
    >Previous</BaseButton>

    <BaseButton
      :is-loading="loading"
      @click="proceedToAddress"
    >Next</BaseButton>
  </div>
</template>