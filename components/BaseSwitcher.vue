<script>
// TODO make switechr
export default {
  props: {
    /**
     * Label text of the switcher
     */
    label: {
      type: String,
      default: undefined,
    },
    /**
     * Add default checked to the switcher
     */
    defaultChecked: {
      type: Boolean,
      default: false,
    },
    /**
     * Should switcher disabled?
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
    methods: {
    handleSwitcher(event) {
      this.$emit("input", event.target.checked)
    }
  }
};
</script>

<template>
  <label class="w-full inline-flex items-center justify-between">
    <p v-if="!!label" class="font-medium text-sm text-dark-400">{{ label }}</p>
    <input
      @change="handleSwitcher"
      v-on="$attrs"
      class="sr-only switcher"
      type="checkbox"
      name="switcher"
      :disabled="disabled"
      :checked="defaultChecked"
    />
    <div
      class="w-9 h-5 border-2 cursor-pointer bg-secondary border-secondary rounded-xl relative transition-all"
    >
      <span
        class="w-4 h-4 border-2 border-secondary rounded-full bg-white absolute top-0 right-1/100 transition-all"
      ></span>
    </div>
  </label>
</template>

<style></style>
