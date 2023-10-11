<script setup>
//import des éléments utiles au codage
import { computed } from 'vue'

//Création des propriété de l'élément
const props = defineProps({
  title: String,
  content: String
})

//Création d'une constante className qui return un nom de classe en fonction de la valeur de la propriété title
const className = computed(() => ({
  h1: props.title === 'h1',
  h2: props.title === 'h2',
  h3: props.title === 'h3',
  h4: props.title === 'h4',
  h5: props.title === 'h5'
}))
</script>

<template>
  <!--Mise en place de l'élément : si la propriété title est égale à h1 affiche une balise h1 etc
  Modification de la classe en appelant className-->
  <div>
    <h1 v-if="title === 'h1'" :class="className">{{ content }}</h1>
    <h2 v-else-if="title === 'h2'" :class="className">{{ content }}</h2>
    <h3 v-else-if="title === 'h3'" :class="className">{{ content }}</h3>
    <h4 v-else-if="title === 'h4'" :class="className">{{ content }}</h4>
    <h5 v-else :class="className">{{ content }}</h5>
  </div>
</template>

<style lang="scss" scoped>
.h1 {
  font-size: $giant-font-size;
  font-family: $primary-font-familly;
  font-weight: 700;
}

.h2 {
  font-size: $bigger-font-size;
  font-family: $primary-font-familly;
  font-weight: 700;
}

.h3 {
  font-size: $big-font-size;
  font-family: $primary-font-familly;
  font-weight: 700;
}

.h4 {
  font-size: $medium-font-size;
  font-family: $primary-font-familly;
  font-weight: 700;
}

.h5 {
  font-size: $regular-font-size;
  font-family: $primary-font-familly;
  font-weight: 700;
}
</style>
