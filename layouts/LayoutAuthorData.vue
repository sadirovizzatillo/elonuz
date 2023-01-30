<script>
import { LAYOUTS } from '../constants.js'
export default {
  name: LAYOUTS.LayoutAuthorData,
}
</script>

<template>
  <div>
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
    <main class="main container flex items-start pt-6">
      <section class="w-full overflow-y-auto scrollbar">
        <Nuxt />
      </section>
    </main>
    <footer class="footer"><TheFooter /></footer>
  </div>
</template>
