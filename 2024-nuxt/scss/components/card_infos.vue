<script setup>
//import des éléments utiles au codage
import { computed } from "vue";
import Icon from "../components/elements/bouton_fleche.vue";
import Title from "../components/elements/e_title.vue";

//Création des propriétés de l'élément
const props = defineProps({
  icon: String,
  contentTitle: String,
  contentDescription: String,
  variant: String,
});

//Création d'une constante className qui va retourner un nom de class différent selon la valeur de la propriété variant
const className = computed(() => ({
  "-rounded-gauche": props.variant === "rounded-gauche",
  "-rounded-droite": props.variant === "rounded-droite",
}));

//Création d'une constante className2 qui va retourner un nom de class seulement si vairant prend certaines valeurs
const className2 = computed(() => ({
  "--noborder":
    props.variant === "rounded-gauche" || props.variant === "rounded-droite",
}));
</script>

<template>
  <!--Mise en place de l'élément
  - :class="className" va prendre la valeur de className pour donner ses class à l'élément
  - :class="className2" va prendre la valeur de className2 pour donner ses class à l'élément
  - size="small" size prend la valeur small pour indiquer la taille de l'icon
  - couleur="orange" couleur prend la valeur orange pour donner sa taille à l'icon
  - :icon="icon" icon prend la valeur de icon pour indiquer l'icon sélectionné
  - titre="h5" titre prend la valeur h5 pour dire que la balise et la class utilisés doivent correspondrent à un h5
  - :content="contentTitle" content prend la valeur de contentTitle pour indiquer le texte à afficher
  - {{ contentDescription }} le p affiche la valeur contenue dans contentDescription-->
  <div class="e-bloc" :class="className">
    <div class="e-bloc__donnees" :class="className2">
      <Icon size="small" couleur="orange" :icon="icon" />
      <Title class="e-bloc__title" title="h5" :content="contentTitle" />
      <p class="e-bloc__text">{{ contentDescription }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.e-bloc {
  align-items: center;
  background-color: $white;
  box-shadow: 0px 5px 20px -2px $light-gray, 0px -5px 20px -2px $light-gray;
  display: flex;
  flex-direction: column;
  padding-top: rem(28);
  padding-bottom: rem(28);
  flex: 1;

  &.-rounded-gauche {
    border-top-left-radius: rem(50);
    border-bottom-left-radius: rem(50);
    box-shadow: 0px 0px 20px $light-gray, 0px 0px 20px $light-gray;
  }

  &.-rounded-droite {
    border-top-right-radius: rem(50);
    border-bottom-right-radius: rem(50);
    box-shadow: 0px 2px 20px $light-gray, 0px 0px 20px $light-gray;
  }

  &__donnees {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: rem(12);
    //border-left: solid 2px $gray;
    //border-right: solid 2px $black;
    padding-left: rem(134);
    padding-right: rem(134);

    &.--noborder {
      border: none;
    }
  }

  &__text {
    font-size: rem(13);
    font-family: $primary-font-familly;
  }

  &__title {
    text-align: center;
  }
}
</style>
