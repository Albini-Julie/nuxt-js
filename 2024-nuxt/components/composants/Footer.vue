<script setup>
import Icon from "../elements/Bouton_fleche.vue";
import Titre from "../elements/e_title.vue";
import Bouton from "../elements/Bouton_fleche.vue";
</script>

<template>
  <div class="e-bloc">
    <!--Première colonne-->
    <div class="e-bloc__1c">
      <!--Logo-->
      <img src="/logo.png" />
      <!--Paragraphe-->
      <p class="e-bloc__text --first">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero
        viverra dapibus odio sit malesuada in quis. Arcu tristique elementum
        viverra integer id.
      </p>

      <!--Réseaux sociaux-->
      <div class="e-bloc__reseaux">
        <!--Logo Facebook-->
        <Icon icon="facebook" size="small" couleur="orange_clair" />
        <!--Logo Twitter-->
        <Icon icon="twitter" size="small" couleur="orange_clair" />
        <!--Logo Linkedin-->
        <Icon icon="linkedin" size="small" couleur="orange_clair" />
        <!--Logo Instagram-->
        <Icon icon="instagram" size="small" couleur="orange_clair" />
      </div>
    </div>
    <!--deuxième colonne-->
    <div>
      <!--Titres-->
      <Titre class="e-bloc__title" title="h4" content="Opening Restaurant" />
      <!--Texts-->
      <div class="e-bloc__paraph">
        <p class="e-bloc__text">Sat-Wet: 09:00am-10:00PM</p>
        <p class="e-bloc__text">Thursdayt: 09:00am-11:00PM</p>
        <p class="e-bloc__text">Friday: 09:00am-8:00PM</p>
      </div>
    </div>
    <!--troisième colonne-->
    <div>
      <!--Titres-->
      <Titre class="e-bloc__title" title="h4" content="User Link" />
      <!--Texts-->
      <div class="e-bloc__paraph">
        <p class="e-bloc__text">About Us</p>
        <p class="e-bloc__text">Contact Us</p>
        <p class="e-bloc__text">Order Delivery</p>
        <p class="e-bloc__text">Payment & Tex</p>
        <p class="e-bloc__text">Terms of Services</p>
      </div>
    </div>
    <!--Quatrième colonne-->
    <div>
      <!--Titres-->
      <Titre class="e-bloc__title" title="h4" content="Contact Us" />
      <!--Texts-->
      <div class="e-bloc__paraph">
        <p class="e-bloc__text">1234 Country Club Ave</p>
        <p class="e-bloc__text">NC 123456, London, UK</p>
        <p class="e-bloc__text">+0123 456 7891</p>
      </div>
      <!--Input-->
      <div class="e-bloc__champs">
        <input
          class="e-bloc__input"
          type="text"
          placeholder="Enter your email...."
        />
        <Bouton icon="fleche" couleur="orange" size="small" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.e-bloc {
  background-color: $bleu;
  padding: rem(80) rem(150);
  display: flex;
  gap: rem(154);

  &__champs {
    background-color: $white;
    border-radius: rem(32.5);
    box-shadow: 0px 0px 15px 0px $gray;
    padding: rem(10) rem(8);
    display: flex;
    justify-content: space-between;
    gap: rem(93);
    margin-top: rem(29);
  }

  &__input {
    border: none;

    &::placeholder {
      color: $gray;
      font-size: $small-font-size;
      font-family: $primary-font-familly;
    }

    &:focus {
      outline: none;
    }
  }

  &__paraph {
    display: flex;
    flex-direction: column;
    gap: rem(12);
  }

  &__title {
    margin-bottom: rem(68);
  }

  &__1c {
    width: rem(375);
  }

  &__reseaux {
    display: flex;
    gap: rem(18);
  }

  &__text {
    color: $gray;

    &.--first {
      margin-bottom: rem(15);
      margin-top: rem(30);
    }
  }
}
</style>
