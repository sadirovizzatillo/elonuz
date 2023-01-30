<script>
export default {
  name: 'MangeAds',
  data() {
    return {
      navData: [
        {
          name: 'E’lonlardan kelgan xabarlar',
          to: this.localePath({ name: 'user-notifications' }),
        },
        {
          name: 'Bildirishnomalar',
          to: this.localePath({ name: 'user-notifications-notification' }),
        },
      ],
    }
  },
}
</script>

<template>
  <div class="flex tablet:space-x-6 ">
    <nav class="<tablet:hidden">
      <ul class="flex flex-col">
        <li
          v-for="item of navData"
          :key="item.to"
          class="w-69 border-b border-zinc-500"
        >
          <NuxtLink
            :to="item.to"
            class="inline-block w-full p-4 font-semibold text-sm text-zinc-700 focus:outline-none"
            exact-active-class="bg-white !text-sky-700"
            >{{ item.name }}</NuxtLink
          >
        </li>
      </ul>
    </nav>
    <NuxtChild />
  </div>
</template>
