<script>
export default {
  name: "BaseTabItem",
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<template>
  <div v-show="isActive" class="p-4 bg-neutral-100">
    <slot />
  </div>
</template>
