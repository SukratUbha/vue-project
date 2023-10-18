<template>
  <section id="image-carousel" class="splide w-full h-full" aria-label="Beautiful Images" v-if="product_list.length > 0">
    <Splide :options="{ rewind: false, type: 'loop', perPage : 2, autoplay: true }" aria-label="Vue Splide Example">
      <SplideSlide v-for="(product,index) in product_list" :key="index">
        <ProductCard :product_card_item="product"/>
      </SplideSlide>
    </Splide>
    <div>helo</div> 
  </section>
</template>

<script setup lang="ts">
import '@splidejs/vue-splide/css';
import { defineProps } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import ProductCard from './ProductCard.vue';
import type { product_type } from '../store/ProductStore';

const props = defineProps<{
  product_list: product_type[]
}>();
</script>

<style>

</style>
