<script setup>
import { onMounted } from "vue";
const store = useGlobalStore();

onMounted(() => {
  const cart = localStorage.getItem("cart");
  store.SetCart(JSON.parse(cart));
});
</script>

<template>
  <div>
    <NuxtLayout />
  </div>
</template>
