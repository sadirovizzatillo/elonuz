<script>
export default {
  name: "BaseCard",
};
</script>

<template>
  <div class="box-border">
    <header class="flex justify-between items-center">
      <span><slot name="title"></slot></span>
      <span><slot name="header-extra"></slot></span>
    </header>
    <slot></slot>
  </div>
</template>
