<script setup>
defineProps({
  watermark: { type: String, required: true },
  title: { type: String, required: true }
})
</script>

<template>
  <div class="relative flex items-center justify-center">
    <h1 class="section-watermark uppercase text-white">{{ watermark }}</h1>
    <h1 class="absolute uppercase text-primary text-center max-w-full px-4 break-words">{{ title }}</h1>
  </div>
</template>
