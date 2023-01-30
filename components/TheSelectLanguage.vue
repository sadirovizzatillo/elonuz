<script>
import BaseIcon from './BaseIcon.vue'
export default {
  name: 'TheSelectLanguage',
  components: { BaseIcon },
  data() {
    return {
      isOpen: false,
      langs: ['Uz', 'Ru'],
      selectedLang: 'Uz',
    }
  },
  computed: {
    lang() {
      return this.langs.find((item) => this.selectedLang !== item)
    },
  },
  methods: {
    handleToggle() {
      this.isOpen = !this.isOpen
    },
    handleClose() {
      this.isOpen = false
    },
    selectLang(value) {
      this.selectedLang = value
      this.handleClose()
    },
  },
}
</script>
<template>
  <div class="relative">
    <button
      :class="[isOpen && 'z-10']"
      class="flex items-center mobile:py-2 mobile:px-2.5 <mobile:py-1 <mobile:px-2 rounded bg-secondary-dark relative"
      @click="handleToggle"
    >
      <p
        class="mobile:mr-4 <mobile:mr-3 font-medium mobile:text-sm <mobile:text-xs text-white"
      >
        {{ selectedLang }}
      </p>
      <BaseIcon name="chevron-down-bold" class="text-white w-2 h-1" />
    </button>
    <transition name="fast-fade">
      <ul
        v-if="isOpen"
        :class="[isOpen && 'z-10']"
        class="absolute top-[calc(100%-5px)] bg-secondary-dark w-full rounded pt-1 shadow-sm"
      >
        <li>
          <button
            class="text-left font-light mobile:text-sm <mobile:text-xs text-light-900 mobile:py-2 mobile:px-2.5 <mobile:py-1 <mobile:px-2 w-full hover:text-white"
            @click="selectLang(lang)"
          >
            {{ lang }}
          </button>
        </li>
      </ul>
    </transition>
    <button
      v-if="isOpen"
      class="fixed inset-0 bg-transparent z-0"
      aria-hidden="close"
      @click="handleClose"
    />
  </div>
</template>
