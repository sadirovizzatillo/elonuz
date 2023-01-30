<script>
import PrimaryLogo from "@/static/assets/Img/primary-logo.svg";
import { $pushQuery } from '~/mixins/pushQuery.js'


export default {
  name: "TheHeader",
    mixins: [
    {
      methods: {
        $pushQuery,
      },
    },
  ],
  data() {
    return {
      PrimaryLogo,
      menubarQuery: "menuBar",
      modalQuery: "userInfo",
    };
  },
};
</script>

<template>
  <div
    class="container flex items-center justify-between tablet:py-4 <tablet:py-4 <mobile:py-2"
  >
    <button class="tablet:sr-only" @click="$pushQuery(menubarQuery, true)">
      <BaseIcon name="menu" class="w-6 h-6 text-white" />
    </button>
    <NuxtLink
      to="/"
      class="mx-5 tablet:static <tablet:absolute <tablet:right-1/2 transform <tablet:translate-x-1/2 focus:outline-transparent"
    >
      <img
        class="block tablet:min-w-33 tablet:h-10 <tablet:min-w-25 <tablet:h-9 <mobile:min-w-24 <mobile:h-8"
        :src="PrimaryLogo"
        alt="E'lon bizda logo"
        width="132"
        height="40"
      />
    </NuxtLink>
    <div class="flex items-center relative">
      <TheSelectLanguage class="mr-6" />
      <BaseButton class="<tablet:hidden mr-6" size="small">E'lon berish</BaseButton>
      <button class="cursor-pointer" @click="$pushQuery(modalQuery, true)">
        <img
          class="tablet:min-w-10 tablet:h-10 <mobile:min-w-8 <mobile:h-8 rounded-full block"
          src="https://picsum.photos/id/1005/40/40"
          alt="Foydalanuvchi rasmi"
          width="32"
          height="32"
        />
      </button>
      <TheUserInfoModal class="<tablet:hidden" :query-name="modalQuery" />
      <BaseModal
        class="tablet:hidden"
        adaptive="tablet"
        title="Mening hisobim"
        :query-name="modalQuery"
      >
        <TheUserSettings />
      </BaseModal>
    </div>
    <BaseModal
      class="tablet:hidden"
      adaptive="tablet"
      title="Kategoriyalar"
      transition-type="open-to-left"
      :query-name="menubarQuery"
    >
      <AppMenuNavbar />
    </BaseModal>
  </div>
</template>
