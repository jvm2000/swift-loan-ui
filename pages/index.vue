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
  <div class="space-y-4">
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
</template>