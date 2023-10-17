<script setup>
//import des éléments utiles au codage
import { computed } from "vue";
import Title from "../components/elements/e_title.vue";
import Icon from "../components/elements/Bouton_fleche.vue";

//Création des propriétés de l'éléments
const props = defineProps({
  text: String,
  content: String,
  couleurIcon: String,
  sizeIcon: String,
  variantIcon: String,
  variantCard: String,
});

//Création d'une constante className qui va retourner un nom de class différent selon la valeur de la propriété variantCard
const className = computed(() => ({
  " -bordure": props.variantCard === "bordure",
  " -ombre": props.variantCard === "ombre",
}));
</script>

<template>
  <!--Mise en place de l'élément 
  - :class="className va prendre la valeur retournée par className et affecter la class en conséquence"
  - :couleur=couleurIcon signifie que couleur va prendre la valeur de couleurIcon donnée lors de l'appel de l'élément
  - size="sizeIcon" size va prendre la valeur big pour gérer la taille de l'icon
  - :icon="variantIcon icon va prendre la valeur de variant icon pour afficher l'icon souhaité"
  - title="h4" title va prendre la valeur h4 pour que titre s'affiche avec la bonne class et la bonne balise de h4
  - :content="content" content prend la valeur de content pour indiquer au titre ce qu'il doit afficher
  - {{ text }} le p prend la valeur de la propriété text-->
  <div class="bloc" :class="className">
    <Icon :couleur="couleurIcon" size="big" :icon="variantIcon" />
    <h4><PrismicRichText :field="content" /></h4>
    <PrismicRichText :field="text" />
  </div>
</template>

<style lang="scss" scoped>
.bloc {
  align-items: center;
  background-color: $white;
  border-radius: rem(35);
  display: flex;
  flex-direction: column;
  gap: rem(42);
  justify-content: center;
  max-width: rem(350);
  padding: rem(103) rem(52);
  text-align: center;
  width: fit-content;

  h4 {
    font-size: $medium-font-size;
    font-family: $primary-font-familly;
    font-weight: 700;
  }

  &.-bordure {
    border: solid 1px $gray;
  }

  &.-ombre {
    box-shadow: 0px 20px 40px 0px $gray;
  }
}
</style>
