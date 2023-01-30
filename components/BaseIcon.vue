
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <!-- eslint-disable -->
  <div v-html="require(`../../common/icons/${name}.svg?raw`)" />
 <!-- eslint-enable -->
</template>
