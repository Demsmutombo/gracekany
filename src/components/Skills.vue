<script setup>
import { profile } from '@/data/profile'
import SectionTitle from '@/components/SectionTitle.vue'
</script>

<template>
  <div id="skill" class="w-full pt-12">
    <div class="container">
      <SectionTitle watermark="Skills" title="Compétences" />
      <div class="flex flex-wrap -mx-[15px] pb-4">
        <div
          v-for="skill in profile.skills"
          :key="skill.title"
          class="w-full md:w-1/2 lg:w-1/3 px-[15px] text-center mb-12"
        >
          <div class="om-card p-4">
            <div class="flex flex-wrap items-center justify-center mb-6">
              <i :class="['fa', 'fa-2x', skill.icon, 'service-icon', 'bg-primary', 'text-white', 'mr-4']" aria-hidden="true"></i>
              <h4 class="font-bold m-0 break-words max-w-[calc(100%-80px)]">{{ skill.title }}</h4>
            </div>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
