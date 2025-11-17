<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/outline'

const title = useState<string>('page-title')
title.value = 'Application Complete'

useHead({ title: 'Application - Completed' })
</script>

<template>
  <div class="w-full flex flex-col items-center space-y-6 pt-14 pb-36">
    <CheckCircleIcon class="stroke-green-500 w-24 h-24" />

    <div class="text-center space-y-4">
      <p class="text-2xl font-bold">Car Loan Submission Completed</p>

      <p class="text-base">You may now close this window</p>
    </div>
  </div>
</template>