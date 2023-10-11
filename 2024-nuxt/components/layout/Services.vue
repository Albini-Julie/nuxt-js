<script setup>
import BasicCards from '../../scss/components/card_basic.vue'
import titleServices from '../../scss/components/titles_section.vue'
</script>

<template>
  <div class="e-bloc">
    <!--Titres-->
    <titleServices contentTitle="Why Choose Our Favorite Food" contentP="Services" />
    <!--Cards-->
    <div class="e-bloc__cards">
      <BasicCards
        content="Healthy Food"
        text="But I must explain to you how all this
mistaken idea of denouncing pleasur and
prasising pain was bron."
        variantIcon="couverts_croix"
        couleurIcon="orange_clair"
        variantCard="bordure"
      ></BasicCards>
      <BasicCards
        content="Qualityfull Food"
        text="But I must explain to you how all this
mistaken idea of denouncing pleasur and
prasising pain was bron."
        variantIcon="couverts"
        couleurIcon="orange_clair"
        variantCard="ombre"
      ></BasicCards>
      <BasicCards
        content="Fast Delivery"
        text="But I must explain to you how all this
mistaken idea of denouncing pleasur and
prasising pain was bron."
        variantIcon="camion"
        couleurIcon="orange_clair"
        variantCard="bordure"
      ></BasicCards>
    </div>
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

  &__cards {
    display: flex;
    gap: rem(54);
    margin-top: rem(57);
  }
}
</style>
