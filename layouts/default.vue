<script setup lang="ts">

</script>

<template>
  <div class="py-12 flex flex-col items-center space-y-12">
    <div class="flex flex-col items-center space-y-3">
      <p class="text-4xl font-bold">Loan Application</p>
      <p class="text-base text-gray-900">
        Complete all steps to submit your application
      </p>
    </div>

    <div class="w-full max-w-5xl bg-white rounded-lg p-6">
      <div class="flex flex-col items-start w-full space-y-2">
        <div class="w-full justify-between flex items-center">
          <p class="text-base text-gray-500">Step 1 of 12</p>

          <p class="text-base text-gray-500">8%</p>
        </div>

        <div class="relative w-full rounded-full overflow-hidden h-2 bg-gray-200">
          <div class="grid grid-cols-12 w-full">
            <div class="col-span-1 bg-blue-500 w-full h-2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>