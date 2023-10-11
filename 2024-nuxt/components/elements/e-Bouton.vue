<script setup>
//import des éléments utiles au codage
import { computed } from 'vue'
import IconFleche from '../elements/Bouton_fleche.vue'

//Création des propriétés de l'élément
const props = defineProps({
  content: String,
  href: String,
  size: String,
  variant: String,
  icon: Boolean
})

//Création d'une constante className qui va retourner un nom de classe différent selon la valeur des propriétés variant, size et icon
const className = computed(
  () =>
    `button 
  ${props.variant === 'rounded' ? '-rounded' : ''} 
  ${props.size === 'small' ? '-small' : ''} 
  ${props.icon ? '-icon' : ''}`
)

/*const className = computed(() => ({
  ' -rounded': props.variant === 'rounded',
  ' -small': props.size === 'small'
}))*/
</script>

<template>
  <!--Mise en place de l'élément :
  - v-if="href" vérifie si un lien a été donné
  - :href="contient le potentiel lien entré"
  - :class="className" renvoie une class différente selon ce que renvoie className
  - v-if="icon" vérifie si la propriété icon est à true
  - size="small" indique que la propriété size prend la valeur "small"
  - icon="fleche" indique la propriété icon prend la valeur "fleche" (l'icon sélectionné est fleche)
  - couleur="white" signifie que la valeur de la propriété couleur est "white" -->
  <a v-if="href" class="button" :href="href" :class="className">
    <slot></slot><IconFleche v-if="icon" size="small" icon="fleche" couleur="white" />
  </a>
  <button v-else class="button" :class="className">
    <slot></slot><IconFleche v-if="icon" size="small" icon="fleche" couleur="white" />
  </button>
</template>

<style lang="scss" scoped>
.button {
  align-items: center;
  background-color: $primary-color;
  background: linear-gradient(180deg, $secondary-color -50%, $primary-color 70%);
  border: none;
  border-radius: rem(15);
  box-shadow: 0px rem(4) rem(4) rgba(0, 0, 0, 0.25);
  color: $white;
  font-size: $medium-font-size;
  font-family: $primary-font-familly;
  font-weight: 600;
  gap: 10px;
  justify-content: center;
  padding: rem(33) rem(67);
  display: inline-block;
  text-decoration: none;

  &.-rounded {
    background: $primary-color;
    border-radius: rem(37);
    font-weight: 500;
    padding: rem(26) rem(64);
  }

  &.-small {
    background: $primary-color;
    font-size: $regular-font-size;
    font-weight: 400;
    padding: rem(14) rem(29);
  }

  &.-icon {
    display: flex;
    align-items: center;
    gap: rem(27);
    background: $primary-color;
    border-radius: rem(37);
    font-weight: 400;
    padding: rem(11) rem(8);
    font-size: $regular-font-size;
  }
}

.e-button__icon {
  width: 50%;
}
</style>
