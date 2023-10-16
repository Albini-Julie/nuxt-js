<script setup>
/*useHead({
  title: "Recettes App",
  meta: [{ name: "description", content: "Le sites de toutes vos recettes" }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Bienvenue sur Recette App')" }],
});*/

useSeoMeta({
  title: "Recettes App",
  ogTitle: "Recettes App",
  description: "Le sites de toutes vos recettes",
  ogDescription: "Le sites de toutes vos recettes",
  ogImage: "/logo.png",
  twitterCard: "summary_large_image",
});

const { client } = usePrismic();
const { data: home } = await useAsyncData("home", () =>
  client.getSingle("homepage")
);

console.log(home);
</script>

<template>
  <PrismicRichText v-if="home" v-bind="{ field: home.data.hero_title }" />

  <div class="e-bloc">
    <div class="e-bloc__intro">
      <Intro />
    </div>
    <div class="e-bloc__infos">
      <Infos />
    </div>
    <div class="e-bloc__product">
      <Product />
    </div>
    <div class="e-bloc__services">
      <Services />
    </div>
    <div class="e-bloc__work">
      <Work />
    </div>
    <div class="e-bloc__testimonials">
      <Testimonials />
    </div>
    <div class="e-bloc__newsletter">
      <Newsletter />
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
