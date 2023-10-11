<script setup>
import fleche from './icons-elements/fleche_orange.vue'

defineProps({
  couleurF: String
})
</script>

<template>
  <div class="cercle">
    <fleche :couleurF="couleurF" />
  </div>
</template>

<style lang="scss" scoped>
.cercle {
  align-items: center;
  background-color: $white;
  border-radius: 100%;
  display: flex;
  gap: 27px;
  height: 58px;
  justify-content: center;
  width: 58px;
}
</style>
