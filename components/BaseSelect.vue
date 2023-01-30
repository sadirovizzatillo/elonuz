<script>
export default {
  name: 'BaseSelect',
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: undefined,
    },
    optionLabel: {
      type: String,
      default: undefined,
    },
  },
}
</script>
<template>
  <div class="space-y-1">
    <label v-if="label">{{ label }}</label>
    <v-select v-bind="$attrs" :label="optionLabel" v-on="$listeners" />
  </div>
</template>

<style scoped lang="scss">
::v-deep {
  --vs-dropdown-option--active-bg: #ffca0f;
  --vs-search-input-placeholder-color: #7a7a7a;
  --vs-colors--light: #242424;
  --vs-border-width: 0;

  .vs {
    &__dropdown-toggle {
      background: #fff;
      height: 40px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      border-radius: 2px;
    }
  }
}
</style>
