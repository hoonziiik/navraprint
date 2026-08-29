<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { products } from '../data/products'
import ProductCard from './ProductCard.vue'
</script>

<template>
  <section id="produkty" class="products container">
    <div class="section-heading">
      <span class="eyebrow">Vybrané produkty</span>
      <h2>Praktické věci s promyšleným detailem.</h2>
      <p>
        Promyšlené doplňky pro domácnost, práci i volný čas. Každý produkt sami navrhujeme,
        testujeme a vyrábíme u nás.
      </p>
    </div>
    <div class="product-grid">
      <ProductCard v-for="product in products" :key="product.slug" :product="product" />
    </div>
    <RouterLink class="products__all" to="/produkty"
      >Zobrazit všechny produkty <span>→</span></RouterLink
    >
  </section>
</template>

<style scoped>
.products {
  padding: 118px 0 125px;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 48px;
}
.products__all {
  display: table;
  margin: 42px auto 0;
  border-bottom: 1px solid var(--text);
  padding-bottom: 4px;
  font-size: 0.86rem;
  font-weight: 700;
}
.products__all span {
  margin-left: 5px;
  color: var(--secondary);
}
@media (max-width: 760px) {
  .products {
    padding: 80px 0;
  }
  .product-grid {
    grid-template-columns: 1fr;
    gap: 38px;
    margin-top: 35px;
  }
}
</style>
