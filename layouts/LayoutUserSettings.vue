<script>
import { LAYOUTS } from '../constants.js'

export default {
  name: LAYOUTS.LayoutUserSettings,
  data() {
    return {
      pageNav: [
        {
          name: 'E’lonlarni boshqarish',
          to: this.localePath({ name: 'user-manage-ads' }),
        },
        {
          name: 'Sevimlilar',
          to: this.localePath({ name: 'user-favorites' }),
        },
        {
          name: 'Xabarlar va bildirishnomalar',
          to: this.localePath({ name: 'user-notifications' }),
        },
      ],
    }
  },
}
</script>

<template>
  <div>
    <header class="header-position">
      <div class="header-style">
        <TheHeader />
      </div>
      <nav class="<tablet:hidden w-full h-16 bg-white shadow">
        <ul class="container flex h-full">
          <li v-for="(item, index) of pageNav" :key="index" class="h-full">
            <NuxtLink
              :to="item.to"
              class="inline-flex items-center font-normal text-sm text-zinc-600 border-b border-transparent h-full px-4 focus:outline-none"
              active-class="!bg-light-500 !text-sky-700 !border-sky-700"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
          <li class="h-full">
            <NuxtLink
              :to="localePath({ name: 'user-settings' })"
              class="inline-flex items-center font-normal text-sm text-sky-700 border-b border-transparent h-full px-4 focus:outline-none"
              active-class="!bg-light-500 !border-sky-700"
            >
              <BaseIcon name="settings" class="children:w-3 children:h-3 text-sky-700 mr-2.5" />
              Hisob
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <main class="main bg-light-500">
      <section class="w-full container overflow-y-auto pt-6 scrollbar">
        <Nuxt />
      </section>
    </main>
    <footer class="footer"><TheFooter /></footer>
  </div>
</template>
