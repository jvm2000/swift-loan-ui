<script setup lang="ts">
const { prevStep, nextStep } = useForm()

function backToEmployment() {
  navigateTo('/employment')

  prevStep()
}

function proceedToIncome() {
  navigateTo('/income')

  nextStep()
}

useHead({ title: 'Employment' })
</script>

<template>
  <div class="space-y-4 pb-6 border-b border-gray-200">
    <BaseInput 
      label="Company Name"
      placeholder="Enter company name"
      required
    />

    <BaseInput 
      label="Position"
      placeholder="Enter your position"
      required
    />

    <BaseInput 
      label="Company Address"
      placeholder="Enter complete company address"
      required
    />

    <BaseInput 
      label="Company's Contact Number"
      placeholder="Enter company contact number"
      required
    />

    <BaseInput 
      label="Years of Service"
      placeholder="e. g. 3 years"
      required
    />
  </div>

  <div class="flex items-center w-full justify-between">
    <button 
      class="px-4 py-2 bg-gray-50 border border-gray-50 rounded-lg text-center"
      @click="backToEmployment"
    >
      <span class="text-gray-400 text-sm">Previous</span>
    </button>

    <button 
      class="px-4 py-2 bg-blue-500 rounded-lg text-center"
      @click="proceedToIncome"
    >
      <span class="text-white text-sm">Next</span>
    </button>
  </div>
</template>