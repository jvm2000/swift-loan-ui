<script setup lang="ts">
const { prevStep, nextStep } = useForm()
const { coBorrowerFamilyForm } = useStepsForm()
const errors = ref<{ [key: string]: string[] }>({})
const loading = ref(false)
const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbzLMbg-VofWxKdUmO094bIee7OyjYZ2QNw2EzoDQ2BMbPCjEaTVSiqiavt-ZbdKizd1rw/exec'
const title = useState<string>('page-title')
title.value = 'Co-Borrower - Income Details'

function backToIncome() {
  navigateTo('/borrower-income')

  prevStep()
}

function validateFamilyInfo() {
  const data = coBorrowerFamilyForm.value

  if (!data.co_mothers_maiden_name?.trim()) errors.value.co_mothers_maiden_name = ["Mother's Maiden Name is required"]
}

async function submit() {
  const { generalForm } = useStepsForm()
  loading.value = true
  errors.value = {}

  await new Promise(resolve => setTimeout(resolve, 1000))
    
  validateFamilyInfo()

  if (Object.keys(errors.value).length) return

  try {
    await useFetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: generalForm.value,
    })

    nextStep()

    navigateTo('submission-complete')
  } catch (error) {
    console.error('Error sending data to Google Sheet:', error)
  } finally {
    loading.value = false
  }
}

useHead({ title: 'Co-Borrower - Family' })
</script>

<template>
  <div class="space-y-4 pb-6 border-b border-gray-200">
    <BaseInput 
      v-model="coBorrowerFamilyForm.co_mothers_maiden_name"
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