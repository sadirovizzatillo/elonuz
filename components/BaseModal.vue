// TODO modal ichidagi section height to'liq qoplaydigan qilsih kerak, button pastga yopishib turish uchun
<script>
import { $deleteQuery } from '~/mixins/deleteQuery.js'

export default {
    mixins: [
    {
      methods: {
        $deleteQuery,
      },
    },
  ],
  props: {
    title: {
      type: String,
      default: '',
    },
    closePosition: {
      type: String,
      default: 'left',
    },
    adaptive: {
      type: String,
      default: 'mobile',
      validator(value) {
        return ['mobile', 'tablet'].includes(value)
      },
    },
    queryName: {
      type: String,
      default: 'modal',
    },
    transitionType: {
      type: String,
      default: 'pop',
    },
  },
  computed: {
    isVisible() {
      return !!this.$route.query[this.queryName]
    },
  },
}
</script>

<template>
  <div
    class="flex items-center justify-center w-screen h-screen fixed top-0 left-0"
    :class="[isVisible ? 'pointer-events-auto z-50 bg-black bg-opacity-0' : 'bg-opacity-0 pointer-events-none']"
  >
    <!-- Modal overlay -->
    <transition name="fade">
      <div
        v-if="isVisible"
        class="absolute inset-0 bg-black bg-opacity-70"
        @click="$deleteQuery(queryName)"
      />
    </transition>
    <!-- Modal main content -->
    <transition :name="transitionType">
      <div
        v-if="isVisible"
        class="transform-none relative flex flex-col pb-8 px-4 w-full overflow-x-hidden overflow-y-auto rounded-lg bg-white"
        :class="{
          'mobile:max-w-120 mobile:min-h-115 mobile:max-h-140 <mobile:max-w-screen <mobile:h-screen <mobile:rounded-none <mobile:px-4 <mobile:py-0':
            adaptive === 'mobile',
          'tablet:max-w-120 tablet:min-h-115 tablet:max-h-140 <tablet:max-w-screen <tablet:h-screen <tablet:rounded-none <tablet:px-6 <tablet:py-0':
            adaptive === 'tablet',
        }"
      >
        <header
          class="flex items-center w-full justify-between py-4"
          :class="{
            '<mobile:relative <mobile:top-0 <mobile:right-0 <mobile:border-secondary <mobile:border-b-1 <mobile:border-opacity-10 <mobile:w-full':
              adaptive === 'mobile',
            '<tablet:relative <tablet:top-0 <tablet:right-0 <tablet:border-secondary <tablet:border-b-1 <tablet:border-opacity-10 <tablet:w-full':
              adaptive === 'tablet',
          }"
        >
          <h2
            class="sr-only font-normal text-secondary text-center <mobile:truncate <mobile:w-46 mobile:text-xl <mobile:text-lg w-full transform order-1"
            :class="{
              '<mobile:not-sr-only <mobile:mx-auto <mobile:-translate-x-4':
                adaptive === 'mobile',
              '<tablet:not-sr-only <tablet:mx-auto <tablet:-translate-x-4':
                adaptive === 'tablet',
            }"
          >
            {{ title }}
          </h2>
          <button
            :class="{
              '<mobile:bg-transparent': adaptive === 'mobile',
              '<tablet:bg-transparent': adaptive === 'tablet',
              'tablet:ml-auto': closePosition === 'right' && adaptive === 'tablet',
              'mobile:ml-auto': closePosition === 'right' && adaptive === 'mobile',
            }"
            class="flex items-center justify-center w-8 h-8 rounded bg-light-700 cursor-pointer"
            @click="$deleteQuery(queryName)"
          >
            <BaseIcon class="text-secondary children:w-4 children:h-4 block" name="close" />
          </button>
        </header>

        <section class="h-full overflow-x-hidden overflow-y-auto">
          <slot />
        </section>
      </div>
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
