<script>
export default {
  name: 'MangeAds',
  data() {
    return {
      navData: [
        {
          name: 'Shaxsiy ma\'lumot',
          to: this.localePath({ name: 'user-settings' }),
        },
        {
          name: 'Parolni o\'zgartirish',
          to: this.localePath({ name: 'user-settings-change-password' }),
        },
        {
          name: 'A\'zolikni bekor qilish',
          to: this.localePath({ name: 'user-settings-membership' }),
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
