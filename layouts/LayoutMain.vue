<script>
import { LAYOUTS } from '../constants.js'

export default {
  name: LAYOUTS.LayoutMain,
}
</script>

<template>
  <div>
    <header class="header">
      <TheHeader/>
    </header>
    <main class="main container flex items-start">
      <AppMenuNavbar class="<tablet:hidden" />
      <section class="w-full overflow-y-auto pt-6 scrollbar">
        <Nuxt />
      </section>
    </main>
    <footer class="footer"><TheFooter /></footer>
  </div>
</template>

<style>
.open-to-left-enter-active,
.open-to-left-leave-active {
  opacity: 1;
  transition: transform 0.4s ease, opacity 0.4s linear;
}

.open-to-left-enter,
.open-to-left-leave-to {
  opacity: 1;
  transform: translateX(-100%);
}
</style>
