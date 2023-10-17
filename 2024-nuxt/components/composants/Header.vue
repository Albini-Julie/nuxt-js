<script setup>
//import des éléments utiles au codage
import Icon from "../elements/Bouton_fleche.vue";

import { useGlobalStore } from "@/stores/global";

const store = useGlobalStore();

defineProps({
  content: [],
  src: String,
  alt: String,
});
</script>

<template>
  <div class="e-header">
    <!--logo-->
    <img class="e-header__image" :src="src" :alt="alt" />
    <!--Navigation-->
    <div class="e-header__navigation">
      <div v-for="i in content">
        <a class="e-header__link" :href="i.header_link.url">
          <h5>
            <PrismicRichText :field="i.header_title" />
          </h5>
        </a>
      </div>
    </div>
    <!--Barre de recherches-->
    <div class="e-header__research">
      <Icon couleur="default" icon="loupe" size="small" />
      <input class="e-header__input" type="text" placeholder="Search" />
      <div class="e-header__icon">
        <div class="e-header__data">
          {{ store.cart.length }}
          <div class="e-header__cart">recettes : {{ store.cart }}</div>
        </div>

        <Icon couleur="default" icon="achat" size="small" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.e-header {
  align-items: center;
  display: flex;
  justify-content: space-between;

  &__icon {
    display: flex;
    position: relative;
    gap: rem(1);
    align-items: center;
    padding-left: rem(30);
    border-left: solid 1px $gray;
    z-index: 0;
  }

  &__data {
    position: absolute;
    color: $white;
    background-color: $primary-color;
    padding: rem(2) rem(5);
    border-radius: 100%;
    font-weight: 500;
    display: inline-block;
    font-size: $small-font-size;
    box-shadow: 0px 0px 22px $primary-color;
    top: 0%;
    right: 0%;
    z-index: 50;

    &:hover {
      display: flex;
      padding: rem(5) rem(5);
      border-radius: rem(5);
      gap: rem(5);
      width: max-content;
    }

    &:hover .e-header__cart {
      display: block;
    }
  }

  &__cart {
    display: none;
  }

  &__research {
    align-items: center;
    background-color: $white;
    box-shadow: 0px 0px 17px 0px $gray;
    border-radius: rem(18);
    display: flex;
    justify-content: space-between;
    padding: rem(10) rem(20);
  }
  &__input {
    border: none;
    background-color: none;
    border-radius: none;

    &::placeholder {
      color: $black;
      font-size: $regular-font-size;
      font-family: $primary-font-familly;
      font-weight: 700;
    }

    &:focus {
      outline: none;
    }
  }

  &__link {
    text-decoration: none;
    color: $black;
  }

  &__navigation {
    display: flex;
    justify-content: space-between;
    gap: rem(67);

    h5 {
      font-size: $regular-font-size;
      font-family: $primary-font-familly;
      font-weight: 700;
    }
  }

  &__image {
    width: rem(94);
    height: (56);
  }
}
</style>
