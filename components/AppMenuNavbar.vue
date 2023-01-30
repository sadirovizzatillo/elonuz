<script>
import BaseAccordionGroup from './BaseAccardionGroup.vue'
import BaseAccardionItem from './BaseAccardionItem.vue'
import { LAYOUTS } from '@/constants.js'

export default {
  name: LAYOUTS.LayoutMain,
  components: { BaseAccordionGroup, BaseAccardionItem },
  props: {
    isAdaptive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      accordionData: [
        {
          title: "E'lonlarni boshqarish",
          icon: 'clipboard',
          chevronVisable: true,
          subMenu: [
            { title: 'Xulosa', subInfo: '(563)' },
            { title: "Chop etilgan e'lonlar", subInfo: '(563)' },
            { title: 'Qoralamalar', subInfo: '(563)' },
          ],
        },
        {
          title: "E'lonlarni boshqarish",
          icon: 'clipboard',
          chevronVisable: true,
          isActive: true,
          subMenu: [
            { title: 'Xulosa', subInfo: '(563)' },
            { title: "Chop etilgan e'lonlar", subInfo: '(563)' },
            { title: 'Qoralamalar', subInfo: '(563)' },
          ],
        },
      ],
    }
  },
}
</script>

<template>
  <nav
    class="tablet:min-w-69 tablet:max-w-75 tablet:mr-6 tablet:py-6 tablet:max-h-[calc(100vh-4.5rem)] tablet:scrollbar tablet:scrollbar-thin tablet:overflow-y-auto tablet:sticky tablet:top-18 tablet:left-0"
  >
    <BaseAccordionGroup type="menuBar">
      <BaseAccardionItem
        v-for="(item, index) of accordionData"
        :key="index"
        type="menuBar"
        :title="item.title"
        :icon="item.icon"
        :chevron-visable="item.chevronVisable"
        :is-active="index === 0"
      >
      <template slot="subMenu">
        <BaseAccordionSubMenu v-for="(el, idx) of item.subMenu" :key="idx" type="menuBar" :title="el.title" :info="el.subInfo"/>
      </template>
      </BaseAccardionItem>
    </BaseAccordionGroup>
  </nav>
</template>
