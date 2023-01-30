<template>
  <div
    class="flex flex-col justify-end flex-1 p-8"
    laptop="rounded bg-white flex-grow-0 justify-start"
    desktop-xl="p-12"
  >
    <h1 class="my-0 text-2xl font-semibold" desktop-xl="text-4xl">
      Yangi parol yarating
    </h1>
    <p class="text-sm text-dark-400 mt-4" laptop="mt-8" desktop-xl="mt-6">
      Yangi parolingiz avvalgi ishlatilgan parollardan farq qilishi kerak!
    </p>
    <ValidationObserver v-slot="{ handleSubmit }" slim>
      <form
        class="mt-8"
        laptop="mt-6"
        desktop-xl="mt-8"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <section class="flex flex-col space-y-6">
          <BaseInput
            v-model="formData.password"
            name="Yangi parol"
            rules="required|confirmed:passwordConfirmation"
            label="Yangi parol"
            type="password"
            block
            input-wrapper-class="bg-white"
            :bordered="{ laptop: true }"
            placeholder="*********"
            hint="Kamida 8 ta belgidan iborat boʻlishi kerak."
            show-password-on="click"
          />
          <BaseInput
            v-model="formData.passwordConfirmation"
            vid="passwordConfirmation"
            name="Parolni takrorlang"
            rules="required"
            label="Parolni takrorlang"
            type="password"
            block
            input-wrapper-class="bg-white"
            placeholder="*********"
            :bordered="{ laptop: true }"
            hint="Ikkala parol ham mos kelishi kerak."
            show-password-on="click"
          />
        </section>
        <BaseButton class="mt-18 w-full" laptop="mt-8">
          Parolni saqlash
        </BaseButton>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { LAYOUTS } from '@/constants'
export default {
  name: 'ForgotPasswordChangePage',
  layout: LAYOUTS.LayoutAuth,
  data() {
    return {
      formData: {
        password: '',
        passwordConfirmation: '',
      },
    }
  },
  head() {
    return {
      title: 'Yangi parol yarating',
    }
  },
  methods: {
    onSubmit() {},
  },
}
</script>
