<script setup>
import ProductCarousel from '../components/ProductCarousel.vue'
import { useProductStore } from '@/store/ProductStore';
import { storeToRefs } from 'pinia';
const ProductStore = useProductStore()
const { getDiscountItems } = storeToRefs(ProductStore)
</script>

<template>
  <main>
    <div class="container w-2/3">
      <ProductCarousel :product_list="getDiscountItems" />
    </div>
  </main>
</template>
