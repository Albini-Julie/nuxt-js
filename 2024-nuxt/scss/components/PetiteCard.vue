<script setup>
//import des éléments utiles au codage
import Title from './elements/e_title.vue'
import Bouton from './elements/bouton_fleche.vue'

//Définition des propriétés de l"élément
defineProps({
  image: String,
  description: String,
  content: String,
  text: String,
  prix: String
})
</script>

<template>
  <!--Mise en place de l'élément
  - :src="image" src prend la valeur de image pour indiquer le lien vers l'image à afficher
  - :alt="description alt prend la valeur de description pour indiquer la description relative à l'image
  - title="h4" title prend la valeur h4 pour indiquer que la balise et la class à utiliser doivent être celles de h4
  - :content="content" content prend la valeur de content pour indiquer le texte que title doit afficher
  - {{ text }} le p affiche le contenu de text
  - {{ prix }} le p affiche le contenu de prix
  - size="small" size prend la valeur de small pour indiquer que la taille du bouton doit être small
  - couleur="black" couleur prend la valeur black pour indiquer que la couleur de fond de l'icon doit être black
  - icon="fleche_suivant" icon prend la valeur fleche_suivant pour indiquer que l'icon à afficher est fleche_suivant-->
  <div class="e-card">
    <div class="e-card__fond"></div>
    <img class="e-card__image" :src="image" :alt="description" />
    <Title class="e-card__titre" title="h4" :content="content" />
    <p class="e-card__text">{{ text }}</p>
    <p class="e-card__text"><span class="e--card__text --span">$</span>{{ prix }}</p>
    <div class="e-card__boutons">
      <Bouton size="small" couleur="black" icon="fleche_suivant" />
      <Bouton size="small" couleur="white" icon="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.e-card {
  position: relative;
  max-width: rem(258);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: rem(11);

  &__fond {
    z-index: 0;
    position: absolute;
    background-color: $white;
    box-shadow: 0px 0px 31px $gray;
    border-radius: rem(30);
    width: rem(258);
    height: rem(275);
    margin-top: 100px;
  }
  &__boutons {
    z-index: 50;
    align-items: center;
    display: flex;
    gap: rem(36);
  }

  &__image {
    z-index: 50;
    min-width: 270px;
    min-height: 240px;
  }

  &__titre {
    z-index: 50;
  }

  &__text {
    z-index: 50;

    &.--span {
      color: #ee140a;
    }
  }
}
</style>
