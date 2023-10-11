<script setup>
//Import des éléments utiles au codage
import Bouton from "../elements/e-Bouton.vue";
import Titre from "../elements/e_title";
import icon_etoile from "../icons/icons-elements/icon_etoile_orange";

//définition des propriété des l'élément
defineProps({
  image: String,
  description: String,
  content: String,
  note: String,
  prix: String,
  href: String,
});
</script>

<template>
  <div class="e-card">
    <img class="e-card__image" :src="image" :alt="description" />
    <div class="e-card__infos">
      <div class="e-card__intro">
        <Title title="h4" :content="content" />
        <div class="e-card__intro --note">
          <icon_etoile />
          <p>{{ note }}</p>
        </div>
      </div>
      <div class="e-card__intro">
        <RouterLink :to="href">
          <Bouton class="button -small -rounded">Add To Cart</Bouton>
        </RouterLink>
        <p>${{ prix }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.e-card {
  border-radius: rem(35);
  box-shadow: 0px 2px 30px $gray;
  max-width: rem(485);
  overflow: hidden;

  &__image {
    width: 100%;
  }

  &__infos {
    display: flex;
    flex-direction: column;
    gap: rem(16);
    padding-right: rem(32);
    padding-left: rem(32);
    padding-bottom: rem(44);
    padding-top: rem(16);
  }

  &__intro {
    align-items: center;
    display: flex;
    justify-content: space-between;

    &.--note {
      align-items: center;
      display: flex;
      gap: rem(10);
    }
  }
}

p {
  font-weight: 500;
}
</style>
