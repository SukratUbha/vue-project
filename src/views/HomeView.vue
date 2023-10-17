<script setup>
import ProductCarousel from '../components/ProductCarousel.vue'
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '@/store/ProductStore';
const ProductStore = useProductStore()
</script>

<template>
  <main>
    <ProductCarousel :product_list="ProductStore.discount_products" />
  </main>
</template>