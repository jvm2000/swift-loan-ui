<script setup lang="ts">
type Options = {
  name: string,
  value: string
}

const owneships: Options[] = [
  { name: 'Owned', value: 'Owned' },
  { name: 'Rented', value: 'Rented' },
  { name: 'Living with Relatives', value: 'Living with relatives' }
]
const { prevStep, nextStep } = useForm()
const { coBorrowerAddressForm } = useStepsForm()
const errors = ref<{ [key: string]: string[] }>({})
const loading = ref(false)
const title = useState<string>('page-title')
title.value = 'Co-Borrower - Address Information'

function backToPersonal() {
  navigateTo('/borrower-personal')

  prevStep()
}

function validateAddressInfo() {
  const data = coBorrowerAddressForm.value

  if (!data.home_address?.trim()) errors.value.home_address = ["Home address is required"]

  if (!data.length_of_stay?.trim()) errors.value.length_of_stay = ["Length of stay is required"]

  if (!data.ownership) errors.value.ownership = ["Ownership is required"]

  if (!data.contact_number?.trim()) errors.value.contact_number = ["Contact number is required"]

  if (!data.landline_number?.trim()) errors.value.landline_number = ["Contact number is required"]
}

async function proceedToIdentification() {
  loading.value = true

  errors.value = {}

  await new Promise(resolve => setTimeout(resolve, 1000))
    
  validateAddressInfo()

  loading.value = false

  if (Object.keys(errors.value).length) return
  
  navigateTo('/borrower-identification')

  nextStep()
}

useHead({ title: 'Co-Borrower - Address' })
</script>

<template>
  <div class="space-y-4 pb-6 border-b border-gray-200">
    <BaseInput 
      v-model="coBorrowerAddressForm.home_address"
      label="Home Address"
      placeholder="Enter complete home address"
      required
      :error="getError(errors, 'home_address')"
    />

    <BaseInput 
      v-model="coBorrowerAddressForm.length_of_stay"
      label="Length of Stay"
      placeholder="e.g. 5 years"
      required
      :error="getError(errors, 'length_of_stay')"
    />

    <BaseSelect 
      v-model="coBorrowerAddressForm.ownership"
      label="Ownership"
      placeholder="Select ownership status"
      :options="owneships"
      required
      :error="getError(errors, 'ownership')"
    />

    <BaseInput 
      v-model="coBorrowerAddressForm.contact_number"
      label="Contact Number"
      placeholder="e.g. +63 994 371 33992"
      required
      :error="getError(errors, 'contact_number')"
    />

    <BaseInput 
      v-model="coBorrowerAddressForm.landline_number"
      label="Landline Number"
      placeholder="e.g. (02) 1234 5678 (optional)"
      :error="getError(errors, 'landline_number')"
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