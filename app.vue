<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} · Swift Loan UI` : 'Swift Loan UI'
  },
  link: [{ rel: 'icon', type: "image/x-icon", href: '/icons/favicon.png' }]
})
</script>

<template>
  <div class="web">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped>
.web {
  background-color: #f6f8f8;
  min-height: 100vh;
}
</style>