<script setup>
//import des éléments utiles au codage
import { onMounted, ref, computed } from 'vue'
import GrandCards from '../../scss/components/GrandCard.vue'
import Bouton from '../../scss/components/elements/e-Bouton.vue'
import TitlesSections from '../../scss/components/titles_section.vue'
import { client } from '@/utils/axios'

const recipes = ref([])

const getRecipes = async () => {
  const response = await client.get('/recipes')
  return response.data
}

const gridPage = ref(1)

const jpgRecipes = computed(() => {
  return recipes.value.filter((recipe) => recipe.image_url.includes('jpg'))
})

const gridRecipes = computed(() => {
  const recipesByPage = 6
  return jpgRecipes.value.slice(0, gridPage.value * recipesByPage)
})

const moreRecipesToShow = computed(() => {
  return gridRecipes.value.length < jpgRecipes.value.length
})

const seeMoreRecipe = () => {
  gridPage.value++
}

onMounted(async () => {
  recipes.value = await getRecipes()
})
</script>

<template>
  <div class="e-bloc">
    <!--Titles-->
    <TitlesSections contentTitle="Most Popular Items" contentP="Product" />
    <!--Cards-->
    <div class="e-bloc__cards">
      <GrandCards
        v-for="recipe in gridRecipes"
        :key="recipe.recipe_id"
        :image="'src/assets/' + recipe.image_url"
        :description="recipe.recipe_description"
        :content="recipe.recipe_name"
        :note="recipe.rating"
        :prix="recipe.price"
        :href="`/recipes/${recipe.recipe_id}`"
      />
    </div>
    <!--Boutons-->
    <div class="e-bloc__bouton">
      <Bouton
        v-if="moreRecipesToShow"
        @click="seeMoreRecipe"
        size="regular"
        variant="rounded"
        icon="true"
      >
        See More Product</Bouton
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.e-bloc {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__bouton {
    margin-top: rem(57);
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    gap: rem(50);
    margin-top: rem(57);
  }

  &__text {
    font-weight: 500;
    color: $primary-color;
  }
}
</style>
