<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'

const isLightTheme = ref(localStorage.getItem('theme') === 'light')

function toggleTheme() {
  isLightTheme.value = !isLightTheme.value
  localStorage.setItem('theme', isLightTheme.value ? 'light' : 'dark')
}
</script>

<template>
  <div class="site" :class="{ 'theme-light': isLightTheme }">
    <SiteHeader :is-light-theme="isLightTheme" @toggle-theme="toggleTheme" />
    <RouterView />
    <SiteFooter />
  </div>
</template>
