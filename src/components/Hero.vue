<script setup>
import { profile } from '@/data/profile'
import { useTypedText } from '@/composables/useTypedText'
import { scrollToHash } from '@/composables/useSmoothScroll'
import profileImg from '@/assets/images/profile.jpeg'

const { output } = useTypedText(profile.typedStrings)

function goTo(hash) {
  scrollToHash(hash, 45)
}

function downloadCv() {
  window.open('/cv.html?print=1', '_blank', 'noopener')
}
</script>

<template>
  <div
    id="home"
    class="w-full bg-primary flex items-center mb-12 py-12"
    style="min-height: 100vh"
  >
    <div class="container">
      <div class="flex flex-wrap items-center -mx-[15px]">
        <div class="w-full lg:w-5/12 px-12 lg:pl-0 pb-12 lg:pb-0">
          <div class="w-full max-w-[420px] mx-auto lg:mx-0 aspect-square rounded-full overflow-hidden shadow-sm">
            <img
              class="w-full h-full object-cover object-[center_22%]"
              :src="profileImg"
              :alt="profile.name"
            >
          </div>
        </div>
        <div class="w-full lg:w-7/12 px-[15px] text-center lg:text-left">
          <h3 class="text-white font-normal mb-4">{{ profile.greeting }}</h3>
          <h1 class="hero-name uppercase text-primary mb-2">{{ profile.heroName }}</h1>
          <h1 class="inline font-light text-white">
            {{ output }}<span class="typed-cursor">|</span>
          </h1>
          <p class="text-white mt-6 mb-0">{{ profile.tagline }}</p>
          <div class="flex items-center justify-center lg:justify-start pt-12 flex-wrap">
            <a href="/cv.html" class="btn btn-outline-light mr-6 mb-4" @click.prevent="downloadCv">Télécharger mon CV</a>
            <a href="#contact" class="btn btn-outline-light mb-4" @click.prevent="goTo('#contact')">Me contacter</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
