<script>
import VueSlickCarousel from 'vue-slick-carousel'
import { $pushQuery } from '~/mixins/pushQuery.js'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'AppNavCarousel',
  components: { VueSlickCarousel },
  mixins: [
    {
      methods: {
        $pushQuery,
      },
    },
  ],
  props: {
    slides: {
      type: Array,
      default: null,
      require: true,
    },
    modalQuery: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      c1: null,
      c2: null,
      activeSlide: 0,
    }
  },
  computed: {
    imobileodalVisible() {
      return !!this.$route.query[this.modalQuery]
    },
    slidesToShow() {
      // eslint-disable-next-line no-extra-boolean-cast
      if (typeof window !== 'undefined') {
        return window?.screen.width >= 1024 ? 4 : 3
      }
      return 4
    },
  },
  methods: {
    handlePaging(value) {
      this.activeSlide = value
    },
    showNext() {
      this.$refs.c1.next()
    },
    showPrev() {
      this.$refs.c1.prev()
    },
  },
}
</script>

<template>
  <section class="laptop:pb-34 <laptop:pb-37 <mobile:pb-18">
    <div class="w-full laptop:h-100 <laptop:h-83 <mobile:h-44">
      <div class="mb-4 relative">
        <VueSlickCarousel
          ref="c1"
          class="laptop:h-100 <laptop:h-83 <mobile:h-44"
          :dots="true"
          :infinite="true"
          :autoplay="true"
          :speed="500"
          :autoplay-speed="5000"
          :as-nav-for="$refs.c2"
          :focus-on-select="true"
          :arrows="false"
          @afterChange="handlePaging"
        >
          <li
            v-for="(item, index) of slides"
            :key="index"
            class="w-full relative"
          >
            <img
              class="w-full laptop:h-100 <laptop:h-83 <mobile:h-44 block object-cover object-center rounded-lg"
              width="880"
              height="400"
              :src="item"
              alt="slider image"
            />
            <button
              type="button"
              class="absolute z-10 inset-0 w-full h-full bg-slider-gradient rounded-lg"
              @click="$pushQuery(modalQuery, activeSlide)"
            ></button>
          </li>
          <template #customPaging="page">
            <div
              role="button"
              class="custom-dot children:hover:text-opacity-80"
              @click="handlePaging(page)"
            >
              <BaseIcon
                name="dot"
                class="text-white text-opacity-50 children:w-2 children:h-2 pointer-events-none transition-colors"
                :class="[+activeSlide === +page && 'text-opacity-100']"
              />
            </div>
          </template>
        </VueSlickCarousel>
        <span
          class="absolute z-10 right-4 bottom-3 font-medium text-mobile text-white"
        >
          {{ activeSlide + 1 }} / {{ slides.length }}
        </span>
        <BaseButton
          size="tiny"
          class="!absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-secondary bg-opacity-60"
          @click="showPrev"
        >
          <BaseIcon
            name="chevron-left"
            class="text-white children:w-1.5 children:h-2.5"
          />
        </BaseButton>
        <BaseButton
          size="tiny"
          class="!absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-secondary bg-opacity-60"
          @click="showNext"
        >
          <BaseIcon
            name="chevron-left"
            class="transform rotate-180 translate-x-1px text-white children:w-1.5 children:h-2.5"
          />
        </BaseButton>
      </div>

      <VueSlickCarousel
        ref="c2"
        class="laptop:h-30 <laptop:h-36 <mobile:h-18"
        :as-nav-for="$refs.c1"
        :slides-to-show="slidesToShow"
        :focus-on-select="true"
        :arrows="false"
        @afterChange="handlePaging"
      >
        <li v-for="(item, index) of slides" :key="index" class="w-[95%]">
          <img
            class="w-[95%] laptop:h-30 <laptop:h-36 <mobile:h-18 block object-cover object-center rounded"
            height="144"
            width="208"
            :src="item"
            alt="mini slider image"
          />
        </li>
      </VueSlickCarousel>
    </div>
    <slot name="slideModal" />
  </section>
</template>

<style>
.nav-slide-dots {
  bottom: -2px;
  display: flex;
  align-items: center;
  z-index: 10;
}
</style>
