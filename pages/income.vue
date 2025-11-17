<script setup lang="ts">
const { prevStep, nextStep } = useForm()
const { primaryIncomeForm } = useStepsForm()
const errors = ref<{ [key: string]: string[] }>({})
const loading = ref(false)
const title = useState<string>('page-title')
title.value = 'Primary Applicant - Income Details'

function backToEmployment() {
  navigateTo('/employment')

  prevStep()
}

function validateIncomeInfo() {
  const data = primaryIncomeForm.value

  if (!data.monthly_income?.trim()) errors.value.monthly_income = ["Monthly income is required"]
}

async function proceedToFamily() {
  loading.value = true

  errors.value = {}

  await new Promise(resolve => setTimeout(resolve, 1000))
    
  validateIncomeInfo()

  loading.value = false

  if (Object.keys(errors.value).length) return

  navigateTo('/family')

  nextStep()
}

useHead({ title: 'Primary Applicant - Income' })
</script>

<template>
  <div class="space-y-4 pb-6 border-b border-gray-200">
    <BaseInput 
      v-model="primaryIncomeForm.monthly_income"
      label="Monthly Income"
      placeholder="e.g., ₱50,000"
      required
      :error="getError(errors, 'monthly_income')"
    />

    <BaseInput 
      v-model="primaryIncomeForm.other_icome"
      label="Other Income (Sideline)"
      placeholder="e.g., ₱10,000 (optional)"
      :error="getError(errors, 'other_icome')"
    />
  </div>

  <div class="flex items-center w-full justify-between">
    <BaseButton
      is-secondary
      @click="backToEmployment"
    >Previous</BaseButton>

    <BaseButton
      :is-loading="loading"
      @click="proceedToFamily"
    >Next</BaseButton>
  </div>
</template>