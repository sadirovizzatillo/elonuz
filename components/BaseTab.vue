<script>
export default {
  name: 'BaseTab',
  props: {
    value: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      tabs: [],
    }
  },
  created() {
    this.tabs = this.$children
  },
  mounted() {
    if (this.value) {
      this.selectTab(this.value)
    } else if (this.tabs.length > 0) {
      this.selectTab(this.tabs[0].name)
    }
  },
  methods: {
    selectTab(name) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === name
      })
    },
  },
}
</script>

<template>
  <div v-bind="$attrs" v-on="$listeners">
    <header class="flex border-b-8 border-primary border-solid">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        class="font-bold px-lg py-sm text-sm transition-colors duration-200"
        :class="[
          tab.isActive ? 'bg-primary text-black' : 'bg-[#f6f7fa] text-zinc-500',
        ]"
        @click="selectTab(tab.name)"
      >
        {{ tab.title }}
      </button>
    </header>
    <slot />
  </div>
</template>
