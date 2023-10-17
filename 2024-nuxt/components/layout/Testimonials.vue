<script setup>
import titlesSections from "../../scss/components/titles_section.vue";
import Icon from "../../scss/components/elements/Bouton_fleche.vue";
import Title from "../../scss/components/elements/e_title.vue";

defineProps({
  tag: [],
  title: [],
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
      <div class="e-bloc__client">
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
            <img class="e-bloc__image" src="/client.jpg" alt="image client" />
            <div>
              <!--Nom du client-->
              <Title title="h5" content="Willians Jhone" />
              <p class="e-bloc__text">CEO & Co-Founder</p>
            </div>
          </div>
          <!--Description du client-->
          <p class="e-bloc__description">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl
            tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed
            dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices
            nunc, dolor egestas mus.”
          </p>
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
      <img src="/fastfoodMenu.jpg" alt="image d'un menu de fast food" />
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

    &.profil {
    }
  }
}
</style>
