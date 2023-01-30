<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'BaseCodeInput',
  components: { ValidationProvider },
  props: {
    length: {
      type: Number,
      default: 5,
    },
    value: {
      type: Number,
      default: undefined,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    digits() {
      if (typeof this.value === 'number') {
        return this.value.toString().split('').map(Number)
      }

      return Array(this.length).map((item) => undefined)
    },
  },
  methods: {
    handleInput(event, index) {
      const [first, ...rest] = event.target.value
      event.target.value = first ?? ''
      const inputsConcatenated = this.$refs.inputs
        .map((input) => input.value)
        .join('')
      if (inputsConcatenated.length > 0) {
        this.$emit('input', Number(inputsConcatenated))
      } else {
        this.$emit('input', undefined)
      }
      const isLastInput = index === this.length - 1
      const insertedContent = first !== undefined
      if (insertedContent && !isLastInput) {
        // continue to input the rest of the string
        this.$refs.inputs[index + 1].focus()
        this.$refs.inputs[index + 1].value = rest.join('')
        this.$refs.inputs[index + 1].dispatchEvent(new Event('input'))
      }
      this.$nextTick(this.validateAndSync)
    },
    handleDelete(value, index) {
      // if the keycode is backspace & the current field is empty
      // focus the input before the current. Then the event happens
      // which will clear the "before" input box.
      if (value === '') {
        this.$refs.inputs[Math.max(0, index - 1)].focus()
      }
      this.$nextTick(this.validateAndSync)
    },
    validateAndSync() {
      this.$refs.validationProvider.syncValue(this.value)
      this.$refs.validationProvider.validate(this.value)
    },
  },
}
</script>

<template>
  <ValidationProvider
    v-slot="{ errors }"
    ref="validationProvider"
    :rules="rules"
    slim
    :detect-input="false"
  >
    <div>
      <div class="flex space-x-2">
        <input
          v-for="i in length"
          :key="i"
          ref="inputs"
          :autofocus="autofocus && i === 1"
          type="number"
          class="block w-[55px] h-[55px] text-center bg-white outline-none rounded text-2xl text-zinc-500 font-bold"
          laptop="border border-solid border-zinc-500 w-[44px] h-[44px]"
          desktop-xl="w-[52px] h-[52px]"
          placeholder="_"
          :value="digits[i - 1]"
          @input="($e) => handleInput($e, i - 1)"
          @keyup.delete="($e) => handleDelete($e.target.value, i - 1)"
        />
      </div>
      <p v-if="errors.length" class="absolute text-sm mt-0.5 text-error">
        {{ errors[0] }}
      </p>
    </div>
  </ValidationProvider>
</template>
