<script>
import { $deleteQuery } from '~/mixins/deleteQuery.js'

export default {
  name: 'TheUserInfoModal',
    mixins: [
    {
      methods: {
        $deleteQuery,
      },
    },
  ],
  props: {
    queryName: {
      type: String,
      default: 'modal',
    },
  },
  data() {
    return {
      userInfo: [
        {
          to: this.localePath({ name: 'user-manage-ads' }),
          icon: 'clipboard',
          text: "E'lonlarni boshqarish",
        },
        {
          to: this.localePath({ name: 'user-favorites' }),
          icon: 'heart',
          text: 'Sevimlilar',
        },
        {
          to: this.localePath({ name: 'user-notifications' }),
          icon: 'mail',
          text: 'Xabarlar va bildirishnomalar',
        },
        {
          to: this.localePath({ name: 'user-settings' }),
          icon: 'settings',
          text: 'Hisob',
        },
      ],
    }
  },
  computed: {
    isVisible() {
      return !!this.$route.query[this.queryName]
    },
  },
}
</script>
<template>
  <div>
    <transition name="fast-fade">
      <div v-if="isVisible">
        <div
          class="before:fixed before:top-0 before:left-0 before:z-0 before:w-screen before:h-screen before:text-transparent before:content-open-quote before:block"
          @click="$deleteQuery(queryName)"
        />
        <div
          class="absolute z-50 -right-2 top-[calc(100%+10px)] min-w-75 rounded-lg px-4 py-6 bg-white shadow-xl"
          @click.stop
        >
          <span
            class="absolute -top-7 right-3.5 border-t-18 border-l-12 border-r-12 border-b-18 border-b-white border-transparent"
          ></span>

          <div
            class="flex pb-6 mb-8 border-b-1 border-secondary border-opacity-10"
          >
            <img
              class="block w-12 h-12 mr-4 rounded-full"
              src="https://picsum.photos/id/1005/40/40"
              alt="Foydalanuvchi rasmi"
              width="44"
              height="44"
            />
            <div>
              <p class="font-bold text-sm text-black m-0">Davron Yo'ldashev</p>
              <p class="font-normal text-[11px] text-zinc-500 m-0 mb-1.5">
                2022 yil 10 fevraldan E'lon.com da mavjud
              </p>
            </div>
          </div>
          <ul class="flex flex-col">
            <li
              v-for="(item, index) of userInfo"
              :key="index"
              class="not-last:mb-11.5"
            >
              <NuxtLink
                :to="item.to"
                class="flex items-center children:hover:text-sky-700 focus:outline-transparent"
                active-class="!children:text-sky-700 focus:outline-transparent"
              >
                <BaseIcon
                  :name="item.icon"
                  class="children:w-6 children:h-6 mr-5 text-zinc-800"
                />
                <p class="font-medium text-md text-zinc-800">{{ item.text }}</p>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
.fast-fade-enter-active,
.fast-fade-leave-active {
  transition: opacity 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.fast-fade-enter, .fast-fade-leave-to /* .fast-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
