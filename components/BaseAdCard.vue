<script>
import BaseCheckbox from './BaseCheckbox.vue'
import BaseIcon from './BaseIcon.vue'

export default {
  name: 'HomePage',
  components: { BaseCheckbox, BaseIcon },
  props: {
    posterUrl: {
      type: String,
      default: undefined,
    },
    to: {
      type: String,
      default: '/',
    },
    title: {
      type: String,
      default: undefined,
    },
    date: {
      type: String,
      default: undefined,
    },
    viewsCount: {
      type: String,
      default: undefined,
    },
    price: {
      type: String,
      default: undefined,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <li
    class="flex flex-col overflow-hidden rounded relative laptop:hover:children:flex"
    :class="{
      'shadow-card w-full min-h-52.5': !large,
      'max-w-107 min-h-79.5': large,
    }"
  >
    <!-- options buttons group -->
    <div
      v-if="options"
      class="absolute z-10 top-2 right-2 hidden space-x-2"
    >
      <BaseButton
        size="small"
        type="primary"
        class="w-6 h-6 p-0 flex items-center justify-center"
      >
        <BaseIcon
          name="edit-icon"
          class="text-white children:w-3 children:h-3"
        />
      </BaseButton>
      <BaseButton
        size="small"
        type="error"
        class="w-6 h-6 p-0 flex items-center justify-center"
      >
        <BaseIcon name="trash" class="text-white children:w-3 children:h-3.5" />
      </BaseButton>
    </div>
    <!-- options buttons group -->
    <div class="relative" :class="large && 'mb-4'">
      <img
        class="w-full object-cover object-center rounded block"
        :class="{
          'laptop:h-30 <laptop:h-28 <sm:h-25.5': !large,
          'h-50 rounded': large,
        }"
        src="https://picsum.photos/id/74/401/220"
        alt=""
        :width="large ? 428 : 201"
        :height="large ? 400 : 120"
      />
      <BaseCheckbox
        v-if="!large"
        class="absolute z-10 right-2.5 bottom-2.5"
        type="asterisk"
      />
    </div>
    <NuxtLink
      :to="to"
      class="flex flex-col h-full w-full before:content-open-quote before:w-full before:h-full before:absolute before:inset-0 before:z-0 before:text-transparent before:block"
      :class="!large && 'p-2'"
    >
      <div
        class="flex items-center justify-between"
        :class="large && 'order-1'"
      >
        <div class="flex items-center <tablet:mr-3">
          <BaseIcon
            name="calendar"
            class="text-zinc-600 mr-1 children:w-3 children:h-3"
          />
          <time
            class="font-normal text-[11px] text-zinc-600 desktop:mr-4 <desktop:mr-1"
            datetime="2018-07-07"
          >
            Oct, 19, 2021
          </time>
        </div>
        <div class="flex items-center">
          <BaseIcon
            name="eye-on"
            class="text-zinc-600 mr-1 children:w-3 children:h-3"
          />
          <p class="font-normal text-[11px] text-zinc-600 mr-4">1021</p>
        </div>
      </div>
      <h3
        :class="{
          'sm:font-normal <sm:font-medium tablet:text-[15px] <tablet:text-[13px] text-dark-400 tablet:my-2 <tablet:mt-4 <tablet:mb-5 <tablet:mt-2 <tablet:mb-4':
            !large,
          'font-semibold text-md text-secondary': large,
        }"
      >
        Bank of America
      </h3>
      <p
        :class="{
          'tablet:font-semibold <tablet:font-bold sm:text-md <sm:text-sm text-secondary mt-auto':
            !large,
          'font-medium text-sm text-dark-400 mt-2 mb-4 max-w-100': large,
        }"
      >
        {{
          large
            ? 'Bozor yaqinida qurilayotgan binodan savdo o‘rinlari sotuvi boshlanganini ma’lum qilamiz. '
            : '1 200 000 UZS'
        }}
      </p>
    </NuxtLink>
  </li>
</template>
