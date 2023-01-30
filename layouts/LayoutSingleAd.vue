<script>
import { LAYOUTS } from '../constants.js'
export default {
  name: LAYOUTS.LayoutSingleAd,
  computed: {
    statusVisable() {
      return this.$route.query.status?.toLowerCase() === 'rejected'
    },
  },
}
</script>

<template>
  <div class="<laptop:bg-light-500">
    <header class="header-position">
      <div class="header-style">
        <TheHeader />
      </div>
      <nav class="w-full h-16 bg-white laptop:shadow">
        <div class="container py-6">
          <BaseLink to="/" text="Orqaga" prev />
        </div>
      </nav>
    </header>
    <main class="main laptop:container pt-6">
      <article v-if="statusVisable" class="bg-white mb-8 <laptop:mb-0 <laptop:py-5 border-b border-zinc-200">
        <div class="flex items-center max-w-full <laptop:mx-4 p-4.5 <mobile:p-4 bg-red-50 border border-red-400 rounded">
          <BaseIcon
            class="inline-flex items-center justify-center w-5 h-5 text-red-400 border-[2px] border-current rounded-full children:w-2 children:h-2"
            name="close"
          />
          <p class="text-red-400 ml-4.5 <mobile:text-sm">
            Ma’lumotlar to’g’ri ko’rsatilmagan
          </p>
        </div>
      </article>
      <div class="flex items-start">
        <section class="laptop:w-[calc(100%-276px)] <laptop:w-full mr-6">
          <Nuxt />
        </section>
        <section class="max-w-69 w-full <laptop:hidden">
          <SingleAdBarArticles />
        </section>
      </div>
    </main>
    <footer class="footer"><TheFooter /></footer>
  </div>
</template>
