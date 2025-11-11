<script setup lang="ts">
const { prevStep, nextStep } = useForm()

function backToIncome() {
  navigateTo('/income')

  prevStep()
}

function proceedToFamily() {
  navigateTo('/employment')

  nextStep()
}

useHead({ title: 'Family' })
</script>

<template>
  <div class="space-y-4 pb-6 border-b border-gray-200">
    <BaseInput 
      label="Mother's Maiden Name"
      placeholder="Enter mother's maiden name"
      required
    />
  </div>

  <div class="flex items-center w-full justify-between">
    <button 
      class="px-4 py-2 bg-gray-50 border border-gray-50 rounded-lg text-center"
      @click= "backToIncome"
    >
      <span class="text-gray-400 text-sm">Previous</span>
    </button>

    <button 
      class="px-4 py-2 bg-blue-500 rounded-lg text-center"
      @click="proceedToFamily"
    >
      <span class="text-white text-sm">Next</span>
    </button>
  </div>
</template>