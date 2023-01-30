<script>
export default {
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    /**
     * Label text of the radio
     */
    label: {
      type: String,
      default: undefined,
    },
    /**
     * Value text of the radio
     */
    value: {
      type: String,
      default: undefined,
    },
    /**
     * Name text of the radio
     */
    name: {
      type: String,
      default: undefined,
    },
    /**
     * Add default checked to the radio
     */
    defaultChecked: {
      type: Boolean,
      default: false,
    },
    /**
     * Should radio disabled?
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleRadio(event) {
      this.$emit("change", event.target.value)
    },
  },
};
</script>

<template>
  <label
  class="inline-flex items-center relative <tablet:py-5.5 w-full cursor-pointer
  <tablet:border-b border-secondary border-opacity-10 ">
    <input
      class="sr-only
      tablet:siblings:children:checked:bg-dark-400
      <tablet:siblings:children:checked:text-success
      <tablet:sibling:checked:bg-light-600
      siblings:disabled:opacity-50
      siblings:disabled:cursor-not-allowed"
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      :checked="defaultChecked"
      @change="handleRadio"
      v-on="$attrs"
    />
    <span class="tablet:hidden absolute inset-0 w-full h-full"></span>
    <span
      class="inline-flex items-center justify-center <tablet:hidden min-w-4 h-4 rounded-full border-2 border-dark-400 bg-transparent"
    >
      <span class="min-w-2 h-2 rounded-full bg-transparent"></span>
    </span>
    <p v-if="!!label" class="font-normal relative z-10 text-md <tablet:ml-4 text-dark-400 pl-2">
      {{ label }}
    </p>
    <BaseIcon name="checkmark" class="tablet:hidden relative z-10 w-4 h-4 mr-4 text-transparent ml-auto"/>
  </label>
</template>
