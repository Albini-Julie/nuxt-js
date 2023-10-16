<script setup>
//import des éléments utiles au codage
import Title from "../../scss/components/elements/e_title.vue";
import Icon from "../../scss/components/elements/bouton_fleche.vue";

defineProps({
  content: [],
  src: String,
});
</script>

<template>
  <div class="e-header">
    <!--logo-->
    <img class="e-header__image" :src="src" alt="logo du site web" />
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
    padding-left: rem(33);
    border-left: solid 1px $gray;
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
