<template>
  <!-- <section id="image-carousel" class="splide w-full h-full" aria-label="Beautiful Images" v-if="product_list.length > 0">
    <Splide :options="slide_options" aria-label="Vue Splide Example">
      <SplideSlide v-for="(product,index) in product_list" :key="index">
        <ProductCard :product_card_item="product"/>
      </SplideSlide>
    </Splide>
  </section> -->
  <section class="swiper cy">
    <swiper-container class="h-full" :pagination="true" effect='coverflow' :grab-cursor="true" :centered-slides="true"
      slides-per-view="auto" :coverflow-effect-rotate="50" :coverflow-effect-stretch="0" :coverflow-effect-depth="100"
      :coverflow-effect-modifier="1" :coverflow-effect-slide-shadows="true">
      <swiper-slide v-for="(product, index) in product_list" :key="index">
        <ProductCard :product_card_item="product" />
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<script setup lang="ts">
import '@splidejs/vue-splide/css';
import { defineProps } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import ProductCard from './ProductCard.vue';
import type { product_type } from '../store/ProductStore';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/effect-coverflow'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


const slide_options = {
  rewind: false,
  type: 'loop',
  perPage: 1,
  autoplay: true,
  interval: 3000
}

const props = defineProps<{
  product_list: product_type[]
}>();


</script>

<style>
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

swiper-slide img {
  display: block;
  width: 100%;
}
.swiper{
  height: 600px;
}
</style>
