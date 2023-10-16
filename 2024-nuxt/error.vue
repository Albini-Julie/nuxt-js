<script setup>
import Title from "./components/elements/e_title.vue";

const props = defineProps({
  error: Object,
});
</script>

<template>
  <div class="p-error">
    <Header />
    <Title
      class="p-error__title"
      title="h3"
      content="Erreur : page introuvable"
    />
  </div>
  <Footer />
</template>

<style lang="scss">
.p-error {
  padding: rem(0) rem(176);
  &__title {
    display: flex;
    justify-content: center;
    color: $primary-color;
    padding: rem(200);
  }
}
</style>
