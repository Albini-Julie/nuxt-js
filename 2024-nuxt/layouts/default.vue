<template>
  <main class="layout">
    <header class="layout__header">
      <Header />
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
