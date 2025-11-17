<script setup lang="ts">
import { ClockIcon, ShieldCheckIcon, ClipboardDocumentListIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'

definePageMeta({
  layout: false,
  title: ''
})

useHead({ title: 'Welcome' })
</script>

<template>
  <div class="px-6 md:px-12 lg:px-24 w-full">
    <div class="py-12 flex">
      <img src="/images/logo-carleads.png" class="h-10" />
    </div>

    <div class="pt-12 pb-32 flex flex-col items-center w-full space-y-14 sm:xl:space-y-6">
      <p class="text-7xl sm:text-8xl text-black font-bold capitalize">Get your car loan today</p>

      <p class="text-xl sm:text-3xl text-gray-500 sm:xl:text-center max-w-4xl">
        Fast, secure and hassle-free car financing. Apply now and drive your dream car home.
      </p>

      <div class="sm:pt-4">
        <button 
          class="px-12 py-6  rounded-lg text-center text-xl sm:text-2xl bg-blue-500 text-white"
          @click="navigateTo('/personal')"
        >Start your Application</button>
      </div>
    </div>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 sm:xl:grid-cols-4 pb-24 gap-8">
      <div class="border border-gray-300 rounded-lg flex flex-col items-center p-8 space-y-3">
        <ClockIcon class="stroke-blue-500 h-16 w-16" />

        <p class="text-2xl font-medium">Quick Process</p>

        <p class="text-base text-gray-500 text-center">Complete your application in under 10 minutes</p>
      </div>

      <div class="border border-gray-300 rounded-lg flex flex-col items-center p-8 space-y-3">
        <ShieldCheckIcon class="stroke-blue-500 h-16 w-16" />

        <p class="text-2xl font-medium">Secure & Safe</p>

        <p class="text-base text-gray-500 text-center">Your information is encrypted and protected</p>
      </div>

      <div class="border border-gray-300 rounded-lg flex flex-col items-center p-8 space-y-3">
        <ClipboardDocumentListIcon class="stroke-blue-500 h-16 w-16" />

        <p class="text-2xl font-medium">Simple Steps</p>

        <p class="text-base text-gray-500 text-center">Easy-to-follow multi-step form with clear guidance</p>
      </div>

      <div class="border border-gray-300 rounded-lg flex flex-col items-center p-8 space-y-3">
        <CheckCircleIcon class="stroke-blue-500 h-16 w-16" />

        <p class="text-2xl font-medium">Fast Approval</p>

        <p class="text-base text-gray-500 text-center">Get a decision quickly after submission</p>
      </div>
    </div>

    <div class="w-full py-10 text-center border-t border-gray-300">
      <p class="text-lg text-gray-400">© 2025 carLeads. All rights reserved.</p>
    </div>
  </div>
</template>