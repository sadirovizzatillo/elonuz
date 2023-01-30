<script>
export default {
  props: {
    // Get or set value for v-model
    value: {
      type: Number,
      default: 0
    },
    pageCount: {
      type: Number,
      required: true,
    },
    clickHandler: {
      type: Function,
      default: () => {},
    },
    pageRange: {
      type: Number,
      default: 3,
    },
    marginPages: {
      type: Number,
      default: 1,
    },
    hidePrevNext: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      innerValue: 1,
      active: 'pagination-active',
      disabled: 'pagination-disabled',
    }
  },
  computed: {
    selected: {
      get () {
        return this.value || this.innerValue
      },
      set (newValue) {
        this.innerValue = newValue
      },
    },
    pages () {
      // eslint-disable-next-line prefer-const
      let items = {}
      if (this.pageCount <= this.pageRange) {
        for (let index = 0; index < this.pageCount; index++) {
          // eslint-disable-next-line prefer-const
          let page = {
            index,
            content: index + 1,
            selected: index === this.selected - 1,
          }
          items[index] = page
        }
      } else {
        const halfPageRange = Math.floor(this.pageRange / 2)
        const setPageItem = (index) => {
          // eslint-disable-next-line prefer-const
          let page = {
            index,
            content: index + 1,
            selected: index === this.selected - 1,
          }
          items[index] = page
        }
        const setBreakView = (index) => {
          // eslint-disable-next-line prefer-const
          let breakView = {
            disabled: true,
            breakView: true,
          }
          items[index] = breakView
        }
        // 1st - loop thru low end of margin pages
        for (let i = 0; i < this.marginPages; i++) {
          setPageItem(i)
        }
        // 2nd - loop thru selected range
        let selectedRangeLow = 0
        if (this.selected - halfPageRange > 0) {
          selectedRangeLow = this.selected - 1 - halfPageRange
        }
        let selectedRangeHigh = selectedRangeLow + this.pageRange - 1
        if (selectedRangeHigh >= this.pageCount) {
          selectedRangeHigh = this.pageCount - 1
          selectedRangeLow = selectedRangeHigh - this.pageRange + 1
        }
        for (
          let i = selectedRangeLow;
          i <= selectedRangeHigh && i <= this.pageCount - 1;
          i++
        ) {
          setPageItem(i)
        }
        // Check if there is breakView in the left of selected range
        if (selectedRangeLow > this.marginPages) {
          setBreakView(selectedRangeLow - 1)
        }
        // Check if there is breakView in the right of selected range
        if (selectedRangeHigh + 1 < this.pageCount - this.marginPages) {
          setBreakView(selectedRangeHigh + 1)
        }
        // 3rd - loop thru high end of margin pages
        for (
          let i = this.pageCount - 1;
          i >= this.pageCount - this.marginPages;
          i--
        ) {
          setPageItem(i)
        }
      }
      return items
    },
  },
  methods: {
    handlePageSelected(selected) {
      if (this.selected === selected) return
      this.innerValue = selected
      this.$emit('input', selected)
      this.clickHandler(selected)
    },
    prevPage() {
      if (this.selected <= 1) return
      this.handlePageSelected(this.selected - 1)
    },
    nextPage() {
      if (this.selected >= this.pageCount) return
      this.handlePageSelected(this.selected + 1)
    },
    firstPageSelected() {
      return this.selected === 1
    },
    lastPageSelected() {
      return this.selected === this.pageCount || this.pageCount === 0
    },
  },
}
</script>


<template>
  <ul class="flex">
    <li
      v-if="!(firstPageSelected() && hidePrevNext)"
      :class="[firstPageSelected() && disabled]"
    >
      <button
        class="pagination-item"
        :tabindex="firstPageSelected() ? -1 : 0"
        @click="prevPage()"
        @keyup.enter="prevPage()"
      >
        <BaseIcon name="chevron-left" class="children:w-3 children:h-3 text-gray-400" />
      </button>
    </li>

    <li
      v-for="(page, index) of pages"
      :key="index"
      class="flex"
      :class="[page.selected ? active : '', page.disabled ? disabled : '']"
    >
      <button v-if="page.breakView" class="self-center mr-2" tabindex="0">
        <svg width="16" height="4" viewBox="0 0 16 4">
          <circle fill="#999999" cx="2" cy="2" r="2" />
          <circle fill="#999999" cx="8" cy="2" r="2" />
          <circle fill="#999999" cx="14" cy="2" r="2" />
        </svg>
      </button>
      <button v-else-if="page.disabled" class="pagination-item" tabindex="0">
        {{ page.content }}
      </button>
      <button
        v-else
        class="pagination-item"
        tabindex="0"
        @click="handlePageSelected(page.index + 1)"
        @keyup.enter="handlePageSelected(page.index + 1)"
      >
        {{ page.content }}
      </button>
    </li>

    <li
      v-if="!(lastPageSelected() && hidePrevNext)"
      :class="[lastPageSelected() && disabled]"
    >
      <button
        class="pagination-item"
        :tabindex="lastPageSelected() ? -1 : 0"
        @click="nextPage()"
        @keyup.enter="nextPage()"
      >
        <BaseIcon name="chevron-left" class="transform rotate-180 children:w-3 children:h-3 text-gray-400" />
      </button>
    </li>
  </ul>
</template>
