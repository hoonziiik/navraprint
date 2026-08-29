<script setup lang="ts">
import { ref } from 'vue'
const active = ref<number | null>(0)
const questions = [
  [
    'Kdy bude nabídka dostupná?',
    'První produkty právě dokončujeme. Novinky a dostupnost budeme postupně zveřejňovat zde na webu.',
  ],
  [
    'Kde si mohu výrobky objednat?',
    'Objednávkovou stránku připravujeme. Do té doby nám můžete napsat a my vám dáme vědět, jakmile bude spuštěná.',
  ],
  [
    'Jak dlouho trvá doručení?',
    'Produkty vyrábíme v malých sériích. Konkrétní dobu expedice vždy uvedeme přímo u daného výrobku.',
  ],
  [
    'Z jakých materiálů vyrábíte?',
    'Používáme pečlivě vybrané materiály pro 3D tisk, zejména PLA a PETG. Vždy volíme takový, který se pro daný výrobek hodí nejlépe.',
  ],
]
</script>
<template>
  <section id="faq" class="faq container">
    <div class="section-heading">
      <span class="eyebrow">Nejčastější otázky</span>
      <h2>Co vás může zajímat.</h2>
      <p>Nenašli jste odpověď? Napište nám — rádi vám poradíme.</p>
    </div>
    <div class="faq__list">
      <article
        v-for="(item, index) in questions"
        :key="item[0]"
        :class="{ 'faq__item--open': active === index }"
        class="faq__item"
      >
        <button
          type="button"
          :aria-expanded="active === index"
          @click="active = active === index ? null : index"
        >
          <span>{{ item[0] }}</span
          ><b>+</b>
        </button>
        <p v-if="active === index">{{ item[1] }}</p>
      </article>
    </div>
  </section>
</template>
<style scoped>
.faq {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 100px;
  padding: 121px 0;
}
.faq__list {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: color-mix(in srgb, var(--surface) 82%, transparent);
  box-shadow: inset 0 1px color-mix(in srgb, var(--text) 8%, transparent);
  backdrop-filter: blur(18px);
}
.faq__item {
  border-bottom: 1px solid var(--border);
}
.faq__item button {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: 0;
  padding: 22px 24px;
  background: transparent;
  color: var(--text);
  text-align: left;
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
}
.faq__item button b {
  color: var(--secondary);
  font-size: 1.4rem;
  font-weight: 400;
  transition: transform 0.2s;
}
.faq__item--open button b {
  transform: rotate(45deg);
}
.faq__item p {
  max-width: 490px;
  margin: 0;
  padding: 0 54px 22px 24px;
  color: var(--muted);
  font-size: 0.87rem;
  line-height: 1.7;
}
@media (max-width: 760px) {
  .faq {
    grid-template-columns: 1fr;
    gap: 39px;
    padding: 77px 0;
  }
}
</style>
