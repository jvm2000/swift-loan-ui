<script setup lang="ts">
const { prevStep, nextStep } = useForm()
const { coBorrowerEmployeeForm } = useStepsForm()
const errors = ref<{ [key: string]: string[] }>({})
const loading = ref(false)
const title = useState<string>('page-title')
title.value = 'Co-Borrower - Employment Information'

function backToIdentification() {
  navigateTo('/borrower-identification')

  prevStep()
}

function validateEmployeeInfo() {
  const data = coBorrowerEmployeeForm.value

  if (!data.company_name) errors.value.company_name = ["Company name is required"]

  if (!data.position?.trim()) errors.value.position = ["Position is required"]

  if (!data.company_address?.trim()) errors.value.company_address = ["Company address is required"]

  if (!data.company_contact_number?.trim()) errors.value.company_contact_number = ["Contact number is required"]

  if (!data.years_of_service?.trim()) errors.value.years_of_service = ["Years of service is required"]
}

async function proceedToIncome() {
  loading.value = true

  errors.value = {}

  await new Promise(resolve => setTimeout(resolve, 1000))
    
  validateEmployeeInfo()

  loading.value = false

  if (Object.keys(errors.value).length) return

  navigateTo('/borrower-income')

  nextStep()
}

useHead({ title: 'Co-Borrower - Employment' })
</script>

<template>
  <div class="space-y-4 pb-6 border-b border-gray-200">
    <BaseInput 
      v-model="coBorrowerEmployeeForm.company_name"
      label="Company Name"
      placeholder="Enter company name"
      required
      :error="getError(errors, 'company_name')"
    />

    <BaseInput 
      v-model="coBorrowerEmployeeForm.position"
      label="Position"
      placeholder="Enter your position"
      required
      :error="getError(errors, 'position')"
    />

    <BaseInput 
      v-model="coBorrowerEmployeeForm.company_address"
      label="Company Address"
      placeholder="Enter complete company address"
      required
      :error="getError(errors, 'company_address')"
    />

    <BaseInput 
      v-model="coBorrowerEmployeeForm.company_contact_number"
      label="Company's Contact Number"
      placeholder="Enter company contact number"
      required
      :error="getError(errors, 'company_contact_number')"
    />

    <BaseInput
      v-model="coBorrowerEmployeeForm.years_of_service"
      label="Years of Service"
      placeholder="e. g. 3 years"
      required
      :error="getError(errors, 'years_of_service')"
    />
  </div>

  <div class="flex items-center w-full justify-between">
    <BaseButton
      is-secondary
      @click="backToIdentification"
    >Previous</BaseButton>

    <BaseButton
      :is-loading="loading"
      @click="proceedToIncome"
    >Next</BaseButton>
  </div>
</template>