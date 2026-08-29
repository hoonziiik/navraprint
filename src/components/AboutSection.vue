<script setup lang="ts">
const highlights = [
  ['Navržené u nás', 'Produkty vznikají od první skici až po poslední kontrolu v Česku.'],
  ['Malé série', 'Tiskneme v menších sériích, abychom si pohlídali kvalitu každého kusu.'],
  ['Barvy na výběr', 'U vybraných produktů si budete moci zvolit variantu, která vám sedne.'],
]
</script>

<template>
  <section id="o-projektu" class="about">
    <div class="container">
      <div class="about__intro">
        <div class="section-heading">
          <span class="eyebrow">O NavraPrint</span>
          <h2>Malý český projekt pro velké každodenní maličkosti.</h2>
        </div>
        <p>
          Tvoříme produkty, které dávají smysl doma i na pracovním stole. Každý nejdřív sami
          vyzkoušíme a až potom jej pustíme do světa.
        </p>
      </div>
      <div class="about__grid">
        <article v-for="highlight in highlights" :key="highlight[0]">
          <span>✦</span>
          <h3>{{ highlight[0] }}</h3>
          <p>{{ highlight[1] }}</p>
        </article>
      </div>
      <div class="about__custom">
        <span>Máte vlastní model nebo nápad?</span>
        <a href="mailto:jan.navratil05@gmail.com"
          >Ozvěte se a podíváme se, co půjde vytisknout. <b>→</b></a
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 110px 0;
  background: var(--surface);
}
.about__intro {
  display: flex;
  justify-content: space-between;
  gap: 48px;
}
.about__intro > p {
  max-width: 350px;
  margin: 25px 0 0;
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.7;
}
.about__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 55px;
}
.about__grid article {
  padding: 28px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: color-mix(in srgb, var(--background) 34%, var(--surface));
  box-shadow: inset 0 1px color-mix(in srgb, var(--text) 8%, transparent);
}
.about__grid span {
  color: var(--secondary);
}
.about__grid h3 {
  margin: 20px 0 10px;
  font-size: 1.1rem;
  letter-spacing: -0.04em;
}
.about__grid p {
  margin: 0;
  color: var(--muted);
  font-size: 0.87rem;
  line-height: 1.65;
}
.about__custom {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 18px;
  padding: 22px 27px;
  border: 1px solid #8b5cf64d;
  border-radius: 12px;
  background: #8b5cf612;
  color: var(--muted);
  font-size: 0.85rem;
}
.about__custom a {
  color: var(--text);
  font-weight: 700;
}
.about__custom b {
  color: var(--secondary);
}
@media (max-width: 760px) {
  .about {
    padding: 75px 0;
  }
  .about__intro {
    display: block;
  }
  .about__grid {
    grid-template-columns: 1fr;
    margin-top: 38px;
  }
  .about__custom {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
