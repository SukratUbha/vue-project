<script setup lang="js">
import { RouterLink, RouterView } from 'vue-router'
import { useProductStore } from './store/ProductStore';
import { useCartStore } from './store/cartStore';
import CartItems from './components/CartItems.vue';
const ProductStore = useProductStore();
const CartStore = useCartStore();
ProductStore.set_products();
ProductStore.set_discount_products();
</script>


<template>
  <header>
    <div class="wrapper">
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav> -->
      <div class="header">
        <CartItems />
      </div>
    </div>
  </header>
  <div class="w-full">
    <RouterView />
  </div>
</template>

<style>
html,#app{
  display: contents;
  margin:0;
  width:100%;
}
body{
  display: flow-root;
  place-items: flex-start;
}
.header{
  height:100px
}
</style>