<script setup lang="ts">
type Options = {
  name: string,
  value: string
}

const owneships: Options[] = [
  { name: 'Owned', value: 'owned' },
  { name: 'Rented', value: 'rented' },
  { name: 'Living with Relatives', value: 'living with relatives' }
]
const { prevStep, nextStep } = useForm()
const title = useState<string>('page-title')
title.value = 'Co-Borrower - Income Details'

function backToEmployment() {
  navigateTo('/borrower-employment')

  prevStep()
}

function proceedToFamily() {
  navigateTo('/borrower-family')

  nextStep()
}

useHead({ title: 'Co-Borrower - Income' })
</script>

<template>
  <div class="space-y-4 pb-6 border-b border-gray-200">
    <BaseInput 
      label="Monthly Income"
      placeholder="e.g., ₱50,000"
      required
    />

    <BaseInput 
      label="Other Income (Sideline)"
      placeholder="e.g., ₱10,000 (optional)"
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

    <button class="px-4 py-2 bg-blue-500 rounded-lg text-center" @click="proceedToFamily">
      <span class="text-white text-sm">Next</span>
    </button>
  </div>
</template>