<script setup>
/*useHead({
  title: "Recettes App",
  meta: [{ name: "description", content: "Le sites de toutes vos recettes" }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Bienvenue sur Recette App')" }],
});*/

const { client } = usePrismic();
const { data: home, error } = await useAsyncData("home", () =>
  client.getSingle("homepage")
);
/*if (!home.value || error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "La page d'accueil est introuvable",
  });
}*/

useSeoMeta({
  title: "Recettes App",
  ogTitle: "Recettes App",
  description: "Le sites de toutes vos recettes",
  ogDescription: "Le sites de toutes vos recettes",
  ogImage: "/logo.png",
  twitterCard: "summary_large_image",
});

console.log(home);
</script>

<template>
  <div class="e-bloc">
    <div class="e-bloc__intro">
      <Intro
        v-if="home"
        :title="home.data.hero_title"
        :text="home.data.hero_text"
        :buttons="home.data.hero_buttons"
      />
    </div>
    <div class="e-bloc__infos">
      <Infos v-if="home" :cards="home.data.infos_card" />
    </div>
    <div class="e-bloc__product">
      <Product
        v-if="home"
        :tag="home.data.product_tag"
        :title="home.data.product_title"
        :button="home.data.product_button"
      />
    </div>
    <div class="e-bloc__services">
      <Services
        v-if="home"
        :tag="home.data.services_tag"
        :title="home.data.services_title"
        :cards="home.data.services_cards"
      />
    </div>
    <div class="e-bloc__work">
      <Work
        v-if="home"
        :tag="home.data.work_tag"
        :title="home.data.work_title"
        :items="home.data.work"
      />
    </div>
    <div class="e-bloc__testimonials">
      <Testimonials
        v-if="home"
        :tag="home.data.testimonials_tag"
        :title="home.data.testimonials_title"
        :cards="home.data.testimonials_cards"
      />
    </div>
    <div class="e-bloc__newsletter">
      <Newsletter
        :title="home.data.newslettercontent_title"
        :text="home.data.newslettercontent_text"
        :image="home.data.newsletter_image"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.e-bloc {
  &__intro {
    margin-bottom: rem(103);
    padding: rem(0) rem(176);
  }

  &__infos {
    margin-bottom: rem(135);
    padding: rem(0) rem(176);
  }

  &__product {
    margin-bottom: rem(135);
    padding: rem(0) rem(176);
  }

  &__services {
    margin-bottom: rem(135);
    padding: rem(0) rem(176);
  }

  &__work {
    margin-bottom: rem(135);
    padding: rem(0) rem(176);
  }

  &__testimonials {
    margin-bottom: rem(100);
    padding: rem(0) rem(176);
  }

  &__newsletter {
    margin-bottom: rem(155);
    padding: rem(0) rem(176);
  }
}
</style>
