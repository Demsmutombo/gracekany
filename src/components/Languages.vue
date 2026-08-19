<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { profile } from '@/data/profile'
import SectionTitle from '@/components/SectionTitle.vue'

const animated = ref(false)
const sectionRef = ref(null)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animated.value = true
        observer.disconnect()
      }
    },
    { rootMargin: '0px 0px -20% 0px' }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})

const left = profile.languages.slice(0, 2)
const right = profile.languages.slice(2)
</script>

<template>
  <div id="languages" class="w-full py-12" ref="sectionRef">
    <div class="container">
      <SectionTitle watermark="Langues" title="Mes langues" />
      <div class="flex flex-wrap items-center -mx-[15px]">
        <div class="w-full md:w-1/2 px-[15px]">
          <div v-for="lang in left" :key="lang.name" class="mb-6">
            <div class="flex justify-between">
              <h6 class="font-bold">{{ lang.name }}</h6>
              <h6 class="font-bold">{{ lang.level }} · {{ lang.value }}%</h6>
            </div>
            <div class="progress">
              <div
                class="progress-bar"
                :class="lang.barClass"
                role="progressbar"
                :style="{ width: animated ? lang.value + '%' : '0%' }"
              ></div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-[15px]">
          <div v-for="lang in right" :key="lang.name" class="mb-6">
            <div class="flex justify-between">
              <h6 class="font-bold">{{ lang.name }}</h6>
              <h6 class="font-bold">{{ lang.level }} · {{ lang.value }}%</h6>
            </div>
            <div class="progress">
              <div
                class="progress-bar"
                :class="lang.barClass"
                role="progressbar"
                :style="{ width: animated ? lang.value + '%' : '0%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
