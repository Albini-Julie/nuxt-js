<script setup>
import titlesSections from "../titles_section.vue";
import Icon from "../elements/Bouton_fleche.vue";

const { client } = usePrismic();
const { data: home, error } = await useAsyncData("home", () =>
  client.getSingle("homepage")
);

defineProps({
  tag: [],
  title: [],
  cards: [],
});
</script>

<template>
  <div class="e-bloc">
    <!--Titles-->
    <titlesSections
      class="e-bloc__titles"
      :contentTitle="title"
      :contentP="tag"
    />
    <!--Contenu-->
    <div class="e-bloc__section">
      <!--Partie client-->
      <div class="e-bloc__client" v-for="i in cards">
        <div style="display: flex; justify-content: center">
          <div class="e-bloc__blanc"></div>
        </div>
        <!--Icon fleche-->
        <div class="e-bloc__icon">
          <Icon
            class="e-bloc__icon --gauche"
            couleur="orange"
            icon=""
            size="small"
          />
        </div>
        <!--Photo et nom du client-->
        <div class="e-bloc__profil">
          <div class="e-bloc__profil --int">
            <!--Photo-->
            <img
              class="e-bloc__image"
              :src="i.cards_image.url"
              :alt="i.cards_image.alt"
            />
            <div>
              <!--Nom du client-->
              <h5><PrismicRichText :field="i.cards_title" /></h5>
              <PrismicRichText
                :field="i.cards_description"
                class="e-bloc__text"
              />
            </div>
          </div>
          <!--Description du client-->
          <PrismicRichText :field="i.cards_text" class="e-bloc__description" />
        </div>
        <!--Icon fleche-->
        <div class="e-bloc__icon">
          <Icon
            class="e-bloc__icon --droite"
            couleur="orange"
            icon="fleche_suivant"
            size="small"
          />
        </div>
      </div>
      <!--Image fast food-->
      <img
        :src="home.data.testimonials_image.url"
        :alt="home.data.testimonials_image.alt"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.e-bloc {
  &__section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: rem(57);
    gap: rem(46);
  }

  &__blanc {
    margin: auto;
    z-index: 0;
    position: absolute;
    background-color: $white;
    border-radius: rem(35);
    box-shadow: 0px 0px 50px 0px $gray;
    width: rem(723);
    height: rem(445);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__text {
    font-size: $small-font-size;
  }

  &__icon {
    z-index: 50;
    &.--gauche {
      margin-right: rem(30);
    }
    &.--droite {
      margin-left: rem(30);
    }
  }

  &__description {
    text-align: center;
    font-weight: 500;
    margin-top: rem(45);
    z-index: 50;
  }

  &__image {
    width: rem(76);
    border-radius: 100%;
    overflow: hidden;
    z-index: 50;
  }

  &__profil {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 50;

    &.--int {
      flex-direction: row;
      gap: rem(17);
    }
  }

  &__client {
    display: flex;
    align-items: center;
    position: relative;

    h5 {
      font-size: $regular-font-size;
      font-family: $primary-font-familly;
      font-weight: 700;
    }
    &.profil {
    }
  }
}
</style>
