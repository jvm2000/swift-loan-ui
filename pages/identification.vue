<script setup lang="ts">
type MaritalStatus = {
  name: string,
  value: string
}

const maritalStatuses: MaritalStatus[] = [
  { name: 'Single', value: 'single' },
  { name: 'Married', value: 'married' },
  { name: 'Divorced', value: 'divorced' },
  { name: 'Widowed', value: 'widowed' },
]
const { prevStep, nextStep } = useForm()

function backToAddress() {
  navigateTo('/address')

  prevStep()
}

function proceedToEmployment() {
  navigateTo('/employment')

  nextStep()
}

useHead({ title: 'Identification' })
</script>

<template>
  <div class="space-y-4 pb-6 border-b border-gray-200">
    <BaseSelect 
      label="Marital Status"
      placeholder="Select marital status"
      :options="maritalStatuses"
      required
    />

    <BaseInput 
      label="Nationality"
      placeholder="e.g. Filipino"
      required
    />

    <BaseInput 
      label="TIN / SSS / GSIS Number"
      placeholder="Enter TIN, SSS, or GSIS number"
      required
    />
  </div>

  <div class="flex items-center w-full justify-between">
    <button 
      class="px-4 py-2 bg-gray-50 border border-gray-50 rounded-lg text-center"
      @click="backToAddress"
    >
      <span class="text-gray-400 text-sm">Previous</span>
    </button>

    <button 
      class="px-4 py-2 bg-blue-500 rounded-lg text-center"
      @click="proceedToEmployment"
    >
      <span class="text-white text-sm">Next</span>
    </button>
  </div>
</template>