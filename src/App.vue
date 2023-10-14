<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useProductStore } from './store/ProductStore';
const ProductStore = useProductStore();
ProductStore.set_products();
ProductStore.set_discount_products();
</script>


<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

