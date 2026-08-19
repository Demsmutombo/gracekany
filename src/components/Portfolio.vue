<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { profile } from '@/data/profile'
import SectionTitle from '@/components/SectionTitle.vue'

const activeImage = ref(null)

function openImage(item) {
  activeImage.value = item
}

function closeImage() {
  activeImage.value = null
}

function onKey(event) {
  if (event.key === 'Escape') closeImage()
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <div id="portfolio" class="w-full pt-12">
    <div class="container">
      <SectionTitle watermark="Gallery" title="Portfolio" />
      <div class="flex flex-wrap -mx-[15px] pb-4">
        <div
          v-for="item in profile.gallery"
          :key="item.src"
          class="w-full md:w-1/2 lg:w-1/3 px-[15px] mb-8"
        >
          <button
            type="button"
            class="portfolio-thumb om-card w-full p-0 overflow-hidden rounded border-0 bg-transparent cursor-pointer"
            :aria-label="`Agrandir ${item.alt}`"
            @click="openImage(item)"
          >
            <img class="w-full h-[260px] object-cover block" :src="item.src" :alt="item.alt">
          </button>
        </div>
      </div>

      <div class="video-space om-card p-4 md:p-8 mb-12">
        <div class="flex items-center justify-center mb-6">
          <i class="fa fa-2x fa-play service-icon bg-primary text-white mr-4" aria-hidden="true"></i>
          <h4 class="font-bold m-0">{{ profile.video.title }}</h4>
        </div>
        <div class="video-frame">
          <video
            class="w-full h-full"
            :src="profile.video.src"
            controls
            playsinline
            preload="metadata"
          >
            Votre navigateur ne prend pas en charge la lecture vidéo.
          </video>
        </div>
      </div>
    </div>

    <div
      v-if="activeImage"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      @click="closeImage"
    >
      <button type="button" class="lightbox-close" aria-label="Fermer" @click="closeImage">&times;</button>
      <img :src="activeImage.src" :alt="activeImage.alt" @click.stop>
    </div>
  </div>
</template>
