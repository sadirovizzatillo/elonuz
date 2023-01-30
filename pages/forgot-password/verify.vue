<script>
import { LAYOUTS } from '@/constants'
export default {
  name: 'ForgotPasswordVerifyPage',
  layout: LAYOUTS.LayoutAuth,
  head() {
    return {
      title: 'Tasdiqlash kodi',
    }
  },
  methods: {
    onSubmit(formData) {
      this.$router.push(this.localePath({ name: 'forgot-password-change' }))
    },
  },
}
</script>
<template>
  <AuthVerify @submit="onSubmit" />
</template>
