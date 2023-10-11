<script setup>
import Title from '../components/elements/e_title.vue'

defineProps({
  contentTitle: String,
  contentP: String
})
</script>

<template>
  <div class="e-bloc">
    <p class="e-bloc__text">{{ contentP }}</p>
    <Title title="h3" :content="contentTitle" />
  </div>
</template>

<style lang="scss" scoped>
.e-bloc {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__text {
    font-weight: 500;
    color: $primary-color;
  }
}
</style>
