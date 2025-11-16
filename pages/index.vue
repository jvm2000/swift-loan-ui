<script setup lang="ts">
type Gender = {
  name: string,
  value: string
}

const genders: Gender[] = [
  { name: 'Male', value: 'male' },
  { name: 'Female', value: 'female' },
  { name: 'Others', value: 'others' }
]
const { nextStep } = useForm()
const { primaryPersonalInfoForm } = useStepsForm()
const errors = ref<{ [key: string]: string[] }>({});
const loading = ref(false)
const title = useState<string>('page-title')
title.value = 'Primary Applicant - Personal Information'

function validatePrimaryPersonalInfo() {
  const data = primaryPersonalInfoForm.value

  if (!data.first_name?.trim()) errors.value.first_name = ["First name is required"]

  if (!data.last_name?.trim()) errors.value.last_name = ["Last name is required"]

  if (!data.birthday) errors.value.birthday = ["Birthday is required"]

  if (!data.gender) errors.value.gender = ["Gender is required"]
}

async function proceedToAddress() {
  loading.value = true

  errors.value = {}

  await new Promise(resolve => setTimeout(resolve, 1000))
    
  validatePrimaryPersonalInfo()

  loading.value = false

  if (Object.keys(errors.value).length) return

  navigateTo('/address')

  nextStep()
}

useHead({ title: 'Primary Applicant - Personal' })
</script>

<template>
  <div class="space-y-4 pb-6 border-b border-gray-200">
    <BaseInput 
      v-model="primaryPersonalInfoForm.first_name"
      label="First Name"
      placeholder="Enter first name"
      required
      :error="getError(errors, 'first_name')"
    />

    <BaseInput 
      v-model="primaryPersonalInfoForm.middle_name"
      label="Middle Name"
      placeholder="Enter middle name (optional)"
    />

    <BaseInput 
      v-model="primaryPersonalInfoForm.last_name"
      label="Last Name"
      placeholder="Enter last name"
      required
      :error="getError(errors, 'last_name')"
    />

    <BaseDatePicker 
      v-model="primaryPersonalInfoForm.birthday"
      label="Birthday"
      placeholder="Pick a date"
      required
      :error="getError(errors, 'birthday')"
    />

    <BaseSelect 
      v-model="primaryPersonalInfoForm.gender"
      label="Gender"
      placeholder="Select Gender"
      :options="genders"
      required
      :error="getError(errors, 'gender')"
    />
  </div>

  <div class="flex items-center w-full justify-between">
    <BaseButton
      is-secondary
    >Previous</BaseButton>

    <BaseButton
      :is-loading="loading"
      @click="proceedToAddress"
    >Next</BaseButton>
  </div>
</template>