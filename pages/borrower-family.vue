<script setup lang="ts">
const { prevStep } = useForm()
const { coBorrowerFamilyForm } = useStepsForm()
const errors = ref<{ [key: string]: string[] }>({})
const loading = ref(false)
const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbwAFYY6o2i-G1HqaUqhzzCp30z9zVsH4x7kBAkjfc3Qfj0vFrRZuW4-IWIZcSchpqH3/exec'
const title = useState<string>('page-title')
title.value = 'Co-Borrower - Income Details'

function backToIncome() {
  navigateTo('/borrower-income')

  prevStep()
}

function validateFamilyInfo() {
  const data = coBorrowerFamilyForm.value

  if (!data.mothers_maiden_name?.trim()) errors.value.mothers_maiden_name = ["Mother's Maiden Name is required"]
}

async function submit() {
  loading.value = true
  errors.value = {}

  await new Promise(resolve => setTimeout(resolve, 1000))
    
  validateFamilyInfo()

  loading.value = false
  if (Object.keys(errors.value).length) return

  try {
    await useFetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: generalForm.value,
    })
  } catch (error) {
    console.error('Error sending data to Google Sheet:', error);
  }
}

useHead({ title: 'Co-Borrower - Family' })
</script>

<template>
  <div class="space-y-4 pb-6 border-b border-gray-200">
    <BaseInput 
      v-model="coBorrowerFamilyForm.mothers_maiden_name"
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
      @click="submit"
    >Submit Application</BaseButton> 
  </div>
</template>