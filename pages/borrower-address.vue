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

  if (!data.co_home_address?.trim()) errors.value.co_home_address = ["Home address is required"]

  if (!data.co_length_of_stay?.trim()) errors.value.co_length_of_stay = ["Length of stay is required"]

  if (!data.co_ownership) errors.value.co_ownership = ["Ownership is required"]

  if (!data.co_contact_number?.trim()) errors.value.co_contact_number = ["Contact number is required"]

  if (data.co_contact_number.length !== 11) errors.value.co_contact_number = ["Contact number must be 11 characters"]

  if (!/^\d+$/.test(data.co_contact_number)) errors.value.co_contact_number = ["Contact number must be a number"]

  if (data.co_landline_number && !/^\d+$/.test(data.co_landline_number)) errors.value.co_landline_number = ["Landline number must be a number"]
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
      v-model="coBorrowerAddressForm.co_home_address"
      label="Home Address"
      placeholder="Enter complete home address"
      required
      :error="getError(errors, 'home_address')"
    />

    <BaseInput 
      v-model="coBorrowerAddressForm.co_length_of_stay"
      label="Length of Stay"
      placeholder="e.g. 5 years"
      required
      :error="getError(errors, 'length_of_stay')"
    />

    <BaseSelect 
      v-model="coBorrowerAddressForm.co_ownership"
      label="Ownership"
      placeholder="Select ownership status"
      :options="owneships"
      required
      :error="getError(errors, 'ownership')"
    />

    <BaseInput 
      v-model="coBorrowerAddressForm.co_contact_number"
      label="Contact Number"
      placeholder="e.g. +63 994 371 33992"
      required
      :error="getError(errors, 'contact_number')"
    />

    <BaseInput 
      v-model="coBorrowerAddressForm.co_landline_number"
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