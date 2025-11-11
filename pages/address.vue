<script setup lang="ts">
type Owneship = {
  name: string,
  value: string
}

const owneships: Owneship[] = [
  { name: 'Owned', value: 'owned' },
  { name: 'Rented', value: 'rented' },
  { name: 'Living with Relatives', value: 'living with relatives' }
]
const { prevStep, nextStep } = useForm()

function backToPersonal() {
  navigateTo('/')

  prevStep()
}

function proceedToIdentification() {
  navigateTo('/identification')

  nextStep()
}

useHead({ title: 'Address' })
</script>

<template>
  <div class="space-y-4 pb-6 border-b border-gray-200">
    <BaseInput 
      label="Home Address"
      placeholder="Enter complete home address"
      required
    />

    <BaseInput 
      label="Length of Stay"
      placeholder="e.g. 5 years"
      required
    />

    <BaseSelect 
      label="Ownership"
      placeholder="Select ownership status"
      :options="owneships"
      required
    />

    <BaseInput 
      label="Contact Number"
      placeholder="e.g. +63 994 371 33992"
      required
    />
  </div>

  <div class="flex items-center w-full justify-between">
    <button 
      class="px-4 py-2 bg-gray-50 border border-gray-50 rounded-lg text-center"
      @click="backToPersonal"
    >
      <span class="text-gray-400 text-sm">Previous</span>
    </button>

    <button 
      class="px-4 py-2 bg-blue-500 rounded-lg text-center"
      @click="proceedToIdentification"
    >
      <span class="text-white text-sm">Next</span>
    </button>
  </div>
</template>