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
const { primaryAddressForm } = useStepsForm()
const errors = ref<{ [key: string]: string[] }>({})
const loading = ref(false)
const title = useState<string>('page-title')
title.value = 'Primary Applicant - Address Information'

function backToPersonal() {
  navigateTo('/')

  prevStep()
}

function validateAddressInfo() {
  const data = primaryAddressForm.value

  if (!data.home_address?.trim()) errors.value.home_address = ["Home address is required"]

  if (!data.length_of_stay?.trim()) errors.value.length_of_stay = ["Length of stay is required"]

  if (!data.ownership) errors.value.ownership = ["Ownership is required"]

  if (!data.contact_number?.trim()) errors.value.contact_number = ["Contact number is required"]
}

async function proceedToIdentification() {
  loading.value = true

  errors.value = {}

  await new Promise(resolve => setTimeout(resolve, 1000))
    
  validateAddressInfo()

  loading.value = false

  if (Object.keys(errors.value).length) return

  navigateTo('/identification')

  nextStep()
}

useHead({ title: 'Primary Applicant - Address' })
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
    <BaseButton
      is-secondary
      @click="backToPersonal"
    >Previous</BaseButton>

    <BaseButton
      :is-loading="loading"
      @click="proceedToIdentification"
    >Next</BaseButton>
  </div>
</template>