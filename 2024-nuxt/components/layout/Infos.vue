<script setup>
//import des éléments utiles au codage
import CardInfos from "../card_infos.vue";

const props = defineProps({
  cards: [],
});
</script>

<template>
  <div class="bloc">
    <!--Cards-->
    <div v-for="(i, index) in cards">
      <CardInfos
        v-if="index === 0"
        :icon="i.infos_incon"
        variant="rounded-gauche"
        :contentTitle="i.infos_titre"
        :contentDescription="i.infos_text"
      />
      <CardInfos
        v-if="index === 1"
        :icon="i.infos_incon"
        variant="default"
        :contentTitle="i.infos_titre"
        :contentDescription="i.infos_text"
      />
      <CardInfos
        v-if="index === 2"
        :icon="i.infos_incon"
        variant="rounded-droite"
        :contentTitle="i.infos_titre"
        :contentDescription="i.infos_text"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bloc {
  display: flex;
}
</style>
