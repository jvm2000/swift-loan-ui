<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} · CarLeads PH` : 'CarLeads PH'
  },
  link: [{ rel: 'icon', type: "image/x-icon", href: '/icons/favicon.ico' }]
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>