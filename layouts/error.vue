<template>
  <div
    class="flex flex-col items-center justify-center flex-1 h-full w-11/12 desktop:w-6/12 mx-auto"
  >
    <base-icon :name="icon" :class="iconSize" />
    <section
      class="text-center mt-[50px]"
      tablet="mt-[45px]"
      desktop="mt-[50px]"
    >
      <h1
        class="my-0 text-lg font-semibold text-secondary"
        tablet="text-2xl"
        desktop="text-[32px]"
      >
        {{ title }}
      </h1>
      <p
        class="mt-6 text-zinc-600 text-sm"
        tablet="text-base mt-[12px]"
        desktop="mt-6"
        v-html="description"
      />
    </section>
    <BaseButton
      :to="localePath('/')"
      class="mt-[167px]"
      tablet="mt-[131px]"
      desktop="mt-[104px]"
    >
      Bosh sahifaga qaytish
    </BaseButton>
  </div>
</template>

<script>
import { LAYOUTS } from '@/constants'

export default {
  name: 'ErrorPage',
  layout: LAYOUTS.LayoutWithoutFooter,
  props: {
    error: {
      type: Object,
      default: undefined,
    },
  },
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    icon() {
      return {
        404: '404',
        401: '401',
      }[this.error.statusCode]
    },
    iconSize() {
      return {
        404: 'w-[158px] h-[200px] tablet:(w-[187px] h-[236px]) desktop:(w-[239px] h-[301px])',
        401: 'w-[250px] h-[126px] tablet:(w-[350px] h-[176px]) desktop:(w-[470px] h-[236px])',
      }[this.error.statusCode]
    },
    title() {
      return {
        404: 'Sahifa topilmadi',
        401: 'Kirishga ruxsat berilmagan',
      }[this.error.statusCode]
    },
    description() {
      return {
        404: 'Kechirasiz, siz soʻragan sahifa topilmadi.<br/>Iltimos, bosh sahifaga qayting',
        401: 'Kechirasiz, kirish uchun ruxsat berilmagan safiha.<br/>Iltimos, bosh sahifaga qayting',
      }[this.error.statusCode]
    },
  },
}
</script>
