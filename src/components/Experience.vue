<script setup>
import { profile } from '@/data/profile'
import SectionTitle from '@/components/SectionTitle.vue'
</script>

<template>
  <div id="qualification" class="w-full py-12">
    <div class="container">
      <SectionTitle watermark="Parcours" title="Formation & Expérience" />
      <div class="flex flex-wrap items-center -mx-[15px]">
        <div class="w-full lg:w-1/2 px-[15px]">
          <h3 class="mb-6">Ma formation</h3>
          <div class="border-l border-primary pt-2 pl-6 ml-2">
            <div
              v-for="item in profile.education"
              :key="item.title"
              class="relative mb-6"
            >
              <i class="far fa-dot-circle text-primary absolute" style="top: 2px; left: -32px;"></i>
              <h5 class="font-bold mb-1 break-words">{{ item.title }}</h5>
              <p class="mb-2"><strong>{{ item.meta }}</strong></p>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-[15px]">
          <h3 class="mb-6">Mes expériences</h3>
          <div class="border-l border-primary pt-2 pl-6 ml-2">
            <div
              v-for="(item, index) in profile.experiences"
              :key="index"
              class="relative mb-6"
            >
              <i class="far fa-dot-circle text-primary absolute" style="top: 2px; left: -32px;"></i>
              <h5 class="font-bold mb-1">{{ item.position }}</h5>
              <p class="mb-2">
                <strong>{{ item.company }}</strong> | <small>{{ item.period }}</small>
              </p>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
