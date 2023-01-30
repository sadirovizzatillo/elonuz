<script>
import VueSlickCarousel from 'vue-slick-carousel'
import { $pushQuery } from '~/mixins/pushQuery.js'
import { $deleteQuery } from '~/mixins/deleteQuery.js'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'SingleAd',
  components: { VueSlickCarousel },
    mixins: [
    {
      methods: {
        $pushQuery,
        $deleteQuery,
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
      require: true,
    },
  },

  data() {
    return {
      c1: null,
      c2: null,
      activeSlide: 0,
      initialSlide: 0,
      phoneNumberQuery: 'phone-number',
    }
  },
  computed: {
    isModalVisible() {
      return Number.isInteger(this.$route.query[this.modalQuery])
    },
    slidesToShow() {
      // eslint-disable-next-line no-extra-boolean-cast
      if (typeof window !== 'undefined') {
        return window?.screen.width >= 840 ? 4 : 3
      }
      return 4
    },
  },
  watch: {
    '$route.query'() {
      this.initialSlide = +this.$route.query[this.modalQuery]
      this.handlePaging(+this.$route.query[this.modalQuery])
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
  <transition name="fade">
    <div
      v-if="isModalVisible"
      class="fixed z-50 inset-0 top-0 left-0 bg-dark-800 flex <desktop:flex-col overflow-x-hidden overflow-y-auto"
    >
      <header
        class="<desktop:flex <desktop:relative <desktop:items-center <desktop:mb-10 <desktop:py-4 <desktop:px-6 <desktop:bg-black <desktop:bg-opacity-80"
      >
        <BaseButton
          class="!absolute <sm:left-0 flex items-center justify-center w-12 h-12 !bg-transparent"
          @click="$deleteQuery(modalQuery)"
        >
          <BaseIcon name="close" class="text-white sm:children:w-5 <sm:children:w-3 sm:children:h-5 <sm:children:h-3" />
        </BaseButton>
        <span class="desktop:hidden font-semibold text-md text-white mx-auto">
          {{ activeSlide + 1 }} / {{ slides.length }}
        </span>
      </header>

      <div class="desktop:max-w-[879px] desktop:px-10 w-full m-auto">
        <div class="mb-4 relative flex flex-col">
          <VueSlickCarousel
            ref="c1"
            class="desktop:h-100 <desktop:h-142 <sm:h-90"
            :dots="true"
            :initial-slide="initialSlide"
            lazy-load="ondemand"
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
                class="w-full desktop:h-100 <desktop:h-142 <sm:h-90 block object-cover desktop:rounded-lg"
                height="400"
                :src="item"
                alt="slider image"
              />
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
            class="<desktop:hidden font-medium text-2xl text-white self-center mt-4"
          >
            {{ activeSlide + 1 }} / {{ slides.length }}
          </span>
          <BaseButton
            size="tiny"
            class="flex items-center justify-center !absolute top-1/2 desktop:-left-10 <desktop:left-4 z-10 transform desktop:-translate-y-1/2 desktop:bg-transparent <desktop:bg-white"
            @click="showPrev"
          >
            <BaseIcon
              name="chevron-left"
              class="desktop:text-white <desktop:text-secondary children:w-2.5 children:h-4.5"
            />
          </BaseButton>
          <BaseButton
            size="tiny"
            class="flex items-center justify-center !absolute top-1/2 desktop:-right-10 <desktop:right-4 z-10 transform desktop:-translate-y-1/2 desktop:bg-transparent <desktop:bg-white"
            @click="showNext"
          >
            <BaseIcon
              name="chevron-left"
              class="transform rotate-180 desktop:-translate-x-1px desktop:text-white <desktop:text-secondary children:w-2.5 children:h-4.5"
            />
          </BaseButton>
        </div>

        <VueSlickCarousel
          ref="c2"
          class="sm:h-32 <sm:h-25"
          :as-nav-for="$refs.c1"
          :initial-slide="initialSlide"
          :slides-to-show="slidesToShow"
          :focus-on-select="true"
          :arrows="false"
          @afterChange="handlePaging"
        >
          <li
            v-for="(item, index) of slides"
            :key="index"
            class="w-[calc(100%-10px)]"
          >
            <img
              class="w-[calc(100%-10px)] sm:h-30 <sm:h-25 block object-cover desktop:rounded"
              height="128"
              width="208"
              :src="item"
              alt="mini slider image"
            />
          </li>
        </VueSlickCarousel>
      </div>

      <div
        class="<desktop:flex <desktop:justify-between <sm:flex-col desktop:max-w-111.5 w-full <desktop:mt-20 <sm:mt-10 bg-white desktop:py-15.5 <desktop:py-6 <sm:py-2 sm:px-8 <sm:px-4"
      >
        <div
          class="sm:max-w-90 <desktop:w-full <desktop:flex <desktop:flex-col sm:mr-4 <sm:mb-6"
        >
          <h3
            class="<desktop:order-1 desktop:font-medium sm:font-semibold <sm:font-medium  desktop:text-[36px] <desktop:text-lg <sm:text-xs text-black desktop:mb-24"
          >
            Tog'da joylashgan uy oilaviy dam olish uchun ijaraga beriladi
          </h3>
          <p
            class="font-bold desktop:text-[36px] <desktop:text-2xl <sm:text-lg text-black desktop:mb-12 <desktop:mb-4 <sm:mb-2"
          >
            2 000 000 so'm
          </p>
        </div>
        <div class="flex sm:flex-col <desktop:w-60 <sm:w-full">
          <BaseButton
            type="warning"
            class="desktop:mb-4 sm:mb-2 <sm:w-full <sm:mr-4"
            @click="$pushQuery(phoneNumberQuery, true)"
            >Telefon raqami</BaseButton
          >
          <BaseButton class="<sm:w-full">Xabar yozish</BaseButton>
        </div>
      </div>
      <SingleAdTelInfoModal :query-name="phoneNumberQuery" />
    </div>
  </transition>
</template>

<style>
.nav-slide-dots {
  bottom: -2px;
  display: flex;
  align-items: center;
  z-index: 10;
}
</style>
