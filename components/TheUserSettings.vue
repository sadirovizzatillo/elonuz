<script>
import BaseAccordionGroup from './BaseAccardionGroup.vue'
import BaseAccardionItem from './BaseAccardionItem.vue'
import { $pushQuery } from '~/mixins/pushQuery.js'
import { $deleteQuery } from '~/mixins/deleteQuery.js'
export default {
  name: 'TheUserSettings',
  components: { BaseAccordionGroup, BaseAccardionItem },
  mixins: [
    {
      methods: {
        $pushQuery,
        $deleteQuery,
      },
    },
  ],
  data() {
    return {
      category: '',
      accordionData: [
        {
          title: "E'lonlarni boshqarish",
          icon: 'clipboard',
          routeData: 'manage-ads',
          subMenu: [
            {
              title: 'Xulosa',
              routeName: 'user-manage-ads',
            },
            {
              title: "Chop etilgan e'lonlar",
              routeName: 'user-manage-ads-published-ads',
            },
            { title: 'Qoralamalar', routeName: 'user-manage-ads-draft' },
            { title: 'Rad etilganlar', routeName: 'user-manage-ads-rejected' },
          ],
        },
        {
          title: 'Sevimlilar',
          icon: 'heart',
          routeData: 'favorites',
          subMenu: [
            {
              title: 'Sevimli e’lonlar',
              routeName: 'user-favorites',
            },
            {
              title: 'Sevimli qidiruvlar',
              routeName: 'user-favorites-searches',
            },
            {
              title: 'Sevimli sotuvchilar',
              routeName: 'user-favorites-sellers',
            },
          ],
        },
        {
          title: 'Xabarlar va bildirishnomalar',
          icon: 'mail',
          routeData: 'notifications',
          subMenu: [
            {
              title: 'E’lonlardan kelgan xabarlar',
              routeName: 'user-notifications',
            },
            {
              title: 'Bildirishnomalar',
              routeName: 'user-notifications-notification',
            },
          ],
        },
        {
          title: 'Hisob',
          icon: 'settings',
          routeData: 'settings',
          subMenu: [
            {
              title: "Shaxsiy ma'lumot",
              routeName: 'user-settings',
            },
            {
              title: "Parolni o'zgartirish",
              routeName: 'user-settings-change-password',
            },
            {
              title: "A'zolikni bekor qilish",
              routeName: 'user-settings-membership',
            },
          ],
        },
      ],
    }
  },
  methods: {
    getRouteData(param) {
      this.category = param
    },
    pushRoute(param) {
      if (this.category) {
        this.$router.push(this.localePath({ name: param }))
      }
    },
  },
}
</script>
<template>
  <div class="pb-10 w-full">
    <div
      class="flex flex-col items-center mx-auto mobile:my-18 <mobile:mt-10 <mobile:mb-12 mobile:max-w-[60%] <mobile:max-w-full w-full"
    >
      <img
        class="mobile:w-24 mobile:h-24 <mobile:w-18 <mobile:h-18 block rounded-full mobile:mb-8 <mobile:mb-4"
        src="https://picsum.photos/id/1005/960/960"
        width="72"
        height="72"
        alt="Foydalanuvchi rasmi"
      />
      <p class="font-bold mobile:text-2xl <mobile:text-lg text-black mb-2">
        Davron Yo'ldashev
      </p>
      <p class="font-normal mobile:text-xs text-zinc-500 mb-6">
        2022 yil 10 fevraldan E'lon.com da mavjud
      </p>
    </div>
    <BaseAccordionGroup>
      <BaseAccardionItem
        v-for="(item, index) of accordionData"
        :key="index"
        :title="item.title"
        :icon="item.icon"
        :data-set="item.routeData"
        @onOpen="getRouteData"
      >
        <template slot="subMenu">
          <BaseAccordionSubMenu
            v-for="(el, idx) of item.subMenu"
            :key="idx"
            :title="el.title"
            :data-set="el.routeName"
            @onClick="pushRoute"
          />
        </template>
      </BaseAccardionItem>
    </BaseAccordionGroup>
    <BaseButton class="tablet:hidden w-full mobile:mt-18 <mobile:mt-10"
      >E'lon berish</BaseButton
    >
  </div>
</template>
