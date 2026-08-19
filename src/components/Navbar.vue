<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { profile } from '@/data/profile'
import { scrollToHash } from '@/composables/useSmoothScroll'

const visible = ref(false)
const menuOpen = ref(false)
const activeHref = ref('#home')

function onScroll() {
  visible.value = window.pageYOffset > 200

  const sections = profile.nav.map((item) => item.href.replace('#', ''))
  let current = '#home'
  sections.forEach((id) => {
    const el = document.getElementById(id)
    if (el && window.pageYOffset + 80 >= el.offsetTop) {
      current = `#${id}`
    }
  })
  activeHref.value = current
}

function onNavClick(event, href) {
  event.preventDefault()
  menuOpen.value = false
  activeHref.value = href
  scrollToHash(href, 45)
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
  <nav
    class="fixed top-0 left-0 right-0 z-[1030] bg-white shadow-sm py-4 lg:py-0 lg:px-12 flex flex-wrap items-center justify-between px-4 transition-opacity duration-[600ms]"
    :class="visible ? 'opacity-100' : 'opacity-0 pointer-events-none'"
  >
    <a href="#home" class="inline-block py-[0.3125rem] lg:ml-4 no-underline hover:no-underline" @click="onNavClick($event, '#home')">
      <h1 class="m-0">
        <span class="text-primary">{{ profile.shortName.primary }}</span> {{ profile.shortName.rest }}
      </h1>
    </a>
    <button
      type="button"
      class="lg:hidden border border-black/10 rounded px-3 py-1 bg-transparent hover:border-primary focus:outline-none focus:border-primary"
      aria-label="Menu"
      @click="menuOpen = !menuOpen"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="w-full lg:flex lg:items-center lg:w-auto lg:px-6"
      :class="menuOpen ? 'block' : 'hidden lg:flex'"
    >
      <div class="flex flex-col lg:flex-row lg:mx-auto py-0">
        <a
          v-for="item in profile.nav"
          :key="item.href"
          :href="item.href"
          class="nav-item om-nav-link py-2 lg:py-[25px] lg:px-[10px] xl:px-[10px] font-medium text-dark outline-none no-underline hover:no-underline hover:text-primary"
          :class="[
            activeHref === item.href ? 'text-primary' : 'text-dark',
            'lg:max-xl:px-1.5 lg:max-xl:text-[0.9rem]'
          ]"
          @click="onNavClick($event, item.href)"
        >
          {{ item.label }}
        </a>
      </div>
      <a
        href="#contact"
        class="btn btn-outline-primary hidden lg:inline-block"
        @click="onNavClick($event, '#contact')"
      >
        Me contacter
      </a>
    </div>
  </nav>
</template>
