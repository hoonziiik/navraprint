<script setup lang="ts">
import { products } from '../data/products'
import ProductCard from '../components/ProductCard.vue'
</script>

<template>
  <main class="products-view container">
    <div class="section-heading">
      <span class="eyebrow">Katalog</span>
      <h1>Všechny produkty.</h1>
      <p>Originální 3D výrobky, navržené a vyrobené v Česku.</p>
    </div>
    <div class="product-grid">
      <ProductCard v-for="product in products" :key="product.slug" :product="product" />
    </div>
  </main>
</template>

<style scoped>
.products-view {
  width: min(1320px, calc(100% - 48px));
  min-height: 100vh;
  padding: 160px 0 120px;
}
.products-view h1 {
  margin: 15px 0 12px;
  font-size: clamp(2.7rem, 5vw, 4.6rem);
  letter-spacing: -0.075em;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 52px;
}
@media (max-width: 760px) {
  .products-view {
    width: min(100% - 32px, 1320px);
    padding-top: 118px;
  }
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
