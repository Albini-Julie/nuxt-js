<script setup>
//Import des éléments utiles au codage
import { onMounted, ref, computed } from "vue";
import Title from "../elements/e_title.vue";
import Bouton from "../elements/e-Bouton.vue";
import Icon from "../elements/Bouton_fleche.vue";
import Fleche from "../icons/icons-elements/fleche_grise.vue";
import Card from "../PetiteCard.vue";
//import { client } from "@/utils/axios";

const env = useRuntimeConfig();

const { data: recipes } = await useAsyncData("recipes", async () => {
  return $fetch(env.public.apiUrl + "/recipes");
});

const props = defineProps({
  title: Array,
  text: Array,
  buttons: Array,
});

/*const recipes = ref([]);*/

const getRecipes = async () => {
  const response = await client.get("/recipes");
  return response.data;
};

const introRecipes = computed(() => {
  if (!recipes.value) {
    return [];
  }
  return recipes.value.filter((recipe) => recipe.image_url.includes("png"));
});

/*onMounted(async () => {
  recipes.value = await getRecipes();
});*/
</script>

<template>
  <main class="e-intro">
    <!--Titre + icon delivery-->
    <div class="e-intro__part1">
      <!--Icon delivery-->
      <div class="e-intro__delivery">
        <Title class="e-delivery__title" title="h5" content="Bike Delivery" />
        <div class="e-delivery__image">
          <img src="/livreur.jpg" alt="icon d'un livreur" />
        </div>
      </div>
      <!--Titre
      <div class="e-intro__title">
        <Title title="h1" content="The Fastest" />
        <Title title="h1" content="Delivery" />
        <div class="e-intro__title --end">
          <Title title="h1" content="In " />
          <Title
            class="e-intro__title --title"
            title="h1"
            content="Your City"
          />
        </div>
      </div>-->
      <div class="e-intro__title">
        <PrismicRichText :field="title" />
      </div>
      <!--Description
      <p class="e-intro__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed
        proin amet a vestibulum enim volutpat lacus. Volutpat arcu sit sed
        tortor etiam volutpat ipsum.
      </p>-->
      <div class="e-intro__description">
        <PrismicRichText :field="text" />
      </div>
      <!--Boutons
      <div class="e-intro__boutons">
        <Bouton variant="default">Order now</Bouton>
        <div class="e-intro__boutons">
          <Icon icon="action" couleur="white" size="big" />
          <Title title="h4" content="Order Process" />
        </div>
      </div>-->
      <div class="e-intro__boutons">
        <div v-for="(i, index) in buttons">
          <Bouton
            :href="i.button_link.url"
            :variant="buttons.button_type"
            v-if="i.button_type === 'default'"
          >
            {{ i.button_label }}
          </Bouton>

          <a v-else class="e-intro__link" :href="i.button_link.url">
            <div class="e-intro__boutons">
              <Icon icon="action" couleur="white" size="big" />
              <Title title="h4" :content="i.button_label" />
            </div>
          </a>
        </div>
      </div>
    </div>

    <!--Fleche-->
    <div class="e-intro__fleche">
      <Fleche />
    </div>

    <!--Cards-->
    <div class="e-intro__cards">
      <div class="e-intro__fond"></div>
      <div v-for="recipe in introRecipes" :key="recipe.recipe_id">
        <Card
          :image="'/' + recipe.image_url"
          description="image d'un burger"
          :text="recipe.recipe_description"
          :content="recipe.recipe_name"
          prix="5.15"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.e-intro {
  align-items: center;
  display: flex;
  justify-content: space-between;

  &__boutons {
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: rem(15);
  }

  &__link {
    text-decoration: none;
    color: $black;
  }

  &__title {
    font-size: $giant-font-size;
    font-family: $primary-font-familly;
    font-weight: 700;

    strong {
      color: $primary-color;
    }

    &.--end {
      display: flex;
      gap: rem(20);
    }
    &.--title {
      color: $primary-color;
    }
  }

  &__description {
    margin-top: rem(48);
    margin-bottom: rem(92);
    font-weight: 500;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(278px, 1fr));
    position: relative;
  }

  &__fond {
    background: linear-gradient(
      200deg,
      #d9d9d9 -18.39%,
      rgba(217, 217, 217, 0) 89.51%
    );
    border-radius: rem(30);
    height: 100%;
    margin-left: 25%;
    position: absolute;
    width: 80%;
  }

  &__delivery {
    align-items: center;
    background-color: $secondary-color;
    border-radius: rem(50);
    color: $primary-color;
    display: flex;
    justify-content: space-between;
    gap: rem(60);
    margin-bottom: rem(73);
    padding-left: rem(25);
    padding-right: rem(5);
    padding-top: rem(5);
    padding-bottom: rem(5);
    width: fit-content;
  }

  .e-delivery {
    &__image {
      border-radius: 100%;
      overflow: hidden;
    }

    &.--title {
      color: $primary-color;
    }
  }
}
</style>
