<script setup>
import titlesSections from "../titles_section.vue";
import ligne from "../icons/icons-elements/lignes_orange.vue";

const env = useRuntimeConfig();

const { data: recipes } = await useAsyncData("recipes", async () => {
  return $fetch(env.public.apiUrl + "/recipes");
});

defineProps({
  items: [],
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
    <div class="e-bloc__sections">
      <div v-for="(i, index) in items">
        <!--Section ordinateur-->
        <div class="e-bloc__sections--1">
          <!--Lignes-->
          <ligne v-if="index === 2" class="e-bloc__ligne" />
          <!--Image-->
          <img
            v-if="index === 0 || index === 2"
            class="e-bloc__image --haut"
            :src="i.work_image.url"
            :alt="i.work_image.alt"
          />
          <!--Titre-->
          <h4>
            <PrismicRichText
              :class="[
                'e-bloc__title',
                { '--end': index === 2 },
                { '--center': index === 1 },
              ]"
              :field="i.work_title"
            />
          </h4>
          <!--Description-->
          <PrismicRichText
            :class="['e-bloc__text', { '--end': index === 2 }]"
            :field="i.work_text"
          />
          <img
            v-if="index === 1"
            class="e-bloc__image --bas"
            :src="i.work_image.url"
            :alt="i.work_image.alt"
          />
          <!--Lignes-->
          <ligne v-if="index === 0" class="e-bloc__ligne --inverse" />
        </div>
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
    right: rem(120);
    margin-top: rem(10);
    &.--inverse {
      transform: scaleX(-1);
      left: rem(120);
      top: rem(0);
    }
  }

  &__title {
    text-transform: uppercase;
    margin-bottom: rem(25);
    &.--center {
      text-align: center;
    }
    &.--end {
      text-align: end;
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
    position: relative;
    h4 {
      font-size: $medium-font-size;
      font-family: $primary-font-familly;
      font-weight: 700;
    }
    /*&--1 {
      display: flex;
      flex-direction: column;
      &.--end {
        text-align: end;
      }
    }*/
  }

  &__text {
    font-weight: 500;
    &.--end {
      text-align: end;
    }
  }
}
</style>
