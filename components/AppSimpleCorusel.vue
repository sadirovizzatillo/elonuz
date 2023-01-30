<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import BaseIcon from './BaseIcon.vue'
export default {
  name: 'HomePage',
  components: { VueSlickCarousel, BaseIcon },
  props: {
    carouselData: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
      },
      activeSlide: null,
    }
  },
  methods: {
    handlePaging(value) {
      this.activeSlide = value
    },
  },
}
</script>
<template>
  <div class="overflow-hidden">
    <VueSlickCarousel v-bind="settings" @afterChange="handlePaging">
      <li>
        <div
          class="relative w-full tablet:h-92.5 <tablet:h-83 <mobile:h-44 overflow-hidden rounded-lg"
        >
          <img
            class="w-full tablet:h-92.5 <tablet:h-83 <mobile:h-44 object-cover"
            src="https://picsum.photos/id/1/2000/3000"
            alt=""
          />
          <p
            class="absolute z-10 tablet:left-8 tablet:bottom-8 <tablet:left-12 <tablet:bottom-12 <mobile:left-3 <mobile:bottom-6 font-bold mobile:text-2xl mobile:text-sm text-white"
          >
            Noutbook HP ENVY X360
          </p>
          <div
            class="absolute inset-0 z-0 block w-full h-full bg-slider-gradient"
          ></div>
        </div>
      </li>
      <li>
        <div
          class="banner-hero relative w-full tablet:h-92.5 <tablet:h-83 <mobile:h-44 overflow-hidden rounded-lg"
        >
          <img
            class="w-full tablet:h-92.5 <tablet:h-83 <mobile:h-44 object-cover"
            src="https://picsum.photos/id/1/2000/3000"
            alt=""
          />
          <p
            class="absolute z-10 tablet:left-8 tablet:bottom-8 <tablet:left-12 <tablet:bottom-12 <mobile:left-3 <mobile:bottom-6 font-bold mobile:text-2xl mobile:text-sm text-white"
          >
            Noutbook HP ENVY X360
          </p>
          <div
            class="absolute inset-0 z-0 block w-full h-full bg-slider-gradient to-yellow-500/50"
          ></div>
        </div>
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
  </div>
</template>

<style>
.slick-dots {
  bottom: 16px;
  display: inline-flex;
  align-items: center;
}
@media only screen and (max-width: 460px) {
  .slick-dots {
    bottom: 0;
  }
}
</style>
