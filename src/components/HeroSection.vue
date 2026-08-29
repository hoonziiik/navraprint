<script setup lang="ts">
import keycapsImage from '../assets/hero obrazek.png'
</script>

<template>
  <section id="top" class="hero-section">
    <div class="container hero-section__grid">
      <div class="hero-section__copy">
        <span class="eyebrow">Originální 3D výrobky</span>
        <h1>Nápady, které<br /><span>dostanou tvar.</span></h1>
        <p>Originální doplňky a praktické výrobky z 3D tisku. Navrženo a vyrobeno v Česku.</p>
        <a class="button" href="#produkty">Prohlédnout produkty <span>→</span></a>
      </div>

      <div class="hero-visual">
        <img :src="keycapsImage" alt="Floating 3D keycapy NavraPrint" />
      </div>
    </div>

    <div class="container hero-section__meta">
      3D tisk <b>•</b> vlastní design <b>•</b> výroba v Česku
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: clamp(610px, 80svh, 860px);
  overflow: hidden;
  padding: 82px 0 28px;
  background: var(--background);
}

.hero-section__grid {
  display: grid;
  grid-template-columns: 45% 55%;
  align-items: center;
  min-height: calc(clamp(610px, 80svh, 860px) - 110px);
}

.hero-section__copy {
  position: relative;
  z-index: 1;
  padding: 35px 0 55px;
}

h1 {
  margin: 21px 0 24px;
  font-size: clamp(3.35rem, 6vw, 5.9rem);
  font-weight: 700;
  line-height: 0.97;
  letter-spacing: -0.085em;
}

h1 span {
  background: linear-gradient(100deg, #a78bfa 12%, var(--primary) 48%, var(--secondary) 94%);
  background-clip: text;
  color: transparent;
}

.hero-section__copy p {
  max-width: 430px;
  margin: 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.7;
}

.hero-section__copy .button {
  margin-top: 32px;
}

.hero-visual {
  position: relative;
  display: grid;
  min-height: 100%;
  place-items: center;
}

.hero-visual::before {
  position: absolute;
  width: min(44vw, 590px);
  aspect-ratio: 1;
  content: '';
  border-radius: 50%;
  background: radial-gradient(circle, #8b5cf630 0%, #38bdf815 46%, transparent 71%);
  filter: blur(14px);
}

.hero-visual img {
  position: relative;
  z-index: 1;
  width: min(62vw, 720px);
  max-width: none;
  margin-right: -10%;
  object-fit: contain;
  filter: drop-shadow(0 26px 38px #00000061);
  animation: keycaps-float 12s ease-in-out infinite;
}

.hero-section__meta {
  position: absolute;
  bottom: 28px;
  left: 50%;
  display: flex;
  gap: 12px;
  width: min(1160px, calc(100% - 48px));
  padding-top: 21px;
  border-top: 1px solid color-mix(in srgb, var(--border) 70%, transparent);
  color: var(--muted);
  font-family: ui-monospace, 'Cascadia Code', monospace;
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transform: translateX(-50%);
}

.hero-section__meta b {
  color: var(--secondary);
}

@keyframes keycaps-float {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(0.001deg);
  }
  50% {
    transform: translate3d(0, -10px, 0) rotate(0.45deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-visual img {
    animation: none;
  }
}

@media (max-width: 760px) {
  .hero-section {
    display: block;
    min-height: auto;
    padding: 106px 0 25px;
  }

  .hero-section__grid {
    display: block;
    min-height: auto;
  }

  .hero-section__copy {
    padding: 0;
  }

  h1 {
    font-size: clamp(3.15rem, 13.5vw, 4.6rem);
  }

  .hero-visual {
    min-height: 340px;
    margin-top: 16px;
  }

  .hero-visual::before {
    width: min(88vw, 480px);
  }

  .hero-visual img {
    width: min(110vw, 580px);
    max-width: 110vw;
    margin-right: 0;
  }

  .hero-section__meta {
    position: static;
    width: min(100% - 32px, 1160px);
    margin: 0 auto;
    font-size: 0.56rem;
    line-height: 1.6;
    transform: none;
  }
}
</style>
