<script>
import TheFooter from '../components/TheFooter.vue'
import TheHeader from '../components/TheHeader.vue'
export default {
  name: 'LayoutMain',
  components: { TheFooter, TheHeader }
}
</script>

<template>
  <div>
    <header class="header"><TheHeader /></header>
    <main class="main container pt-8">
      <Nuxt />
    </main>
    <footer class="footer"><TheFooter /></footer>
  </div>
</template>
