<script setup>
import ProductCarousel from '../components/ProductCarousel.vue'
import { useProductStore } from '@/store/ProductStore';
import { storeToRefs } from 'pinia';
const ProductStore = useProductStore()
const { getDiscountItems } = storeToRefs(ProductStore)
</script>

<template>
  <main>
    <ProductCarousel :product_list="getDiscountItems" />
  </main>
</template>