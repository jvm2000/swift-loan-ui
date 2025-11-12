<script setup lang="ts">
type Options = {
  name: string,
  value: string
}

const genders: Options[] = [
  { name: 'Male', value: 'male' },
  { name: 'Female', value: 'female' },
  { name: 'Others', value: 'others' }
]
const relationships: Options[] = [
  { name: 'Parent', value: 'parent' },
  { name: 'Spouse', value: 'spouse' },
  { name: 'Sibling', value: 'sibling' },
  { name: 'Common Law Partner', value: 'common law partner' },
]
const { prevStep, nextStep } = useForm()
const title = useState<string>('page-title')
title.value = 'Co-Borrower - Personal Information'

function backToFamily() {
  navigateTo('/family')

  prevStep()
}

function proceedToAddress() {
  navigateTo('/borrower-address')

  nextStep()
}

useHead({ title: 'Co-Borrower - Personal' })
</script>

<template>
  <div class="space-y-4 pb-6 border-b border-gray-200">
    <BaseInput 
      label="First Name"
      placeholder="Enter first name"
      required
    />

    <BaseInput 
      label="Middle Name"
      placeholder="Enter middle name (optional)"
    />

    <BaseInput 
      label="Last Name"
      placeholder="Enter last name"
      required
    />

    <BaseDatePicker 
      label="Birthday"
      placeholder="Pick a date"
      required
    />

    <BaseSelect 
      label="Gender"
      placeholder="Select Gender"
      :options="genders"
      required
    />

    <BaseSelect 
      label="Relationship to Principal Burrower"
      placeholder="Select Relationship"
      :options="relationships"
      required
    />
  </div>

  <div class="flex items-center w-full justify-between">
    <button 
      class="px-4 py-2 bg-gray-50 border border-gray-50 rounded-lg text-center"
      @click="backToFamily"
    >
      <span class="text-gray-400 text-sm">Previous</span>
    </button>

    <button class="px-4 py-2 bg-blue-500 rounded-lg text-center" @click="proceedToAddress">
      <span class="text-white text-sm">Next</span>
    </button>
  </div>
</template>