<script>
export default {
  name: "BaseAccordionItem",
  provide() {
    return { Accordion: this.Accordion };
  },
  props: {
    type: {
      type: String,
      default: "base",
      validator(value) {
        return ["base", "menuBar"].includes(value);
      },
    },
  },
  data() {
    return {
      Accordion: {
        count: 0,
        active: null,
      },
    };
  },
};
</script>

<template>
  <ul
    class="w-full"
    :class="{
      'divide-y divide-secondary divide-opacity-10 border-y-1 border-secondary border-opacity-10':
        type === 'base',
        'tablet:p-1 <tablet:divide-y <tablet:divide-secondary <tablet:divide-opacity-10 <tablet:border-y-1 <tablet:border-secondary <tablet:border-opacity-10': type === 'menuBar'
    }"
  >
    <slot></slot>
  </ul>
</template>
