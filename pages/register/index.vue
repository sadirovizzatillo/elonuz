<script>
import { LAYOUTS } from '~/constants'

export default {
  name: 'RegisterPage',
  layout: LAYOUTS.LayoutAuth,
  data() {
    return {
      formData: {
        firstname: '',
        lastname: '',
        phoneNumber: '',
        password: '',
        agree1: false,
        agree2: false,
      },
    }
  },
  head() {
    return {
      title: "Ro'yxatdan o'tish",
    }
  },
  methods: {
    onSubmit() {
      this.$router.push(this.localePath({ name: 'register-verify' }))
    },
  },
}
</script>

<template>
  <div
    class="rounded w-full"
    bg="laptop:white"
    text="4xl"
    p="x-xl laptop:y-xl desktop:x-2xl desktop:t-2xl desktop:b-[40px]"
  >
    <h2 class="my-0 py-0" text="2xl desktop-xl:4xl" font="semibold">
      Ro'yxatdan o'tish
    </h2>
    <ValidationObserver v-slot="{ handleSubmit }" slim>
      <form
        class="flex flex-col"
        m="t-lg laptop:t-[40px] desktop-xl:t-2xl"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <main class="space-y-4 laptop:space-y-6 flex flex-col">
          <section class="flex space-x-6">
            <BaseInput
              v-model="formData.firstname"
              name="firstname"
              label="Ism"
              placeholder="Ixtiyorjon"
              rules="required"
              block
              input-wrapper-class="bg-white"
            />
            <BaseInput
              v-model="formData.lastname"
              name="lastname"
              label="Familiya"
              placeholder="Hakimov"
              rules="required"
              block
              input-wrapper-class="bg-white"
            />
          </section>
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

          <BaseInput
            v-model="formData.password"
            name="password"
            input-wrapper-class="bg-white"
            type="password"
            rules="required"
            label="Parol"
            placeholder="*********"
            block
          />
        </main>
        <div class="flex flex-col mt-lg space-y-4" desktop-xl="mt-[44px]">
          <BaseCheckbox
            v-model="formData.agree1"
            name="agree1"
            :rules="{ required: { allowFalse: false } }"
            label="Men obuna shartnomasi va uning ilovalarini qabul qilaman."
          />
          <BaseCheckbox
            v-model="formData.agree2"
            name="agree2"
            :rules="{ required: { allowFalse: false } }"
            label="Kompaniya, reklama va reklama mazmuni bilan bog'liq bo'lgan kontakt ma'lumotlarimga tijorat elektron xabarlarini yuborishga ruxsat beraman, shu maqsadda shaxsiy ma'lumotlarimni qayta ishlayman va etkazib beruvchilaringiz bilan baham ko'raman."
          />
        </div>
        <BaseButton
          class="hidden laptop:flex mt-4 desktop-xl:mt-[27px]"
          size="large"
        >
          Ro'yhatdan o'tish
        </BaseButton>
        <BaseButton
          class="laptop:hidden mt-4 desktop-xl:mt-[27px]"
          size="extra-small"
        >
          Ro'yhatdan o'tish
        </BaseButton>
        <BaseButton
          class="mt-4"
          size="extra-small"
          laptop="hidden"
          type="quaternary"
        >
          Orqaga
        </BaseButton>
      </form>
    </ValidationObserver>
  </div>
</template>
