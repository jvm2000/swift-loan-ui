<script setup lang="ts">
import { useGoogleSheet } from '~/composables/useGoogleSheet'

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
const { submitForm, loading, error, success } = useGoogleSheet()
const title = useState<string>('page-title')
title.value = 'Primary Applicant - Personal Information'

async function proceedToAddress() {
  navigateTo('/address')

  nextStep()

  handleSubmit()
}

function handleSubmit() {
  submitForm(primaryPersonalInfoForm.value)
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
    />

    <BaseDatePicker 
      v-model="primaryPersonalInfoForm.birthday"
      label="Birthday"
      placeholder="Pick a date"
      required
    />

    <BaseSelect 
      v-model="primaryPersonalInfoForm.gender"
      label="Gender"
      placeholder="Select Gender"
      :options="genders"
      required
    />
  </div>

  <div class="flex items-center w-full justify-between">
    <button class="px-4 py-2 bg-gray-50 border border-gray-50 rounded-lg text-center" disabled>
      <span class="text-gray-400 text-sm">Previous</span>
    </button>

    <button class="px-4 py-2 bg-blue-500 rounded-lg text-center" @click="proceedToAddress">
      <span class="text-white text-sm">Next</span>
    </button>
  </div>
</template>