<script>
export default {
  name: 'UserNavBar',
  props: {
    navData: {
      type: Array,
      default: null,
      require: true
    }
  }
}
</script>

<template>
  <nav>
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
</template>
