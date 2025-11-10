<script setup lang="ts">
const { currentStep, progress, totalSteps } = useForm()
</script>

<template>
  <div class="py-12 flex flex-col items-center space-y-12">
    <div class="flex flex-col items-center space-y-3">
      <p class="text-4xl font-bold">Loan Application</p>
      <p class="text-base text-gray-900">
        Complete all steps to submit your application
      </p>
    </div>

    <div class="w-full max-w-3xl bg-white rounded-lg p-6 space-y-6">
      <div class="flex flex-col items-start w-full space-y-2">
        <div class="w-full justify-between flex items-center">
          <p class="text-sm text-gray-500">Step {{ currentStep }}of {{totalSteps }}</p>

          <p class="text-sm text-gray-500">8%</p>
        </div>

        <div class="relative w-full rounded-full overflow-hidden h-2 bg-gray-200">
          <div class="w-full relative">
            <div 
              class="bg-blue-500 transition-all h-2"
              :style="{ width: progress + '%' }"
            />
          </div>
        </div>

        <p class="text-xl font-medium text-black">Primary Applicant - Personal Information</p>
      </div>

      <slot />
    </div>
  </div>
</template>