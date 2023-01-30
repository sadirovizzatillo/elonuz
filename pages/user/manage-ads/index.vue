<script>
import { LAYOUTS } from '@/constants.js'
export default {
  name: 'UserSummaryPage',
  layout: LAYOUTS.LayoutUserSettings,
}
</script>

<template>
  <div class="">
    <h2 class="font-semibold text-xl mb-4">Xulosa</h2>
    <ul class="grid grid-cols-3 grid-rows-2 gap-x-6 mb-6 <laptop:block <laptop:w-full tablet:mb-10">
      <li
        class="relative p-6 bg-white h-35 box-border col-span-1 <laptop:p-4 <laptop:mb-4 <tablet:h-30"
      >
        <span
          class="block font-bold text-4xl text-secondary mt-5 <desktop:mt-0 <tablet:text-2xl <tablet:mt-4"
          >24
        </span>
        <span class="block text-sm text-zinc-600 <mobile:w-4/5"
          >Saytda chop etilgan e'lonlar</span
        >
        <BaseIcon
          class="absolute right-32px top-32px w-9 h-9 <mobile:w-7 <mobile:right-16px <tablet:top-40px"
          name="announcement-icon"
        />
      </li>
      <li
        class="relative p-6 bg-white h-35 box-border col-span-1 <laptop:p-4 <laptop:mb-4 <tablet:h-30"
      >
        <span
          class=" block font-bold text-4xl text-secondary mt-5 <desktop:mt-0 <tablet:text-2xl <tablet:mt-4"
          >102
        </span>
        <span class="block text-sm text-zinc-600 <mobile:w-4/5"
          >Sevimlilarga saqlangan e’lolar</span
        >
        <BaseIcon
          class="absolute right-32px top-32px w-11 <mobile:w-9 <mobile:right-16px <tablet:top-40px"
          name="cartoon-star"
        />
      </li>
      <li
        class="relative p-6 bg-white h-35 box-border col-span-1 <laptop:p-4 <laptop:mb-4 <tablet:h-30"
      >
        <span
          class="block font-bold text-4xl text-secondary mt-5 <desktop:mt-0 <tablet:text-2xl <tablet:mt-4"
          >18
        </span> 
        <span class="block text-sm text-zinc-600 <mobile:w-4/5"
          >Kuzatuvchilardan kelgan xabarlar</span
        >
        <BaseIcon
          class="absolute right-32px top-32px w-10 <mobile:w-7 <mobile:right-16px <tablet:top-40px"
          name="cartoon-mail"
        />
      </li>
      <li
        class="bg-primary-light col-span-1 p-6 h-40 relative overflow-hidden <laptop:p-4 <laptop:hidden <tablet:h-30"
      >
        <h3
          class="text-white text-3xl font-medium mt-4 <tablet:text-2xl <tablet:mb-0"
        >
          Sevimlilar
        </h3>
        <p class="text-white text-sm <laptop:w-full <tablet:text-xs">
          Qiziqarli reklamalaringizni istalgan joyda va istalgan vaqtda saqlang.
        </p>
        <BaseIcon
          name="dim-star"
          class="absolute -top-1 -right-1 <tablet:w-20 <mobile:w-12"
        />
      </li>
      <li
        class="bg-sky-700 p-6 col-span-2 h-40 relative overflow-hidden <laptop:p-4 <laptop:hidden <tablet:h-30"
      >
        <h3
          class="text-white text-3xl font-medium mt-4 <tablet:text-2xl <tablet:mb-0"
        >
          Hoziroq e'lon qiling!
        </h3>
        <p class="text-white text-sm w-4/5 <laptop:w-full <tablet:text-xs">
          Saytimizda reklama qiling va minglab ko'rishlar bilan qisqa vaqt
          ichida maqsadingizga erishing.
        </p>
        <BaseIcon
          name="dim-announcement"
          class="absolute -top-1 -right-1 <tablet:w-20 <mobile:w-12"
        />
      </li>
    </ul>
    <ul
      class="hidden <laptop:block <tablet:flex <tablet:justify-between <sm:block mb-32"
    >
      <li
        class="bg-primary-light mr-6 p-6 h-35 relative overflow-hidden <laptop:mb-4 <laptop:p-4 <laptop:w-full <tablet:h-35 <mobile:h-30 <mobile:w-full"
      >
        <h3
          class="text-white text-3xl font-medium <tablet:text-2xl <tablet:mb-1 <mobile:mb-1 <mobile:text-lg"
        >
          Sevimlilar
        </h3>
        <p class="text-white text-sm <laptop:w-full <tablet:text-xs">
          Qiziqarli reklamalaringizni istalgan joyda va istalgan vaqtda saqlang.
        </p>
        <BaseIcon
          name="dim-star"
          class="absolute -top-1 -right-1 <tablet:w-20 <mobile:w-12"
        />
      </li>
      <li
        class="bg-sky-700 p-6 h-35 relative overflow-hidden <tablet:h-35 <laptop:p-4 <mobile:h-30 <mobile:w-full"
      >
        <h3
          class="text-white text-3xl font-medium <tablet:text-2xl <tablet:mb-1 <mobile:mb-1 <mobile:text-lg"
        >
          Hoziroq e'lon qiling!
        </h3>
        <p class="text-white text-sm <laptop:w-full <tablet:text-xs">
          Saytimizda reklama qiling va minglab ko'rishlar bilan qisqa vaqt
          ichida maqsadingizga erishing.
        </p>
        <BaseIcon
          name="dim-announcement"
          class="absolute -top-1 -right-1 <tablet:w-20 <mobile:w-12"
        />
      </li>
    </ul>
  </div>
</template>
