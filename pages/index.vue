<script>
import { LAYOUTS } from '@/constants.js'
export default {
    name: "HomePage",
    layout: LAYOUTS.LayoutMain,
    data() {
        return {
            inputSearch: "",
        };
    },
}
</script>
<template>
  <div class="pb-10">
    <AppSearchForm class="mb-6"/>
    <AppSimpleCorusel class="tablet:mb-8 <tablet:mb-6" />
    <BaseCard class="tablet:mb-16 <tablet:mb-12 <sm:mb-8">
      <template #title>
        <h2
          class="font-semibold tablet:text-2xl <tablet:text-xl <sm:text-md text-black sm:mb-4 <sm:mb-2"
        >
          Tavsiya etilgan e'lonlar
        </h2>
      </template>

      <ul
        class="grid laptop:grid-cols-4 tablet:grid-cols-3 <tablet:grid-cols-4 <md:grid-cols-3 <sm:grid-cols-2 <sm:justify-items-center laptop:gap-y-6 <laptop:gap-y-4 laptop:gap-x-6 <laptop:gap-x-4 w-full"
      >
        <BaseAdCard
          v-for="(item, index) of new Array(4).fill('')"
          :key="index"
        />
      </ul>
    </BaseCard>

    <BaseCard>
      <template #title>
        <h2
          class="font-semibold tablet:text-2xl <tablet:text-xl <sm:text-md text-black sm:mb-4 <sm:mb-2"
        >
          Tavsiya etilgan e'lonlar
        </h2>
      </template>
      <template #header-extra>
        <NuxtLink
          to="/"
          class="font-normal text-sm text-sky-700 hover:underline"
        >
          Ko'proq
        </NuxtLink>
      </template>

      <ul
        class="grid sm:grid-cols-2 <sm:grid-cols-1 sm:gap-x-6 <sm:gap-y-6 <sm:justify-items-center w-full border-t-1 border-zinc-500 mt-4 pt-6"
      >
        <BaseAdCard
          v-for="(item, index) of new Array(2).fill('')"
          :key="index"
          large
        />
      </ul>
    </BaseCard>
  </div>
</template>
