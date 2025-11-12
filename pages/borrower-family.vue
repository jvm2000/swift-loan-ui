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

function backToIncome() {
  navigateTo('/borrower-income')

  prevStep()
}

function submit() {

}

useHead({ title: 'Co-Borrower - Family' })
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
      @click="backToIncome"
    >
      <span class="text-gray-400 text-sm">Previous</span>
    </button>

    <button class="px-4 py-2 bg-blue-500 rounded-lg text-center" @click="submit">
      <span class="text-white text-sm">Submit Application</span>
    </button>
  </div>
</template>