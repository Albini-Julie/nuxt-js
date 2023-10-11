<script setup>
defineProps({
  fleche_orange: String
})
</script>

<template>
  <svg
    viewBox="0 0 18 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style="position: relative"
    preserveAspectRatio="none"
  >
    <path
      d="M1.26666 28.5333L16.7333 15L1.26666 1.46667"
      :stroke="fleche_orange"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</template>
