<script setup lang="js">
import { RouterLink, RouterView } from 'vue-router'
import { useProductStore } from './store/ProductStore';
// import { useScriptTag } from '@vueuse/core'
// useScriptTag('https://playehttps://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.jsr.twitch.tv/js/embed/v1.js')
const ProductStore = useProductStore();
ProductStore.set_products();
ProductStore.set_discount_products();

</script>


<template>
  <header>
    <!-- <div class="wrapper"> -->
      <!-- <nav> -->
        <!-- <RouterLink to="/">Home</RouterLink> -->
      <!-- </nav> -->
    <!-- </div> -->
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
#app{
  display: flow-root;
}
body{
  place-items: flex-start;
}
</style>