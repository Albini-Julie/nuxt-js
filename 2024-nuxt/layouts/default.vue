<script setup>
const { client } = usePrismic();
const { data: home, error } = await useAsyncData("home", () =>
  client.getSingle("homepage")
);
</script>

<template>
  <main class="layout">
    <header class="layout__header">
      <Header
        :content="home.data.header"
        :src="home.data.header_image.url"
        :alt="home.data.header_image.alt"
      />
    </header>
    <corps>
      <NuxtPage />
    </corps>
    <footer class="layout__footer">
      <Footer />
    </footer>
  </main>
</template>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template:
    " header "
    " corps "
    " footer ";

  &__header {
    margin-top: rem(29);
    margin-bottom: rem(36);
    padding: rem(0) rem(176);
    grid-area: header;
  }

  &__footer {
    grid-area: footer;
  }
}
</style>
