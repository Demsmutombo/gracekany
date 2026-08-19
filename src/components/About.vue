<script setup>
import { profile } from '@/data/profile'
import { scrollToHash } from '@/composables/useSmoothScroll'
import SectionTitle from '@/components/SectionTitle.vue'
import aboutImg from '@/assets/images/about.jpeg'

function goTo(hash) {
  scrollToHash(hash, 45)
}
</script>

<template>
  <div id="about" class="w-full py-12">
    <div class="container">
      <SectionTitle watermark="Profil" title="À propos" />
      <div class="flex flex-wrap items-center -mx-[15px]">
        <div class="w-full lg:w-5/12 px-[15px] pb-6 lg:pb-0">
          <img class="w-full rounded" :src="aboutImg" :alt="profile.name">
        </div>
        <div class="w-full lg:w-7/12 px-[15px]">
          <h3 class="mb-6 break-words">{{ profile.title }}</h3>
          <p v-for="(paragraph, index) in profile.about" :key="index">{{ paragraph }}</p>
          <div class="flex flex-wrap -mx-[15px] mb-4">
            <div class="w-full sm:w-1/2 px-[15px] py-2">
              <h6 class="break-words">Nom : <span class="text-secondary">{{ profile.name }}</span></h6>
            </div>
            <div class="w-full sm:w-1/2 px-[15px] py-2">
              <h6 class="break-words">Date de naissance : <span class="text-secondary">{{ profile.birthDate }}</span></h6>
            </div>
            <div class="w-full sm:w-1/2 px-[15px] py-2">
              <h6>Diplôme : <span class="text-secondary">{{ profile.degree }}</span></h6>
            </div>
            <div class="w-full sm:w-1/2 px-[15px] py-2">
              <h6>Nationalité : <span class="text-secondary">{{ profile.nationality }}</span></h6>
            </div>
            <div class="w-full sm:w-1/2 px-[15px] py-2">
              <h6>WhatsApp : <span class="text-secondary"><a :href="profile.whatsapp" target="_blank" rel="noopener noreferrer">{{ profile.whatsappNumber }}</a></span></h6>
            </div>
            <div class="w-full sm:w-1/2 px-[15px] py-2">
              <h6 class="break-words">Email : <span class="text-secondary"><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></span></h6>
            </div>
          </div>
          <a href="#contact" class="btn btn-outline-primary mr-6" @click.prevent="goTo('#contact')">Me contacter</a>
          <a href="#qualification" class="btn btn-outline-primary" @click.prevent="goTo('#qualification')">Voir mon parcours</a>
        </div>
      </div>
    </div>
  </div>
</template>
