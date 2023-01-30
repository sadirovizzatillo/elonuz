<script>
import { LAYOUTS } from '@/constants'
export default {
  name: 'RegisterVerifyPage',
  layout: LAYOUTS.LayoutAuth,
  head() {
    return {
      title: 'Tasdiqlash kodi',
    }
  },
  methods: {
    onSubmit() {},
  },
}
</script>

<template>
  <AuthVerify />
</template>
