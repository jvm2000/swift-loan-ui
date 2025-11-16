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
const { primaryIdentificationForm } = useStepsForm()
const errors = ref<{ [key: string]: string[] }>({})
const loading = ref(false)
const title = useState<string>('page-title')
title.value = 'Primary Applicant - Identification'

function backToAddress() {
  navigateTo('/address')

  prevStep()
}

function validateIdentificationInfo() {
  const data = primaryIdentificationForm.value

  if (!data.marital_status) errors.value.marital_status = ["Marital status is required"]

  if (!data.nationality?.trim()) errors.value.nationality = ["Nationality is required"]

  if (!data.valid_id_number?.trim()) errors.value.valid_id_number = ["TIN / SSS/ GSIS number is required"]
}

async function proceedToEmployment() {
  loading.value = true

  errors.value = {}

  await new Promise(resolve => setTimeout(resolve, 1000))
    
  validateIdentificationInfo()

  loading.value = false

  if (Object.keys(errors.value).length) return

  navigateTo('/employment')

  nextStep()
}

useHead({ title: 'Primary Applicant - Identification' })
</script>

<template>
  <div class="space-y-4 pb-6 border-b border-gray-200">
    <BaseSelect 
      v-model="primaryIdentificationForm.marital_status"
      label="Marital Status"
      placeholder="Select marital status"
      :options="maritalStatuses"
      required
      :error="getError(errors, 'marital_status')"
    />

    <BaseInput 
      v-model="primaryIdentificationForm.nationality"
      label="Nationality"
      placeholder="e.g. Filipino"
      required
      :error="getError(errors, 'nationality')"
    />

    <BaseInput 
      v-model="primaryIdentificationForm.valid_id_number"
      label="TIN / SSS / GSIS Number"
      placeholder="Enter TIN, SSS, or GSIS number"
      required
      :error="getError(errors, 'valid_id_number')"
    />
  </div>

  <div class="flex items-center w-full justify-between">
    <BaseButton
      is-secondary
      @click="backToAddress"
    >Previous</BaseButton>

    <BaseButton
      :is-loading="loading"
      @click="proceedToEmployment"
    >Next</BaseButton>
  </div>
</template>