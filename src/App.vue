<script setup lang="js">
import { RouterLink, RouterView } from 'vue-router'
import { useProductStore } from './store/ProductStore';
const ProductStore = useProductStore();
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
        Header
      </div>
    </div>
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
.header{
  height:100px
}
</style>