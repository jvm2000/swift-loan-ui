<script setup lang="ts">
const { prevStep, nextStep } = useForm()
const { primaryFamilyForm, submit } = useStepsForm()
const errors = ref<{ [key: string]: string[] }>({})
const loading = ref(false)
const title = useState<string>('page-title')
title.value = 'Primary Applicant - Family Information'

function backToIncome() {
  navigateTo('/income')

  prevStep()
}

function validateFamilyInfo() {
  const data = primaryFamilyForm.value

  if (!data.mothers_maiden_name?.trim()) errors.value.mothers_maiden_name = ["Mother's Maiden Name is required"]
}

async function proceedToPersonalCoBurrower() {
  loading.value = true

  errors.value = {}

  await new Promise(resolve => setTimeout(resolve, 1000))
    
  validateFamilyInfo()

  loading.value = false

  if (Object.keys(errors.value).length) return

  navigateTo('/borrower-personal')

  nextStep()

  await submit()
}

useHead({ title: 'Primary Applicant - Family' })
</script>

<template>
  <div class="space-y-4 pb-6 border-b border-gray-200">
    <BaseInput 
      v-model="primaryFamilyForm.mothers_maiden_name"
      label="Mother's Maiden Name"
      placeholder="Enter mother's maiden name"
      required
      :error="getError(errors, 'mothers_maiden_name')"
    />
  </div>

  <div class="flex items-center w-full justify-between">
    <BaseButton
      is-secondary
      @click="backToIncome"
    >Previous</BaseButton>

    <BaseButton
      :is-loading="loading"
      @click="proceedToPersonalCoBurrower"
    >Next</BaseButton>
  </div>
</template>