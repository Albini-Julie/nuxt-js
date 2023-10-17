<script setup>
//Import des éléments utiles au codage
import Bouton from './elements/e-Bouton.vue'
import Title from './elements/e_title.vue'
import icon_etoile from '../components/icons/icons-elements/icon_etoile_orange.vue'

//définition des propriété des l'élément
defineProps({
  image: String,
  description: String,
  content: String,
  note: String,
  prix: String,
  href: String
})
</script>

<template>
  <!--Mise en place de l'élément
  - :src="image" src prend la valeur de image pour indiquer le lien vers l'image à afficher
  - :alt="description alt prend la valeur de description pour décrire l'image
  - title="h4" title prend la valeur h4 pour indiquer que la balise et la class à utiliser doivent correspondre à un h4"
  - :content="content" content prend la valeur de content pour indiquer le texte à afficher par le titre
  - {{ note }} le p affiche la valeur contenue dans note
  - {{ prix }} le p affiche la valeur contenue dans prix-->
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
