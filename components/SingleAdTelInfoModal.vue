<script>
import { $pushQuery } from '~/mixins/pushQuery.js'

export default {
  name: 'SingleAdTelInfoModal',
    mixins: [
    {
      methods: {
        $pushQuery,
      },
    },
  ],
  props: {
    queryName: {
      type: String,
      default: 'modal',
      require: true,
    },
  },
  data() {
    return {
      complaintQuery: 'complaint',
    }
  },
}
</script>
<template>
  <BaseModal
    title="Telefon raqam"
    close-position="right"
    adaptive="mobile"
    :query-name="queryName"
  >
    <div class="mobile:px-7 <mobile:px-4 <mobile:mt-16.5 pb-6">
      <div
        class="flex <mobile:flex-col <mobile:items-center mobile:pb-10 <mobile:pb-16.5 tablet:mb-10 <tablet:mb-6 border-b border-zinc-300"
      >
        <img
          class="block mobile:w-18 <mobile:w-16 mobile:h-18 <mobile:h-16 rounded-1 mobile:mr-4 <mobile:mb-6"
          src="https://picsum.photos/id/1005/96/96"
          alt="Foydalanuvchi"
          width="64"
          height="64"
        />
        <div class="flex flex-col <mobile:items-center">
          <p
            class="font-bold mobile:text-2xl <mobile:text-md text-black mobile:mb-2 <mobile:mb-1 w-full overflow-hidden truncate"
            title="Davron Yo'ldashev"
          >
            Davron Yo'ldashev
          </p>
          <p class="font-normal text-xs text-zinc-600 mt-1.5">
            Membership Date April 2012
          </p>
        </div>
      </div>

      <h4
        class="font-medium tablet:text-lg <tablet:text-sm text-black tablet:mb-6 <tablet:mb-4 <mobile:mb-6"
      >
        Telefon raqami
      </h4>
      <p
        class="font-bold tablet:text-[30px] <tablet:text-lg text-black tablet:mb-4 <tablet:mb-6 <tablet:mb-3"
      >
        +998 99 123 45 67
      </p>
      <p
        class="font-normal tablet:text-md <tablet:text-sm text-zinc-600 tablet:mb-12 <tablet:mb-8"
      >
        Sotuvchi bilan shaxsiy xabarlar orqali bog'lanishingiz mumkin.
      </p>
        <BaseButton type="tertiary" class="w-full mb-4"
          >Sevimlilarga qo'shing</BaseButton
        >
        <BaseButton
          type="tertiary"
          class="w-full"
          @click="$pushQuery(complaintQuery, true)"
          >Shikoyat qilish</BaseButton
        >
      <AppComplaintModal :query-name="complaintQuery" />
    </div>
  </BaseModal>
</template>
