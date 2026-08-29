<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import logoMain from '../assets/logo main.png'
import logoMainWhite from '../assets/logo main bile.png'

defineProps<{ isLightTheme: boolean }>()
defineEmits<{ toggleTheme: [] }>()

const menuOpen = ref(false)
const closeMenu = () => {
  menuOpen.value = false
}
</script>
<template>
  <header class="header">
    <div class="container header__inner">
      <RouterLink class="brand" to="/" aria-label="NavraPrint – úvodní stránka">
        <img :src="isLightTheme ? logoMain : logoMainWhite" alt="NavraPrint" />
      </RouterLink>
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-label="Otevřít navigaci"
        @click="menuOpen = !menuOpen"
      >
        <i></i><i></i>
      </button>
      <nav class="nav" :class="{ 'nav--open': menuOpen }" aria-label="Hlavní navigace">
        <RouterLink :to="{ path: '/', hash: '#produkty' }" @click="closeMenu">Produkty</RouterLink>
        <RouterLink :to="{ path: '/', hash: '#o-projektu' }" @click="closeMenu"
          >O projektu</RouterLink
        >
        <RouterLink :to="{ path: '/', hash: '#faq' }" @click="closeMenu">FAQ</RouterLink>
        <button
          class="theme-toggle"
          type="button"
          :aria-label="isLightTheme ? 'Zapnout tmavé téma' : 'Zapnout světlé téma'"
          @click="$emit('toggleTheme')"
        >
          <span aria-hidden="true">{{ isLightTheme ? '☾' : '☀' }}</span>
        </button>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.header {
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  border-bottom: 1px solid color-mix(in srgb, var(--border) 70%, transparent);
  background: color-mix(in srgb, var(--background) 74%, transparent);
  backdrop-filter: blur(18px);
}
.header__inner {
  width: min(1128px, calc(100% - 48px));
  min-height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 1.06rem;
  font-weight: 800;
  letter-spacing: -0.055em;
}
.brand img {
  width: 148px;
  height: 49px;
  object-fit: contain;
}
.nav {
  display: flex;
  align-items: center;
  gap: 31px;
  color: var(--muted);
  font-size: 0.83rem;
  font-weight: 700;
}
.nav a:not(.header__cta):hover {
  color: var(--secondary);
}
.theme-toggle {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: color-mix(in srgb, var(--surface) 74%, transparent);
  color: var(--secondary);
  cursor: pointer;
  backdrop-filter: blur(12px);
  transition:
    border-color 0.2s,
    transform 0.2s;
}
.theme-toggle:hover {
  border-color: var(--secondary);
  transform: rotate(14deg);
}
.menu-toggle {
  display: none;
  border: 0;
  background: none;
}
@media (max-width: 720px) {
  .header__inner {
    width: min(100% - 32px, 1128px);
    min-height: 66px;
  }
  .menu-toggle {
    z-index: 2;
    display: grid;
    gap: 5px;
    padding: 9px 0 9px 12px;
  }
  .menu-toggle i {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--text);
  }
  .nav {
    display: none;
    position: absolute;
    top: 58px;
    right: 16px;
    left: 16px;
    padding: 20px;
    align-items: stretch;
    flex-direction: column;
    gap: 18px;
    background: color-mix(in srgb, var(--surface) 92%, transparent);
    border: 1px solid var(--border);
    box-shadow: 0 14px 30px #00000066;
    backdrop-filter: blur(20px);
  }
  .nav--open {
    display: flex;
  }
  .theme-toggle {
    width: 100%;
    border-radius: 8px;
  }
}
</style>
