<script>
/**
 * Input component.
 * @displayName Base Input
 */
import { IMaskComponent } from 'vue-imask'
import { COMPONENT_SIZES } from '@/constants'

export default {
  components: {
    BaseIcon: () => import('./BaseIcon.vue'),
    'imask-input': IMaskComponent,
  },
  props: {
    /**
     * Name of the input element. It is also used for label element so it's good to give input a name
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * Label of the input
     */
    label: {
      type: String,
      default: undefined,
    },
    /**
     * Small message at the bottom of the input
     */
    hint: {
      type: String,
      default: undefined,
    },
    /**
     * Value of the input.
     */
    value: {
      type: [String, Number],
      default: undefined,
    },
    /**
     * Should component get 100% of its parent?
     */
    block: {
      type: Boolean,
      default: false,
    },
    /**
     * Makes input clearable
     */
    clearable: {
      type: Boolean,
      default: false,
    },
    /**
     * Adds border to the input
     */
    bordered: {
      type: [Boolean, Object],
      default: true,
    },
    /**
     * Size of the input
     */
    size: {
      type: String,
      default: COMPONENT_SIZES.BASE,
      validator(value) {
        return Object.values(COMPONENT_SIZES).includes(value)
      },
    },
    type: {
      type: String,
      default: 'text',
    },
    /**
     * When type of input is password, you can add a button with eye icon to show password.
     * It accepts 2 values: click and mousedown
     */
    showPasswordOn: {
      type: String,
      default: undefined,
      validator(value) {
        return ['click', 'mousedown'].includes(value)
      },
    },
    inputClass: {
      type: String,
      default: undefined,
    },
    inputWrapperClass: {
      type: String,
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: Object,
      default: undefined,
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
      inputType: 'text',
    }
  },
  computed: {
    showPasswordEvents() {
      if (this.showPasswordOn === 'click') {
        return {
          click: () => {
            this.inputType = this.inputType === 'password' ? 'text' : 'password'
          },
        }
      }

      return {
        mousedown: () => {
          this.inputType = 'text'
        },
        mouseup: () => {
          this.inputType = 'password'
        },
      }
    },
    eventListeners() {
      const inputEvents = ['input', 'change', 'keyup', 'keydown']
      return Object.fromEntries(
        Object.entries(this.$listeners).filter(
          ([key]) => !inputEvents.includes(key)
        )
      )
    },
    borderClass() {
      const classNames = {
        default: 'border border-solid border-zinc-500',
        mobile: 'mobile:(border border-solid border-zinc-500)',
        laptop: 'laptop:(border border-solid border-zinc-500)',
        desktop: 'desktop:(border border-solid border-zinc-500)',
        'desktop-xl': 'desktop-xl:(border border-solid border-zinc-500)',
      }

      if (typeof this.bordered === 'boolean' && this.bordered) {
        return classNames.default
      }

      if (typeof this.bordered === 'object' && this.bordered) {
        return Object.entries(this.bordered)
          .map(([screen, isEnabled]) => (isEnabled ? classNames[screen] : ''))
          .join(' ')
      }

      return ''
    },
  },
  watch: {
    type: {
      handler(value) {
        this.inputType = value
      },
      immediate: true,
    },
  },
  methods: {
    handleClear() {
      this.$emit('input', '')
      this.$emit('clear')
    },
    handleInput(event) {
      this.$emit('input', event.target.value)
    },
    onAccept(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<template>
  <ValidationProvider
    v-slot="{ errors }"
    :vid="vid"
    :name="name"
    :rules="rules"
    slim
  >
    <div
      class="space-y-1 inline-flex flex-col"
      :class="{
        'text-sm laptop:text-base': size === COMPONENT_SIZES.BASE,
        'text-sm': size === COMPONENT_SIZES.SMALL,
        'text-lg': size === COMPONENT_SIZES.LARGE,
        'w-full': block,
      }"
      v-bind="$attrs"
      v-on="eventListeners"
    >
      <label v-if="label" :for="name" class="select-none">
        {{ label }}
      </label>
      <div
        class="inline-flex items-center rounded"
        :class="[
          {
            'bg-white': light,
            'input-base': size === COMPONENT_SIZES.BASE,
            'input-sm': size === COMPONENT_SIZES.SMALL,
            'input-lg': size === COMPONENT_SIZES.LARGE,
          },
          dark ? 'input-dark bg-secondary text-white' : 'input',
          borderClass,
          inputWrapperClass,
        ]"
      >
        <slot name="prefix" />
        <imask-input
          v-if="mask"
          :id="name"
          :value="value"
          v-bind="mask"
          :unmask="true"
          :placeholder="placeholder"
          :readonly="readonly"
          class="outline-none w-full bg-transparent"
          :class="[inputClass, { 'text-white placeholder-white': dark }]"
          @accept="onAccept"
        />
        <input
          v-else
          :id="name"
          :readonly="readonly"
          :placeholder="placeholder"
          :type="inputType"
          :value="value"
          class="outline-none w-full bg-transparent"
          :class="[inputClass, { 'text-white placeholder-white': dark }]"
          @input="handleInput"
          @blur="$emit('blur')"
        />
        <button
          v-if="clearable"
          class="transition-transform duration-300 transform focus:outline-none"
          :class="{ 'scale-0': !value }"
          tabindex="-1"
          @click.stop="handleClear"
        >
          <BaseIcon
            name="close"
            :class="{
              'w-3 h-3': size === COMPONENT_SIZES.SMALL,
              'w-5 h-5': size === COMPONENT_SIZES.BASE,
              'w-6 h-6': size === COMPONENT_SIZES.LARGE,
            }"
          />
        </button>
        <button
          v-if="!!showPasswordOn"
          type="button"
          class="mx-1 focus:outline-none"
          tabindex="-1"
          v-on="showPasswordEvents"
        >
          <BaseIcon
            class="w-5 h-5"
            :name="inputType === 'password' ? 'eye-off' : 'eye-on'"
          />
        </button>

        <slot name="suffix" />
      </div>
      <span v-if="hint" class="text-zinc-600 text-sm font-normal">
        {{ hint }}
      </span>
      <span v-if="errors.length" class="text-error text-[0.9em]">
        {{ errors[0] }}
      </span>
    </div>
  </ValidationProvider>
</template>
