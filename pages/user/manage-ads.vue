<script>
export default {
  name: 'MangeAds',
  data() {
    return {
      navData: [
        {
          name: 'Xulosa',
          to: this.localePath({ name: 'user-manage-ads' }),
        },
        {
          name: 'Chop etilgan e’lonlar',
          to: this.localePath({ name: 'user-manage-ads-published-ads' }),
        },
        {
          name: 'Qoralamalar',
          to: this.localePath({ name: 'user-manage-ads-draft' }),
        },
        {
          name: 'Rad etilganlar',
          to: this.localePath({ name: 'user-manage-ads-rejected' }),
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
