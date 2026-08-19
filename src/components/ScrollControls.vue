<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { scrollToY } from '@/composables/useSmoothScroll'

const showBottom = ref(true)
const showTop = ref(false)

function onScroll() {
  const y = window.pageYOffset
  showBottom.value = y <= 100
  showTop.value = y > 200
}

function toTop(event) {
  event.preventDefault()
  scrollToY(0, 1500)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <i
    class="fa fa-2x fa-angle-down text-white scroll-to-bottom fixed z-[11] bottom-[30px]"
    :class="showBottom ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    style="width: 20px; left: calc(50% - 10px); transition: opacity 0.6s;"
  ></i>
  <a
    href="#home"
    class="btn btn-outline-dark px-0 back-to-top fixed z-[11] right-[30px] bottom-[30px] hover:no-underline"
    aria-label="Retour en haut"
    :class="showTop ? 'block' : 'hidden'"
    style="width: 30px; text-align: center;"
    @click="toTop"
  >
    <i class="fa fa-angle-double-up"></i>
  </a>
</template>
