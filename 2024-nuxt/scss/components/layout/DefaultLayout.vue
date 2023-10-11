<template>
  <main class="layout">
    <header class="layout__header">
      <slot name="header"></slot>
    </header>
    <articleIntro class="layout__intro">
      <slot name="intro"></slot>
    </articleIntro>
    <articleInfos class="layout__infos">
      <slot name="infos"></slot>
    </articleInfos>
    <articleProduct class="layout__product">
      <slot name="product"></slot>
    </articleProduct>
    <articleServices class="layout__services">
      <slot name="services"></slot>
    </articleServices>
    <articleWork class="layout__work">
      <slot name="work"></slot>
    </articleWork>
    <articleTestimonials class="layout__testimonials">
      <slot name="testimonials"></slot>
    </articleTestimonials>
    <articleNewsletter class="layout__newsletter">
      <slot name="newsletter"></slot>
    </articleNewsletter>
    <footer class="layout__footer">
      <slot name="footer"></slot>
    </footer>
  </main>
</template>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template:
    ' header '
    ' articleIntro '
    ' articlesInfos '
    ' articleProduct'
    ' articleServices '
    ' articleWork '
    ' articleTestimonials '
    ' articleNewsletter '
    ' footer ';

  &__header {
    height: 200px;
    margin-top: rem(29);
    padding: rem(0) rem(176);
    grid-area: header;
  }

  &__intro {
    height: 200px;
    padding: rem(0) rem(176);
    grid-area: articleIntro;
  }

  &__infos {
    height: 200px;
    padding: rem(0) rem(176);
    grid-area: articlesInfos;
  }

  &__product {
    height: 200px;
    padding: rem(0) rem(176);
    grid-area: articleProduct;
  }

  &__services {
    height: 200px;
    padding: rem(0) rem(176);
    grid-area: articleServices;
  }

  &__work {
    height: 200px;
    padding: rem(0) rem(176);
    grid-area: articleWork;
  }

  &__testimonials {
    height: 200px;
    padding: rem(0) rem(176);
    grid-area: articleTestimonials;
  }

  &__newsletter {
    height: 200px;
    padding: rem(0) rem(176);
    grid-area: articleNewsletter;
  }

  &__footer {
    height: 200px;
    padding: rem(0) rem(176);
    grid-area: footer;
  }
}
</style>
