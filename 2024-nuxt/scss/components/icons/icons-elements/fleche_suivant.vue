<script setup>
defineProps({
  couleurF: String
})
</script>

<template>
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=""
    preserveAspectRatio="none"
  >
    <path
      d="M1.58331 8H14.4166"
      :stroke="couleurF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M8 1.58334L14.4167 8.00001L8 14.4167"
      :stroke="couleurF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</template>
