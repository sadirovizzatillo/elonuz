<script>
import { LAYOUTS } from '@/constants.js'
import { $pushQuery } from '~/mixins/pushQuery.js'

export default {
    mixins: [
    {
      methods: {
        $pushQuery,
      },
    },
  ],
  layout: LAYOUTS.LayoutAuthorData,
  data() {
    return {
      modalQuery: 'rating',
    }
  },
}
</script>

<template>
  <div>
    <div
      class="flex justify-between items-end <tablet:block shadow gray-500 bg-light-600 rounded p-8 mb-8 <mobile:mb-4"
    >
      <div class="flex items-center <tablet:mb-8">
        <img
          src="https://picsum.photos/id/1005/96/96"
          alt="author image"
          class="rounded-full mr-5 w-24 h-24 <mobile:w-18 <mobile:h-18"
          width="96"
          height="96"
        />
        <div>
          <h3 class="font-semibold tablet:text-2xl <tablet:text-xl text-black">
            Davron Yo’ldashev
          </h3>

          <p class="font-regular text-sm text-gray-500 mb-2">
            2022 yil 10 fevraldan E’lon.com da mavjud
          </p>
          <div class="flex items-center" @click="$pushQuery(modalQuery, true)">
            <BaseShowRating :star-width="20" :star-heigth="20" :rating='3.6'/>
            <span class="font-medium text-lg block ml-2">4.1</span>
          </div>
        </div>
      </div>
      <div class="flex <mobile:block">
        <BaseButton
          type="primary"
          class="flex items-center transform -translate-x-1.5 mr-4 <mobile:w-full <mobile:mb-4 <mobile:justify-center <mobile:items-center"
          size="base"
        >
          <BaseIcon name="link" class="mr-2" />Ulashish
        </BaseButton>
        <BaseButton
          class="bg-zinc-200 text-secondary flex items-center transform -translate-x-1.5 <mobile:w-full <mobile:justify-center <mobile:items-center"
          size="base"
        >
          <BaseIcon name="heart" class="mr-2" /> Saralanganlarga qo‘shish
        </BaseButton>
      </div>
    </div>
    <AppSearchForm class="mb-8 <mobile:mb-6" />
    <h2 class="font-bold text-2xl mb-4 <mobile:text-md">
      Muallifning boshqa e’lonlari
    </h2>
    <ul
      class="grid laptop:grid-cols-5 tablet:grid-cols-3 <tablet:grid-cols-4 <md:grid-cols-3 <sm:grid-cols-2 <sm:justify-items-center laptop:gap-y-6 <laptop:gap-y-4 laptop:gap-x-6 <laptop:gap-x-4 w-full"
    >
      <BaseAdCard
        v-for="(item, index) of new Array(10).fill('')"
        :key="index"
        class="mb-4 w-smk"
      />
    </ul>
    <BaseModal
      adaptive="tablet"
      title="Mening hisobim"
      :query-name="modalQuery"
    >
      <div class="modal absolute">
        <div class="rating flex mb-6">
          <input id="star1" type="radio" class="hidden" name="star"/><label
            for="star1"
          >
          </label>
          <input id="star2" type="radio" class="hidden" name="star"/><label
            for="star2"
          >
          </label>
          <input id="star3" type="radio" class="hidden" name="star"/><label
            for="star3"
          >
          </label>
          <input  id="star4" type="radio" class="hidden" name="star"/><label
            for="star4"
          >
          </label>
          <input id="star5" type="radio" class="hidden" name="star"/><label
            for="star5"
          >
          </label>
        </div>
        <p class="text-base text-center">Sotuvchiga baho bering</p>
      </div>
    </BaseModal>
  </div>
</template>

<style scoped>
.modal {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.rating {
  transform: rotate(180deg);
}

label {
  display: block;
  background-image: url('../../../common/icons/star-outline.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 30px;
  height: 30px;
  padding: 5px;
  margin: 0 5px;
  transform: rotate(180deg);
  cursor: pointer;
}

input:checked ~ label {
  background-image: url('../../../common/icons/golden-star.svg');
}
</style>
