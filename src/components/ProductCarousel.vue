<template>
  <section id="image-carousel" class="splide w-full h-full" aria-label="Beautiful Images">
    <Splide :options="{ rewind: false, type: 'loop', perPage : 2, autoplay: true }" aria-label="Vue Splide Example">
      <SplideSlide v-for="(product, index) in product_list" :key="index">
        <ProductCard :product_card_items="product" />
      </SplideSlide>
    </Splide>
    <div>helo</div>
  </section>
</template>

<script setup lang="ts">
import '@splidejs/vue-splide/css';

import { defineProps } from 'vue';
import { useProductStore } from '@/store/ProductStore';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import ProductCard from './ProductCard.vue';

const product_list = defineProps(['product_list']);
const ProductStore = useProductStore()

</script>


<style>

</style>
