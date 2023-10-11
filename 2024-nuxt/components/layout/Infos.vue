<script setup>
//import des éléments utiles au codage
import CardInfos from '../../scss/components/card_infos.vue'
</script>

<template>
  <div class="bloc">
    <!--Cards-->
    <CardInfos
      icon="horloge"
      variant="rounded-gauche"
      contentTitle="Today 10:00am - 10:00pm"
      contentDescription="Working time"
    />
    <CardInfos
      icon="localisation"
      variant="default"
      contentTitle="Washington, D.C., DC,USA"
      contentDescription="Our Location"
    />
    <CardInfos
      icon="telephone"
      variant="rounded-droite"
      contentTitle="+0123 456 7891"
      contentDescription="Phone Number"
    />
  </div>
</template>

<style lang="scss" scoped>
.bloc {
  display: flex;
}
</style>
