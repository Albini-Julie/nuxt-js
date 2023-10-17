<script setup>
import Title from "./components/elements/e_title.vue";

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

const props = defineProps({
  error: Object,
});
</script>

<template>
  <div class="p-error">
    <Header
      :content="home.data.header"
      :alt="home.data.header_image.alt"
      :src="home.data.header_image.url"
    />
    <Title
      class="p-error__title"
      title="h3"
      content="Erreur : page introuvable"
    />
  </div>
  <Footer />
</template>

<style lang="scss">
.p-error {
  padding: rem(0) rem(176);
  &__title {
    display: flex;
    justify-content: center;
    color: $primary-color;
    padding: rem(200);
  }
}
</style>
