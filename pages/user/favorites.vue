<script>
export default {
  name: 'MangeAds',
  data() {
    return {
      navData: [
        {
          name: 'Sevimli e’lonlar',
          to: this.localePath({ name: 'user-favorites' }),
        },
        {
          name: 'Sevimli qidiruvlar',
          to: this.localePath({ name: 'user-favorites-searches' }),
        },
        {
          name: 'Sevimli sotuvchilar',
          to: this.localePath({ name: 'user-favorites-sellers' }),
        },
      ],
    }
  },
}
</script>

<template>
  <div class="flex tablet:space-x-6">
    <UserNavBar class="<tablet:hidden" :nav-data="navData" />
    <NuxtChild />
  </div>
</template>
