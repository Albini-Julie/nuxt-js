<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
//import { client } from "@/utils/axios";
import Bouton from "../../components/elements/e-Bouton.vue";
import Title from "../../components/elements/e_title.vue";

const route = useRoute();

//const recipe = ref({});

const env = useRuntimeConfig();

const { data: recipe } = await useAsyncData("recipe", async () => {
  return $fetch(env.public.apiUrl + `/recipes/${route.params.id}`);
});

const { client } = usePrismic();
const { data: home, error } = await useAsyncData("home", () =>
  client.getSingle("homepage")
);

useSeoMeta({
  title: home.value.data.meta_title,
  ogTitle: home.value.data.meta_text,
  description: home.value.data.meta_description,
  ogDescription: home.value.data.meta_description,
  ogImage: home.value.data.meta_image.url,
  twitterCard: "summary_large_image",
});

/*const getRecipes = async () => {
  const response = await client.get(`/recipes/${route.params.id}`);
  return response.data;
};

/*onMounted(async () => {
  recipe.value = await getRecipes();
});*/
</script>

<template>
  <div class="e-bloc">
    <div class="e-bloc__infos">
      <!--Image-->
      <img
        class="e-bloc__image"
        :src="'/' + recipe.image_url"
        alt="image de la recette"
      />
      <!--Les blocs texts-->
      <div class="e-bloc__paraph --orange">
        <Title class="e-bloc__title" title="h2" :content="recipe.recipe_name" />
        <div class="e-bloc__paraph">
          <!--Text description-->
          <div class="e-bloc__texts">
            <Title title="h5" content="Description de la recette : " />
            <p>{{ recipe.recipe_description }}</p>
          </div>
          <!--Text ingrédient-->
          <div>
            <Title title="h5" content="Ingrédients de la recette : " />
            <p
              v-for="ingredient in recipe.ingredients"
              :key="ingredient.id"
              class="e-bloc__texts"
            >
              - {{ ingredient.name }}
            </p>
          </div>
          <!--Text note-->
          <div class="e-bloc__texts">
            <Title title="h5" content="Note de la recette : " />
            <p>{{ recipe.rating }}</p>
          </div>
          <!--Text prix-->
          <div class="e-bloc__texts">
            <Title title="h5" content="Prix de la recette : " />
            <p>{{ recipe.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <!--Bouton accueil-->
    <div class="e-bloc__button">
      <RouterLink to="/">
        <Bouton class="button -small">Accueil</Bouton>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.e-bloc {
  padding: rem(0) rem(176);
  margin-top: rem(29);

  &__infos {
    margin-top: rem(80);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: rem(50);
  }

  &__title {
    display: flex;
    justify-content: center;
    color: $primary-color;
  }

  &__button {
    display: flex;
    justify-content: center;
    margin-top: rem(50);
    margin-bottom: rem(30);
  }

  &__texts {
    display: flex;
    gap: rem(5);
  }

  &__paraph {
    display: flex;
    flex-direction: column;
    gap: rem(10);

    &.--orange {
      background-color: $secondary-color;
      padding: rem(50) rem(50);
      border-radius: rem(30);
      gap: rem(50);
      width: 50%;
      &:hover {
        box-shadow: 0px 10px 80px 0px $primary-color;
      }
    }
  }

  &__image {
    border-radius: rem(30);
    width: 50%;

    &:hover {
      box-shadow: 0px 10px 80px 0px $black;
    }
  }
}
</style>
