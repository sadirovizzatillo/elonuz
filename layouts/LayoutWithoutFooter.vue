<template>
  <div>
    <header class="header">
      <TheHeader />
    </header>
    <main class="main container pt-8 flex flex-col">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'LayoutWithoutFooter',
}
</script>
