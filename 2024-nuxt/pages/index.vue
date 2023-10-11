<script setup></script>

<template>
  <div class="e-bloc">
    <div class="e-bloc__intro">
      <Intro />
    </div>
    <div class="e-bloc__infos">
      <Infos />
    </div>
    <div class="e-bloc_product">
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
