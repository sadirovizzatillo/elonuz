<script>
export default {
  name: 'LayoutAuth',
}
</script>
<template>
  <div
    class="layout-auth"
    w="screen"
    h="screen"
    bg="no-repeat cover"
    flex="~ col laptop:row"
  >
    <section
      class="hidden laptop:flex w-5/12 desktop:w-1/2 p-2xl desktop-xl:p-[64px] h-full flex-col justify-between"
    >
      <nuxt-link to="/">
        <AppLogo />
      </nuxt-link>
      <h1 text="[40px] desktop:6xl secondary" font="bold">
        Barcha turdagi <br />
        e’lonlar
      </h1>
    </section>
    <section
      class="flex flex-col justify-between items-center laptop:justify-center"
      w="full laptop:w-7/12 desktop:1/2"
      h="full"
      bg="desktop:secondary"
      p="y-xl laptop:x-[96px] laptop:y-[82px] desktop-xl:x-[241px] desktop-xl:y-[214px]"
    >
      <nuxt-link to="/" class="laptop:hidden">
        <AppLogo />
      </nuxt-link>
      <Nuxt />
    </section>
  </div>
</template>

<style>
.layout-auth {
  background-image: url('~/assets/images/auth-bg.webp');
}

@media all and (min-width: 1200px) {
  .layout-auth {
    background-image: url('~/assets/images/auth-bg-lg.webp');
  }
}

@media all and (min-width: 1920px) {
  .layout-auth {
    background-image: url('~/assets/images/auth-bg-xl.webp');
  }
}
</style>
