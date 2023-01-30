<script>
export default {
  name: 'FavoriteSellers',
}
</script>

<template>
  <div class="w-full">
    <h2 class="font-semibold text-xl text-black mb-4">Sevimli sotuvchilar</h2>
    <ul class="grid laptop:grid-cols-2 <laptop:grid-cols-1 <tablet:grid-cols-2 <sm:grid-cols-1 gap-x-6 gap-y-2">
      <li
        v-for="(item, index) of new Array(8).fill('')"
        :key="index"
        class="flex w-full relative"
      >
        <NuxtLink
          :to="localePath({name: 'author-id', params: {id: index}})"
          class="flex justify-between items-end p-4 rounded-lg w-full bg-white"
        >
          <div class="flex items-center tablet:space-x-3 <tablet:space-x-4 <s:space-x-2">
            <img
              class="block tablet:w-20 tablet:h-20 <tablet:w-16 <tablet:h-16 <sm:w-14 <sm:h-14 rounded-1"
              src="https://picsum.photos/id/1005/160/160"
              alt="Foydalanuvchi"
              width="80"
              height="80"
            />
            <div>
              <p
                class="font-semibold text-md text-secondary w-full overflow-hidden truncate"
                title="Davron Yo'ldashev"
              >
                Davron Yo'ldashev
              </p>
              <p class="font-normal text-xs text-zinc-600 mt-1 mb-2.5">
                E’lonlar: <span class="text-sky-700">93</span>
              </p>

              <div class="flex items-center">
              <BaseShowRating :rating='3.6'/>
                <p class="ml-2 font-normal text-xs text-black">3.6</p>
              </div>
            </div>
          </div>
        </NuxtLink>
        <div class="absolute bottom-4 right-4 rounded hover:children:bg-error">
          <BaseButton
            size="small"
            class="flex items-center justify-center w-6 h-6 p-0 bg-blue-300 transition-colors"
          >
            <BaseIcon
              name="trash"
              class="text-white children:w-3 children:h-3.5"
            />
          </BaseButton>
        </div>
      </li>
    </ul>
  </div>
</template>
