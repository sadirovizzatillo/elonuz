<script>
import BaseIcon from './BaseIcon.vue'
import { COMPONENT_SIZES, CHECKBOX_TYPES } from '@/constants'

export default {
  components: { BaseIcon },
  props: {
    name: {
      type: String,
      default: '',
    },
    /**
     * Label text of the checkbox
     */
    label: {
      type: String,
      default: undefined,
    },
    /**
     * Add default checked to the checkbox
     */
    defaultChecked: {
      type: Boolean,
      default: false,
    },
    /**
     * Should checkbox disabled?
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Size of the checkbox
     */
    size: {
      type: String,
      default: COMPONENT_SIZES.BASE,
      validator(value) {
        return Object.values(COMPONENT_SIZES).includes(value)
      },
    },
    /**
     * Type of the checkbox
     */
    type: {
      type: String,
      default: CHECKBOX_TYPES.BASE,
      validator(value) {
        return Object.values(CHECKBOX_TYPES).includes(value)
      },
    },
    rules: {
      type: [String, Object],
      default: undefined,
    },
    vid: {
      type: String,
      default: undefined,
    },
  },

  data() {
    return {
      COMPONENT_SIZES,
      CHECKBOX_TYPES,
    }
  },
  methods: {
    handleCheckbox(event) {
      this.$emit('input', event.target.checked)
    },
  },
}
</script>

<template>
  <ValidationProvider
    v-slot="{ errors }"
    :name="name"
    :rules="rules"
    :vid="vid"
    tag="div"
  >
    <label class="inline-flex items-start cursor-pointer">
      <input
        class="sr-only siblings:disabled:opacity-50 siblings:disabled:cursor-not-allowed"
        :class="{
          'checkbox-base': type === CHECKBOX_TYPES.BASE,
          'checkbox-asterisk': type === CHECKBOX_TYPES.ASTERISK,
        }"
        type="checkbox"
        :disabled="disabled"
        :checked="defaultChecked"
        v-bind="$attrs"
        v-on="$listeners"
        @change="handleCheckbox"
      />
      <span
        class="checkbox"
        :class="{
          'min-w-5 h-5': size === COMPONENT_SIZES.BASE,
          'min-w-4 h-4': size === COMPONENT_SIZES.SMALL,
        }"
      >
        <BaseIcon
          :class="{
            'text-transparent': type === CHECKBOX_TYPES.BASE,
            'text-zinc-300 opacity-50': type === CHECKBOX_TYPES.ASTERISK,
          }"
          :name="type === CHECKBOX_TYPES.ASTERISK ? 'star' : 'checkmark'"
        />
      </span>
      <p v-if="!!label" class="font-medium text-sm text-dark-400 pl-3xs">
        {{ label }}
      </p>
    </label>
    <p v-if="errors" class="text-sm text-error">{{ errors[0] }}</p>
  </ValidationProvider>
</template>
