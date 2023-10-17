<script setup>
defineProps({
  contentTitle: [],
  contentP: [],
});
</script>

<template>
  <div class="e-bloc">
    <PrismicRichText class="e-bloc__text" :field="contentP" />
    <h3><PrismicRichText :field="contentTitle" /></h3>
  </div>
</template>

<style lang="scss" scoped>
.e-bloc {
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: $big-font-size;
    font-family: $primary-font-familly;
    font-weight: 700;
  }
  &__text {
    font-weight: 500;
    color: $primary-color;
  }
}
</style>
