<script setup lang="ts">
import logoIcon from '../assets/jen logo.png'
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer id="kontakt" class="footer">
    <div class="container">
      <div class="footer__cta">
        <span class="eyebrow">Buďte u toho</span>
        <h2>Nové výrobky<br /><em>už brzy.</em></h2>
        <a class="button button--light" href="mailto:jan.navratil05@gmail.com"
          >Napsat nám <span>→</span></a
        >
      </div>
      <div class="footer__links">
        <div>
          <p class="footer__label">Kontakt</p>
          <a href="mailto:jan.navratil05@gmail.com">jan.navratil05@gmail.com</a>
        </div>
        <div>
          <p class="footer__label">Sledujte nás</p>
          <div class="footer__social"><span>Instagram</span><span>Facebook</span></div>
        </div>
        <div>
          <p class="footer__label">Navigace</p>
          <RouterLink :to="{ path: '/', hash: '#produkty' }">Produkty</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#o-projektu' }">O projektu</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#faq' }">FAQ</RouterLink>
        </div>
      </div>
      <div class="footer__bottom">
        <RouterLink class="brand" to="/"
          ><img :src="logoIcon" alt="" /><span>navraprint</span></RouterLink
        >
        <p>3D tisk s nápadem · Česko</p>
        <p>
          <a href="/obchodni-podminky">Obchodní podmínky</a> ·
          <a href="/ochrana-udaju">Ochrana údajů</a>
        </p>
        <p>© {{ new Date().getFullYear() }} NavraPrint</p>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  position: relative;
  overflow: hidden;
  padding: 91px 0 27px;
  background: var(--background);
  color: var(--text);
}
.footer::before,
.footer::after {
  position: absolute;
  content: '';
  border-radius: 50%;
  filter: blur(4px);
}
.footer::before {
  right: -12rem;
  top: -17rem;
  width: 40rem;
  height: 40rem;
  background: radial-gradient(circle, #8b5cf642, transparent 68%);
}
.footer::after {
  left: 26%;
  bottom: -24rem;
  width: 38rem;
  height: 38rem;
  background: radial-gradient(circle, #38bdf81f, transparent 70%);
}
.footer .container {
  position: relative;
}
.footer__cta h2 {
  margin: 15px 0 27px;
  font-size: clamp(2.8rem, 6vw, 5rem);
  line-height: 1;
  letter-spacing: -0.08em;
}
.footer__cta h2 em {
  font-style: normal;
  color: var(--secondary);
}
.footer .eyebrow {
  color: var(--muted);
}
.footer .eyebrow::before {
  background: var(--primary);
}
.footer .button {
  border-color: var(--primary);
}
.footer__links {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 36px;
  margin-top: 78px;
}
.footer__links > div {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 9px;
}
.footer__label {
  margin: 0 0 5px;
  color: var(--muted);
  font-family: ui-monospace, 'Cascadia Code', monospace;
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.footer__links a,
.footer__social span {
  color: var(--text);
  font-size: 0.86rem;
  font-weight: 700;
}
.footer__links a:hover {
  color: var(--secondary);
}
.footer__social {
  display: flex;
  gap: 14px;
  color: var(--muted);
}
.footer__social span {
  color: var(--muted);
}
.footer__bottom {
  display: grid;
  grid-template-columns: 1.2fr 1fr auto auto;
  align-items: end;
  margin-top: 100px;
  padding-top: 20px;
  border-top: 1px solid #ffffff17;
  color: var(--muted);
  font:
    0.68rem 'DM Mono',
    monospace;
}
.footer__bottom p {
  margin: 0;
}
.footer__bottom p:last-child {
  text-align: right;
}
.brand {
  display: flex;
  align-items: center;
  gap: 9px;
  font-family: 'Manrope', Arial, sans-serif;
  color: var(--text);
  font-size: 1.06rem;
  font-weight: 800;
  letter-spacing: -0.055em;
}
.brand img {
  width: 31px;
  height: 31px;
  object-fit: contain;
}
@media (max-width: 600px) {
  .footer {
    padding-top: 70px;
  }
  .footer__bottom {
    grid-template-columns: 1fr;
    gap: 14px;
    margin-top: 69px;
  }
  .footer__links {
    grid-template-columns: 1fr;
    gap: 26px;
    margin-top: 55px;
  }
  .footer__bottom p:last-child {
    text-align: left;
  }
}
</style>
