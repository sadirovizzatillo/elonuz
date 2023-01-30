<script>
export default {
  name: 'UserMangeAds',
  props: {
    title: {
      type: String,
      require: true,
      default: '',
    },
    adsList: {
      type: Array,
      require: true,
      default: Array,
    },
    status: {
      type: String,
      default: 'published',
    },
  },
}
</script>

<template>
  <div class="w-full flex flex-col pb-18">
    <h2 class="font-semibold text-xl text-black mb-4">{{ title }}</h2>
    <AppSearchForm bg-color="bg-white" class="mb-6" />
    <ul
      class="grid desktop:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 <tablet:grid-cols-3 <sm:grid-cols-2 <sm:justify-items-center sm:gap-6 <sm:gap-4 w-full"
    >
      <BaseAdCard
        v-for="(item, index) of new Array(8).fill('')"
        :key="index"
        :to="
          localePath({
            name: `personal-ad-id`,
            params: { id: index },
            query: { status: status },
          })
        "
        class="bg-white"
        options
      />
    </ul>
    <BasePagination class="self-center mt-10" :page-count="5" />
  </div>
</template>
