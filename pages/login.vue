<script>
import { LAYOUTS } from '~/constants'

export default {
  name: 'LoginPage',
  layout: LAYOUTS.LayoutAuth,
  data() {
    return {
      formData: {
        phoneNumber: '',
        password: '',
      },
    }
  },
  head() {
    return {
      title: 'Kirish',
    }
  },
  computed: {
    isMobileOrTablet() {
      return ['mobile', 'tablet'].includes(this.$mq)
    },
    isInputLight() {
      return ['mobile', 'tablet'].includes(this.$mq)
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
    <h2 class="my-0 py-0" text="2xl desktop-xl:4xl" font="semibold">Kirish</h2>
    <form class="flex flex-col" m="t-lg laptop:t-[40px] desktop-xl:t-2xl">
      <BaseInput
        v-model="formData.phoneNumber"
        label="Telefon raqami"
        name="phoneNumber"
        :mask="{
          mask: '{+998} 00 000 00 00',
          lazy: false,
          placeholderChar: ' ',
        }"
        block
        light
        clearable
        :bordered="{ laptop: true }"
      />
      <BaseInput
        v-model="formData.password"
        class="mt-md laptop:mt-lg"
        name="password"
        label="Parol"
        placeholder="••••••••"
        light
        :bordered="{ laptop: true }"
        show-password-on="click"
        block
        clearable
      />
      <section class="flex justify-between mt-md">
        <BaseCheckbox label="Eslab qolish" />
        <nuxt-link
          :to="localePath({ name: 'forgot-password' })"
          class="font-normal text-sky-700 text-sm laptop:text-md"
        >
          Parolni unutdingizmi?
        </nuxt-link>
      </section>
      <BaseButton
        class="w-full mt-[40px] laptop:mt-2xl desktop:mt-[64px]"
        :size="isMobileOrTablet ? 'base' : 'large'"
      >
        Kirish
      </BaseButton>
      <section
        class="flex"
        justify="between"
        mt="[32px] laptop:[40px] desktop:[48px]"
        text="sm"
        p="x-md"
      >
        <p>Ro'yhatdan o'tmaganmisiz?</p>
        <nuxt-link to="/register" class="text-sky-700 text-sm" font="semibold">
          Ro'yxatdan o'ting
        </nuxt-link>
      </section>
      <p class="leading-sm" m="t-lg laptop:t-xl" text="xs laptop:sm">
        Bu sayt reCAPTCHA tomonidan himoyalangan va Google Maxfiylik siyosati va
        Foydalanish shartlari amal qiladi.
      </p>
    </form>
  </div>
</template>
