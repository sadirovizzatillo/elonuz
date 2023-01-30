<script>
export default {
  name: 'AppSearchForm',
    props: {
    bgColor: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      inputSearch: '',
    }
  },
  computed: {
    inputBgColor() {
      return this.bgColor ? this.bgColor : 'bg-light-600'
    }
  }
}
</script>
<template>
  <form>
    <div class="flex">
      <BaseInput
        v-model="inputSearch"
        class="w-full rounded"
        :class="inputBgColor"
        name="large-input"
        placeholder="Qidiruv"
        size="large"
        clearable
        type="search"
        :bordered="false"
        :show-message="false"
      />
      <BaseButton class="transform -translate-x-1.5 px-11.5" size="large">
        Qidiruv
      </BaseButton>
    </div>
  </form>
</template>
