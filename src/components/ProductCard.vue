<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Product } from '../data/products'

defineProps<{ product: Product }>()
</script>

<template>
  <RouterLink class="product-card" :to="`/produkty/${product.slug}`">
    <div class="product-card__visual">
      <img :src="product.image" :alt="product.name" />
    </div>
    <p>{{ product.type }}</p>
    <h3>{{ product.name }}</h3>
    <span class="product-card__link">Zjistit více <b>↗</b></span>
  </RouterLink>
</template>

<style scoped>
.product-card {
  display: flex;
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding-bottom: 3px;
  background: linear-gradient(145deg, #ffffff0b, #ffffff03);
  box-shadow: inset 0 1px #ffffff12;
  transition:
    border-color 0.25s,
    transform 0.25s,
    box-shadow 0.25s;
}

.product-card:hover {
  border-color: #8b5cf688;
  box-shadow:
    0 18px 42px #00000040,
    inset 0 1px #ffffff21;
  transform: translateY(-5px);
}

.product-card__visual {
  display: grid;
  height: clamp(250px, 21vw, 330px);
  place-items: center;
  overflow: hidden;
  border-bottom: 1px solid #ffffff0d;
  background: radial-gradient(circle at 50% 40%, #8b5cf636, transparent 52%), var(--surface);
}

.product-card__visual img {
  width: 100%;
  height: 100%;
  padding: 12px;
  object-fit: contain;
  filter: drop-shadow(0 14px 18px #0000005c);
  transition: transform 0.35s ease;
}

.product-card:hover .product-card__visual img {
  transform: scale(1.045) translateY(-3px);
}

.product-card p {
  margin: 20px 20px 7px;
  color: var(--muted);
  font-family: ui-monospace, 'Cascadia Code', monospace;
  font-size: 0.67rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.product-card h3 {
  margin: 0 20px;
  font-size: 1.08rem;
  letter-spacing: -0.045em;
}

.product-card__link {
  display: inline-block;
  align-self: flex-start;
  margin: 14px 20px 20px;
  color: var(--muted);
  font-size: 0.76rem;
  font-weight: 700;
}

.product-card:hover .product-card__link {
  color: var(--text);
}

.product-card__link b {
  margin-left: 3px;
  color: var(--secondary);
}

@media (max-width: 760px) {
  .product-card__visual {
    height: 280px;
  }
}
</style>
