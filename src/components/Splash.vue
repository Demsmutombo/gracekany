<script setup>
import { onMounted, ref } from 'vue'

const visible = ref(true)
const fading = ref(false)

onMounted(() => {
  window.setTimeout(() => {
    fading.value = true
    window.setTimeout(() => {
      visible.value = false
    }, 500)
  }, 1800)
})
</script>

<template>
  <div
    v-if="visible"
    class="splash-screen"
    :class="{ 'splash-screen--out': fading }"
    aria-hidden="true"
  >
    <div class="splash-logo-wrap">
      <img src="/img/logo.png" alt="One Memoria" class="splash-logo">
    </div>
  </div>
</template>
