<script setup>
import { profile } from '@/data/profile'
import SectionTitle from '@/components/SectionTitle.vue'
</script>

<template>
  <div id="contact" class="w-full py-12">
    <div class="container">
      <SectionTitle watermark="Contact" title="Me contacter" />
      <div class="flex flex-wrap justify-center -mx-[15px]">
        <div class="w-full md:w-5/12 px-[15px] text-center mb-8">
          <a
            :href="`mailto:${profile.email}`"
            class="contact-card om-card no-underline hover:no-underline block p-8"
          >
            <div class="flex flex-wrap items-center justify-center">
              <i class="fa fa-2x fa-envelope service-icon bg-primary text-white mr-4" aria-hidden="true"></i>
              <h4 class="font-bold m-0 text-dark">Email</h4>
            </div>
          </a>
        </div>
        <div class="w-full md:w-5/12 px-[15px] text-center mb-8">
          <a
            :href="profile.whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-card om-card no-underline hover:no-underline block p-8"
          >
            <div class="flex flex-wrap items-center justify-center">
              <i class="fab fa-2x fa-whatsapp service-icon bg-primary text-white mr-4" aria-hidden="true"></i>
              <h4 class="font-bold m-0 text-dark">WhatsApp</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
