<script setup>
//import des éléments utiles au codage
import { onMounted, ref, computed } from "vue";
import GrandCards from "../GrandCard.vue";
import Bouton from "../elements/e-Bouton.vue";
import TitlesSections from "../titles_section.vue";
//import { client } from "@/utils/axios";

const env = useRuntimeConfig();

const { data: recipes } = await useAsyncData("recipes", async () => {
  return $fetch(env.public.apiUrl + "/recipes");
});

//const recipes = ref([]);

/*const getRecipes = async () => {
  const response = await client.get("/recipes");
  return response.data;
};*/

const gridPage = ref(1);

const jpgRecipes = computed(() => {
  if (!recipes.value) {
    return [];
  }
  return recipes.value.filter((recipe) => recipe.image_url.includes("jpg"));
});

const gridRecipes = computed(() => {
  const recipesByPage = 6;
  return jpgRecipes.value.slice(0, gridPage.value * recipesByPage);
});

const moreRecipesToShow = computed(() => {
  return gridRecipes.value.length < jpgRecipes.value.length;
});

const seeMoreRecipe = () => {
  gridPage.value++;
};

/*onMounted(async () => {
  recipes.value = await getRecipes();
});*/

defineProps({
  tag: [],
  title: [],
  button: [],
});
</script>

<template>
  <div class="e-bloc">
    <!--Titles-->
    <TitlesSections
      class="e-bloc__titles"
      :contentTitle="title"
      :contentP="tag"
    />
    <!--Cards-->
    <div class="e-bloc__cards">
      <GrandCards
        v-for="recipe in gridRecipes"
        :key="recipe.recipe_id"
        :image="'/' + recipe.image_url"
        :description="recipe.recipe_description"
        :content="recipe.recipe_name"
        :note="recipe.rating"
        :prix="recipe.price"
        :href="`/recipes/${recipe.recipe_id}`"
        :id="recipe.recipe_id"
      />
    </div>
    <!--Boutons-->
    <div class="e-bloc__bouton" v-for="i in button">
      <Bouton
        v-if="moreRecipesToShow"
        @click="seeMoreRecipe"
        :size="i.button_size"
        :variant="i.button_variant"
        :icon="i.button_icon"
      >
        <PrismicRichText :field="i.button_text"
      /></Bouton>
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
