<script>
import BaseIcon from './BaseIcon.vue'
export default {
  components: { BaseIcon },
  props: {
    activeClass: {
      type: String || Array,
      default: ''
    },
    //   directions of link
    to: {
      type: String || Object,
      required: true,
    },
    //   text of link
    text: {
      type: String,
      default: undefined,
      required: true,
    },
    // Should link text ligth?
    light: {
      type: Boolean,
      default: false,
    },
    // add preview icon or...
    prev: {
      type: Boolean,
      default: false,
    },
    // ...add next icon
    next: {
      type: Boolean,
      default: false,
    },
  },
}
// next tick-
</script>
<template>
  <NuxtLink
    :to="to"
    class="text-md text-secondary inline-flex items-center"
    :nuxt-link-active="activeClass"
    :class="{
      'font-medium': !light,
      'font-normal': light,
    }"
    v-on="$listeners"
  >
    <BaseIcon v-if="prev && !next" class="w-4 h-4 mr-xs" name="arrow-left" />
    <span>{{ text }}</span>
    <BaseIcon v-if="!prev && next" class="w-4 h-4 ml-xs" name="arrow-right" />
  </NuxtLink>
</template>
