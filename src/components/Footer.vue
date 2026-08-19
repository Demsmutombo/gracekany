<script setup>
import { profile } from '@/data/profile'
</script>

<template>
  <footer class="om-footer">
    <div class="container text-center">
      <i class="far fa-heart om-footer-heart" aria-hidden="true"></i>
      <p class="om-footer-quote">« {{ profile.tagline }} »</p>
      <p class="om-footer-sub">Master en Ressources Humaines — {{ profile.name }}</p>
      <div class="om-footer-credit">
        <p class="m-0">
          Conçu par
          <a
            href="https://www.onememoria.com"
            target="_blank"
            rel="noopener noreferrer"
            class="om-footer-brand-link"
          >One Memoria</a>
        </p>
        <span class="om-footer-sep" aria-hidden="true">|</span>
        <a
          class="om-wa-btn"
          :href="profile.footerWhatsapp"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          aria-label="Ouvrir WhatsApp"
        >
          <i class="fab fa-whatsapp" aria-hidden="true"></i>
        </a>
      </div>
      <p class="om-footer-copy m-0">&copy; {{ profile.name }}</p>
    </div>
  </footer>
</template>
