<script>
export default {
  name: 'BaseRangeInput',
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Array,
      default: () => [undefined, undefined],
    },
    label: {
      type: String,
      default: undefined,
    },
    light: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleInputStart(value) {
      this.$emit('input', [value, this.value[1]])
    },
    handleInputEnd(value) {
      this.$emit('input', [this.value[0], value])
    },
  },
}
</script>

<template>
  <div class="flex flex-col space-y-1">
    <div>{{ label }}</div>
    <div class="flex space-x-4">
      <BaseInput
        :name="name + 'from'"
        :light="light"
        :dark="dark"
        :bordered="bordered"
        type="number"
        placeholder="dan"
        :value="value[0]"
        @input="handleInputStart"
      />
      <BaseInput
        :name="name + 'to'"
        :light="light"
        :dark="dark"
        type="number"
        :bordered="bordered"
        placeholder="...gacha"
        :value="value[1]"
        @input="handleInputEnd"
      />
    </div>
  </div>
</template>
