<script setup>
//import des éléments utiles au codage
import Bouton from "../elements/e-Bouton.vue";

defineProps({
  title: [],
  text: [],
  image: [],
});
</script>

<template>
  <div class="e-bloc">
    <!--Fond noir-->
    <div class="e-bloc__fond"></div>
    <!--Image du burger-->
    <div class="e-bloc__image">
      <img :src="image.url" :alt="image.alt" />
    </div>
    <!--Titre et description-->
    <div class="e-bloc__infos">
      <h3><PrismicRichText class="e-bloc__title" :field="title" /></h3>
      <PrismicRichText class="e-bloc__text" :field="text" />
      <!--Champs d'inscription-->
      <div class="e-bloc__champs">
        <!--input-->
        <input
          class="e-bloc__input"
          type="text"
          placeholder="Type your email....."
        />
        <!--Bouton-->
        <Bouton class="button -small">Suscribe</Bouton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.e-bloc {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  &__image {
    z-index: 50;
  }

  &__fond {
    position: absolute;
    background-color: $black;
    border-radius: rem(50);
    width: rem(1350);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: rem(180);
    z-index: 0;
    padding: rem(90);
  }

  &__infos {
    width: rem(526);
    display: flex;
    flex-direction: column;
    gap: rem(15);
    z-index: 50;
    h3 {
      font-size: $big-font-size;
      font-family: $primary-font-familly;
      font-weight: 700;
    }
  }

  &__text {
    font-weight: 500;
    z-index: 50;
    color: $white;
  }

  &__title {
    color: $white;
    z-index: 50;
  }

  &__champs {
    background-color: $white;
    border-radius: rem(15);
    padding: rem(11);
    gap: rem(166);
  }

  &__input {
    border: none;
    margin-right: rem(166);

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-family: $primary-font-familly;
      font-weight: 500;
      font-size: $regular-font-size;
    }
  }
}
</style>
