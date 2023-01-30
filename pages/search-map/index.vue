<script>
import { LAYOUTS } from '~/constants'

export default {
  name: 'SearchIsMap',
  layout: LAYOUTS.LayoutFullScreen,
}
</script>

<template>
  <div
    class="w-screen h-screen <sm:h-full <sm:overflow-y-scroll <sm:overflow-x-hidden"
  >
    <header
      class="w-full box-border py-4.5 px-6 <sm:overflow-x-scroll <desktop:px-3 <sm:fixed <sm:z-10 <sm:top-0 <sm:left-0 bg-white <sm:bg-zinc-300"
    >
      <ul class="w-128 grid grid-cols-4 grid-rows-1">
        <li class="flex items-center font-medium text-sm text-zinc-600">
          Kategoriyalar <BaseIcon class="ml-2" name="right-arrow" />
        </li>
        <li class="flex items-center text-zinc-600 text-sm font-medium">
          Ko'chmas mulk <BaseIcon class="ml-2" name="right-arrow" />
        </li>
        <li class="flex items-center text-zinc-600 text-sm font-medium">
          Xususiy uylar <BaseIcon class="ml-2" name="right-arrow" />
        </li>
        <li class="text-secondary font-medium text-sm">Ijara uzoq muddatga</li>
      </ul>
    </header>
    <main class="flex justify-between w-full h-full">
      <nav
        class="navigation w-175 h-full box-border <sm:absolute <sm:w-full <sm:z-10 <sm:top-9/10 <sm:bg-white <sm:h-auto"
      >
        <button
          class="arrow-btn block sm:hidden absolute left-1/2 -translate-x-1/2 -top-5"
        >
          <BaseIcon name="top-arrow-circle" />
        </button>
        <ul class="<sm:pt-2">
          <li>
            <a
              href="#"
              class="flex px-6 py-4 transition hover:bg-light-600 <desktop:px-3 <desktop:py-2 <sm:w-screen <sm:overflow-x-hidden"
            >
              <div class="mr-4">
                <img
                  class="block rounded w-25 h-25 <sm:h-22 <sm:w-22"
                  src="https://picsum.photos/id/403/100"
                  alt="Product image"
                  width="100"
                  height="100"
                />
              </div>
              <div class="flex flex-col justify-between">
                <span
                  class="block text-sm text-dark-400 w-50 mb-2 w-50 truncate"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
                <span class="block font-bold text-base text-secondary mb-2">
                  45 000 USD
                </span>
                <div class="flex">
                  <span
                    class="flex items-center text-zinc-600 text-xs font-light mr-5"
                  >
                    <BaseIcon name="calendar-icon" class="mr-1" />
                    October 19, 2021
                  </span>
                  <span
                    class="flex items-center text-zinc-600 text-xs font-light"
                  >
                    <BaseIcon name="eye-icon" class="mr-1" />
                    1223
                  </span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </nav>
      <div class="w-full h-full relative <sm:static">
        <SearchMap class=""/>
        <div class="flex w-full absolute <tablet:overflow-x-scroll bottom-14 px-9 py-4 box-border bg-white <sm:px-3 <sm:fixed <sm:top-14  <sm:z-20 <sm:h-20">
          <button
            class="block border border-zinc-500 px-6 py-3 rounded-2xl mr-4 <laptop:px-4.5 <laptop:py-3 <laptop:text-sm <sm:text-xs <sm:py-1"
          >
            1km
          </button>
          <button
            class="block border border-zinc-500 px-6 py-3 rounded-2xl mr-4 <laptop:px-4.5 <laptop:py-3 <laptop:text-sm <sm:text-xs <sm:py-1"
          >
            5km
          </button>
          <button
            class="block border border-zinc-500 px-6 py-3 rounded-2xl mr-4 <laptop:px-4.5 <laptop:py-3 <laptop:text-sm <sm:text-xs <sm:py-1"
          >
            10km
          </button>
          <button
            class="block border border-zinc-500 px-6 py-3 rounded-2xl mr-4 <laptop:px-4.5 <laptop:py-3 <laptop:text-sm <sm:text-xs <sm:py-1"
          >
            25km
          </button>
          <button
            class="block border border-zinc-500 px-6 py-3 rounded-2xl mr-4 <laptop:px-4.5 <laptop:py-3 <laptop:text-sm <sm:text-xs <sm:py-1"
          >
            50km
          </button>
          <button class="block border border-zinc-500 px-6 py-3 rounded-2xl bg-blue-600 text-white <sm:text-xs <sm:py-1">
            100km
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
