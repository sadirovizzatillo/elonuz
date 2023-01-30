<script>
export default {
  name: 'UserSettingsIndex',
    middleware({redirect, app}) {
    redirect(app.localePath('/user/manage-ads'))
  }
}
</script>

<template>
  <div>
    <h1>index</h1>
  </div>
</template>
