<script>
import { LAYOUTS } from '@/constants'

export default {
  name: 'CategoryPage',
  layout: LAYOUTS.LayoutMain,
  data() {
    return {
      filters: {},
      category: {
        name: "Ko'chmas mulk",
        image: 'https://images.unsplash.com/photo-1430285561322-7808604715df',
        children: [
          {
            id: 1,
            name: 'Xususiy uylar',
            slug: 'xususiy-uylar',
            additionalInfoForms: [
              {
                name: 'category',
                displayName: 'Rukunni tanlang',
                formType: 'select',
                formElement: 'select',
                values: [
                  'Uzoq muddatga ijara',
                  'Sotib olish',
                  'Qisqa muddatga ijara',
                ],
                placeholder: 'Hammasi',
              },
              {
                name: 'houseType',
                displayName: 'Uy turi',
                formType: 'select',
                formElement: 'select',
                values: ['9-qavatli', '5-qavatli', 'Hovli'],
                placeholder: 'Hammasi',
              },
              {
                name: 'price',
                displayName: 'Narx',
                formType: 'range',
                formElement: 'range',
              },
              {
                name: 'currency',
                displayName: 'Pul birligi',
                formType: 'select',
                formElement: 'select',
                values: ['USD', 'EUR', 'Som'],
                placeholder: 'Hammasi',
              },
              {
                name: 'roomsCount',
                displayName: 'Xonalar soni',
                formType: 'range',
                formElement: 'range',
              },
              {
                name: 'totalArea',
                displayName: 'Umumiy maydon',
                formType: 'range',
                formElement: 'range',
              },
              {
                name: 'totalYardArea',
                displayName: 'Uchastka maydoni',
                formType: 'range',
                formElement: 'range',
              },
            ],
          },
          {
            id: 2,
            name: 'Kvartiralar',
            slug: 'kvartiralar',
          },
          {
            id: 3,
            name: 'Yer uchastkalari',
            slug: 'yer-uchastkalari',
          },
          {
            id: 4,
            name: 'Tijorat binolari',
            slug: 'tijorat-binolari',
          },
          {
            id: 4,
            name: 'Garaj/Turargohlar',
            slug: 'garaj-turargohlar',
          },
        ],
      },
    }
  },
  head() {
    return {
      title: this.category.name,
    }
  },
}
</script>

<template>
  <div>
    <AppSearchForm class="mb-6"/>
    <img :src="category.image" class="h-[368px] object-cover w-full" />
    <BaseTab class="mt-lg">
      <BaseTabItem
        v-for="tab in category.children"
        :key="tab.slug"
        :name="tab.slug"
        :title="tab.name"
      >
        <div class="grid grid-cols-4 gap-4">
          <div v-for="field in tab.additionalInfoForms" :key="field.name">
            <BaseInput
              v-if="field.formType === 'character'"
              v-model="filters[field.name]"
              light
              :name="field.name"
              :bordered="false"
              :label="field.displayName"
            />
            <BaseSelect
              v-else-if="field.formType === 'select'"
              v-model="filters[field.name]"
              :name="field.name"
              :options="field.values"
              :placeholder="field.placeholder"
              :label="field.displayName"
            />
            <BaseRangeInput
              v-else-if="field.formType === 'range'"
              :name="field.name"
              :label="field.displayName"
              light
              :bordered="false"
            />
          </div>
        </div>
      </BaseTabItem>
    </BaseTab>

    <section
      class="flex items-center justify-between mt-md bg-neutral-100 px-md py-md"
    >
      <div class="text-sm">Sizga eng yaqinlarini xaritadan qidiring</div>
      <button
        class="bg-sky-700 text-white text-sm padding-base rounded-sm px-12 py-xs"
      >
        Xaritadan qidiring
      </button>
    </section>
    <section class="mt-xl space-y-4 pb-4">
      <h3 class="text-2xl font-semibold">Top e’lonlar</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <BaseAdCard v-for="i in 20" :key="i" />
      </div>
      <div class="flex justify-center">
        <BasePagination :page-count="5" />
      </div>
    </section>
  </div>
</template>
