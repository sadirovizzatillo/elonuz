<script>
import BaseIcon from './BaseIcon.vue'

export default {
  name: 'BaseAccordionItem',
  components: { BaseIcon },
  inject: ['Accordion'],
  props: {
    type: {
      type: String,
      default: 'base',
      validator(value) {
        return ['base', 'menuBar'].includes(value)
      },
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: undefined,
    },
    icon: {
      type: String,
      default: undefined,
    },
    dataSet: {
      type: String,
      default: undefined,
    },
    chevronVisable: {
      type: Boolean,
      default: true,
    },
    subMenu: {
      type: Array,
      default: undefined,
    },
  },
  data() {
    return {
      index: null,
    }
  },
  computed: {
    visible() {
      return this.index === this.Accordion.active
    },
  },
  created() {
    this.index = this.Accordion.count++
  },
  methods: {
    open(value) {
      if (this.visible) {
        this.Accordion.active = null
      } else {
        this.$emit('onOpen', value)
        this.Accordion.active = this.index
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    end(el) {
      el.style.height = ''
    },
  },
}
</script>

<template>
  <li
    :class="{
      'pb-0': visible,
      'mobile:py-5.5 <mobile:py-4.5': type === 'base',
      'tablet:mb-2 tablet:rounded tablet:shadow-base overflow-hidden':
        type === 'menuBar',
    }"
  >
    <button
      class="flex items-center cursor-pointer w-full transition-colors"
      :class="{
        'tablet:py-2.5 <tablet:py-3 <mobile:py-2 px-4': type === 'menuBar',
        'tablet:bg-secondary <tablet:bg-light-600 tablet:hover:children:sibling:bg-transparent tablet:hover:children:sibling:text-white':
          type === 'menuBar' && isActive,
      }"
      @click="open(dataSet)"
    >
      <BaseIcon
        :name="icon"
        :class="{
          'mobile:children:w-5 mobile:children:h-5 <mobile:children:w-3 <mobile:children:h-3 mobile:mr-6 <mobile:mr-3 text-secondary':
            type === 'base',
          'tablet:w-8 tablet:h-8 <tablet:w-10 <tablet:h-10 <mobile:w-8 <mobile:h-8 rounded-full tablet:mr-2.5 <tablet:mr-2 children:w-4 children:h-4 inline-flex items-center justify-center transition-colors':
            type === 'menuBar',
          'tablet:bg-white tablet:text-secondary <tablet:bg-primary <tablet:text-white':
            type === 'menuBar' && isActive,
          'bg-primary text-white': type === 'menuBar' && !isActive,
        }"
      />
      <p
        class="text-secondary text-lg transition-colors"
        :class="{
          'font-medium mobile:text-lg <mobile:text-sm': type === 'base',
          'tablet:text-white tablet:font-medium <tablet:font-normal':
            type === 'menuBar' && isActive,
        }"
      >
        {{ title }}
      </p>
      <BaseIcon
        v-if="chevronVisable"
        name="chevron-down"
        class="transform transition-transform text-secondary ml-auto"
        :class="{
          'rotate-180': visible,
          'mobile:children:w-6 mobile:children:h-6 <mobile:children:w-3 <mobile:children:h-3':
            type === 'base',
          'tablet:text-white children:w-6 children:h-6':
            type === 'menuBar' && isActive,
          'children:w-6 children:h-6': type === 'menuBar',
        }"
      />
    </button>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div v-show="visible">
        <ul
          class="flex flex-col items-start w-full"
          :class="{
            'mobile:mt-3 <mobile:mt-2': type === 'base',
          }"
        >
          <slot name="subMenu" />
        </ul>
      </div>
    </transition>
  </li>
</template>

<style>
.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
