<script setup>
defineProps({
  couleurF: String
})
</script>

<template>
  <svg
    viewBox="0 0 27 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style="position: relative"
    preserveAspectRatio="none"
  >
    <path
      d="M10.5 21C15.7467 21 20 16.5228 20 11C20 5.47715 15.7467 1 10.5 1C5.25329 1 1 5.47715 1 11C1 16.5228 5.25329 21 10.5 21Z"
      :stroke="couleurF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M26 27L18 19"
      :stroke="couleurF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</template>
