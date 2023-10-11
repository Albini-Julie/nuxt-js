<script setup>
import titlesSections from "../../scss/components/titles_section.vue";
import Title from "../../scss/components/elements/e_title.vue";
import ligne from "../../scss/components/icons/icons-elements/lignes_orange.vue";
</script>

<template>
  <div class="e-bloc">
    <!--Titles-->
    <titlesSections
      class="e-bloc__titles"
      contentTitle="Food Us An Important Part Of A Balanced Diet"
      contentP="How to work"
    />
    <div class="e-bloc__sections">
      <!--Section ordinateur-->
      <div class="e-bloc__sections--1">
        <!--Image-->
        <img
          class="e-bloc__image --haut"
          src="@/assets/ordinateur.jpg"
          alt="image ordinateur"
        />
        <!--Titre-->
        <Title class="e-bloc__title" title="h4" content="choose" />
        <!--Description-->
        <p class="e-bloc__text">
          Do you want to lose weight, exercise, adhere to a therapeutic diet?
          Our dietitian will help you with choosing the right program!
        </p>
      </div>
      <!--Lignes-->
      <ligne class="e-bloc__ligne --inverse" />
      <!--Section food-->
      <div class="e-bloc__sections--1">
        <!--Titre-->
        <Title
          class="e-bloc__title --center"
          title="h4"
          content="prepare food"
        />
        <!--Description-->
        <p class="e-bloc__text">
          Do you want to lose weight, exercise, adhere to a therapeutic diet?
          Our dietitian will help you with choosing the right program!
        </p>
        <!--Image-->
        <img
          class="e-bloc__image --bas"
          src="@/assets/food.jpg"
          alt="image nourriture"
        />
      </div>
      <!--Lignes-->
      <ligne class="e-bloc__ligne" />
      <!--Section sac-->
      <div class="e-bloc__sections--1 --end">
        <!--image-->
        <img
          class="e-bloc__image --haut"
          src="@/assets/bag.jpg"
          alt="image sacs"
        />
        <!--Titre-->
        <Title class="e-bloc__title" title="h4" content="deliver" />
        <!--Description-->
        <p class="e-bloc__text">
          Do you want to lose weight, exercise, adhere to a therapeutic diet?
          Our dietitian will help you with choosing the right program!
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.e-bloc {
  &__titles {
    margin-bottom: rem(51);
  }

  &__ligne {
    position: absolute;
    margin-left: rem(888);
    margin-top: rem(7);

    &.--inverse {
      transform: scaleX(-1);
      margin-left: rem(120);
    }
  }

  &__title {
    text-transform: uppercase;
    margin-bottom: rem(25);
    &.--center {
      text-align: center;
    }
  }

  &__image {
    &.--haut {
      margin-bottom: rem(45);
    }

    &.--bas {
      margin-top: rem(45);
    }
  }

  &__sections {
    display: flex;
    gap: rem(223);
    &--1 {
      display: flex;
      flex-direction: column;
      &.--end {
        text-align: end;
      }
    }
  }

  &__text {
    font-weight: 500;
  }
}
</style>
