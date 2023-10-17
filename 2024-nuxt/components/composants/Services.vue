<script setup>
import BasicCards from "../card_basic.vue";
import titlesSections from "../titles_section.vue";

defineProps({
  tag: [],
  title: [],
  cards: [],
});
</script>

<template>
  <div class="e-bloc">
    <!--Titres-->
    <titlesSections
      class="e-bloc__titles"
      :contentTitle="title"
      :contentP="tag"
    />
    <!--Cards-->
    <div class="e-bloc__cards">
      <div v-for="(i, index) in cards">
        <BasicCards
          :content="i.cards_title"
          :text="i.cards_text"
          :variantIcon="i.cards_icon"
          couleurIcon="orange_clair"
          :variantCard="index === 1 ? 'ombre' : 'bordure'"
        />
      </div>
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
