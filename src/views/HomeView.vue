<script setup>
import ProductCarousel from '../components/ProductCarousel.vue'
import ProductCard from '@/components/ProductCard.vue';
import { useProductStore } from '@/store/ProductStore';
import { storeToRefs } from 'pinia';
const ProductStore = useProductStore()
const { getDiscountItems, getAllItems } = storeToRefs(ProductStore)
</script>

<template>
  <main>
    <div class="div-carousel w-auto">
      <ProductCarousel :product_list="getDiscountItems" />
    </div>
    <div class="div-card">
      <div v-for="(product, index) in getAllItems" :key="index">
        <ProductCard :product_card_item="product" />
      </div>
    </div>
  </main>
</template>


<style>
.div-card{
  display: flex;
  flex-wrap:wrap;
  
}
</style>