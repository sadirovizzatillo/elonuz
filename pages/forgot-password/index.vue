<script>
import { LAYOUTS } from '@/constants'
export default {
  name: 'ForgotPasswordPage',
  layout: LAYOUTS.LayoutAuth,
  data() {
    return {
      formData: {
        phoneNumber: '',
      },
    }
  },
  head() {
    return {
      title: 'Parolni tiklash',
    }
  },
  methods: {
    onSubmit() {
      this.$router.push(this.localePath({ name: 'forgot-password-verify' }))
    },
  },
}
</script>
<template>
  <div
    class="rounded flex flex-col justify-end flex-1 p-[32px]"
    laptop="bg-white justify-start flex-grow-0 p-12"
  >
    <h1 class="text-2xl font-semibold my-0" desktop-xl="text-4xl">
      Parolni tiklash
    </h1>
    <p class="text-sm mt-4" laptop="mt-8 text-zinc-600" desktop-xl="mt-6">
      Hisobingiz bilan bog'langan telefon raqamini kiriting va parolingizni
      qayta o'rnatish bo'yicha ko'rsatmalar bilan kod yuboramiz.
    </p>
    <ValidationObserver v-slot="{ handleSubmit }" slim>
      <form
        class="mt-8"
        desktop-xl="mt-[40px]"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <BaseInput
          v-model="formData.phoneNumber"
          name="phoneNumber"
          rules="required"
          label="Telefon raqami"
          input-wrapper-class="bg-white"
          block
          :mask="{
            mask: '{+998} 00 000 00 00',
            lazy: false,
            placeholderChar: ' ',
          }"
        />

        <section
          class="mt-[96px] flex flex-col space-y-4"
          laptop="mt-[41px]"
          desktop-xl="mt-[43px]"
        >
          <BaseButton html-type="submit">Davom etish</BaseButton>
          <BaseButton
            html-type="button"
            type="quaternary"
            @click="$router.go(-1)"
          >
            Orqaga
          </BaseButton>
        </section>
      </form>
    </ValidationObserver>
  </div>
</template>
