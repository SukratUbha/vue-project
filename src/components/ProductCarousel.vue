<template>
  <section class="swiper cy" v-if="product_list.length>0">
    <swiper-container
      class="h-full swipper-wrapper" effect="coverflow" loop="true" pagination="true" looped-slides=5 grab-cursor="true" centered-slides="true"
      slides-per-view="auto" coverflow-effect-rotate="8" coverflow-effect-stretch="0" coverflow-effect-depth="300"
      coverflow-effect-modifier="1" navigation="true" autoplay-delay="3000" autoplay-disable-on-interaction="true"
    >
      <swiper-slide class="slide" v-for="(product, index) in product_list" :key="index">
        <ProductCard :product_card_item="product" />
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<script setup lang="ts">
import '@splidejs/vue-splide/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/element/css/autoplay'
import ProductCard from './ProductCard.vue';
import type { product_type } from '../store/ProductStore';

const props = defineProps<{
  product_list: product_type[]
}>();
</script>



<style>
swiper-container {
  width: 100%;
}

swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 350px;
}

swiper-slide img {
  display: block;
  width: 100%;
}

.swiper {
  height: 400px;
}
</style>

