<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { products } from '../data/products'

const route = useRoute()
const product = computed(() => products.find((item) => item.slug === route.params.slug))
</script>

<template>
  <main v-if="product" class="detail container">
    <RouterLink class="detail__back" to="/produkty">← Zpět na produkty</RouterLink>
    <div class="detail__grid">
      <div class="detail__visual"><img :src="product.image" :alt="product.name" /></div>
      <article class="detail__copy">
        <span class="eyebrow">{{ product.type }}</span>
        <h1>{{ product.name }}</h1>
        <p class="detail__price">{{ product.price }} Kč</p>
        <p>{{ product.description }}</p>
        <dl>
          <div>
            <dt>Materiál</dt>
            <dd>{{ product.material }}</dd>
          </div>
          <div>
            <dt>Dostupné barvy</dt>
            <dd>{{ product.colors.join(' · ') }}</dd>
          </div>
          <div>
            <dt>Výroba</dt>
            <dd>Vyrobeno v Česku</dd>
          </div>
        </dl>
        <button type="button" class="button" disabled>Objednávky již brzy</button>
      </article>
    </div>
  </main>
  <main v-else class="detail detail--missing container">
    <h1>Produkt jsme nenašli.</h1>
    <RouterLink class="button" to="/produkty">Zpět na produkty</RouterLink>
  </main>
</template>

<style scoped>
.detail {
  min-height: 100vh;
  padding: 142px 0 110px;
}
.detail__back {
  display: inline-block;
  margin-bottom: 36px;
  color: var(--muted);
  font-size: 0.84rem;
  font-weight: 700;
}
.detail__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(42px, 8vw, 130px);
  align-items: center;
}
.detail__visual {
  position: relative;
  min-height: 460px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: radial-gradient(circle at 50% 25%, #8b5cf636, transparent 43%), var(--surface);
}
.detail__visual img {
  width: 100%;
  height: 100%;
  padding: clamp(20px, 4vw, 48px);
  object-fit: contain;
  filter: drop-shadow(0 20px 24px #0000005c);
}
.detail__copy h1 {
  margin: 15px 0 11px;
  font-size: clamp(2.6rem, 5vw, 4.7rem);
  line-height: 1;
  letter-spacing: -0.08em;
}
.detail__copy > p:not(.detail__price) {
  max-width: 490px;
  color: var(--muted);
  line-height: 1.7;
}
.detail__price {
  margin: 0 0 25px;
  color: var(--secondary);
  font-size: 1.2rem;
  font-weight: 700;
}
.detail dl {
  display: grid;
  gap: 15px;
  margin: 35px 0;
}
.detail dl div {
  display: grid;
  grid-template-columns: 150px 1fr;
  padding-bottom: 13px;
  border-bottom: 1px solid var(--border);
}
.detail dt {
  color: var(--muted);
}
.detail dd {
  margin: 0;
  font-weight: 700;
}
.button:disabled {
  opacity: 0.62;
  cursor: not-allowed;
}
@media (max-width: 760px) {
  .detail {
    padding-top: 110px;
  }
  .detail__grid {
    grid-template-columns: 1fr;
    gap: 34px;
  }
  .detail__visual {
    min-height: 360px;
  }
  .detail--missing {
    padding-top: 140px;
  }
}
</style>
