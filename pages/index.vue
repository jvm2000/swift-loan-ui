<script setup lang="ts">
type Gender = {
  name: string,
  value: string
}

const genders: Gender[] = [
  { name: 'Male', value: 'male' },
  { name: 'Female', value: 'female' },
  { name: 'Others', value: 'others' }
]
</script>

<template>
  <div class="space-y-4 pb-6 border-b border-gray-200">
    <BaseInput 
      label="First Name"
      placeholder="Enter first name"
      required
    />

    <BaseInput 
      label="Middle Name"
      placeholder="Enter middle name (optional)"
    />

    <BaseInput 
      label="Last Name"
      placeholder="Enter last name"
      required
    />

    <BaseDatePicker 
      label="Birthday"
      placeholder="Pick a date"
      required
    />

    <BaseSelect 
      label="Gender"
      placeholder="Select Gender"
      :options="genders"
      required
    />
  </div>

  <div class="flex items-center w-full justify-between">
    <button class="px-4 py-2 bg-gray-50 border border-gray-50 rounded-lg text-center">
      <span class="text-gray-400 text-sm">Previous</span>
    </button>

    <button class="px-4 py-2 bg-blue-500 rounded-lg text-center">
      <span class="text-white text-sm">Next</span>
    </button>
  </div>
</template>