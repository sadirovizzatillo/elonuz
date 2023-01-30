<script>
export default {
  name: 'BaseAccordionSubItem',
  props: {
    title: {
      type: String,
      default: '',
      require: true,
    },
    info: {
      type: String,
      default: '',
    },
    dataSet: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: 'base',
      validator(value) {
        return ['base', 'menuBar'].includes(value)
      },
    },
  },
}
</script>
<template>
  <li class="w-full">
    <button
      class="flex justify-items-start w-full cursor-pointer transition-colors children:transition-colors"
      :class="{
        'mobile:py-3 <mobile:py-2': type === 'base',
        'tablet:px-4 tablet:py-2.5 <tablet:py-5 <mobile:py-3 <tablet:pl-16 <mobile:pl-14 <tablet:pr-4 tablet:hover:bg-secondary <tablet:hover:bg-light-600 tablet:hover:children:text-white':
          type === 'menuBar',
      }"
      @click="$emit('onClick', dataSet)"
    >
      <span
        v-if="!info"
        class="mobile:w-5 mobile:h-5 <mobile:w-3 <mobile:h-3 mobile:mr-6 <mobile:mr-3"
      ></span>
      <p
        class="font-normal"
        :class="{
          'mobile:text-sm <mobile:text-xs text-secondary': type === 'base',
          'tablet:text-zinc-600 <tablet:text-secondary tablet:text-sm <tablet:text-md <mobile:text-sm':
            type === 'menuBar',
        }"
      >
        {{ title }}
      </p>
      <span
        v-if="info"
        class="font-normal text-sm tablet:text-zinc-600 <tablet:text-secondary ml-auto"
        >{{ info }}</span
      >
    </button>
  </li>
</template>
