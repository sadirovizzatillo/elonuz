<script>
import { $pushQuery } from '~/mixins/pushQuery.js'
export default {
  name: 'UserMembership',
  mixins: [
    {
      methods: {
        $pushQuery,
      },
    },
  ],
  data() {
    return {
      modalQuery: 'cancel-membership',
    }
  },
  methods: {
    handleCancelSubmit(data) {
      console.log(data);
    }
  },
}
</script>

<template>
  <div>
    <h3 class="font-bold text-xl mb-4 <tablet:text-base">
      A'zolikni bekor qilish
    </h3>
    <div class="bg-white p-6 rounded shadow-md shadow-zinc-300 mb-6 <sm:p-4">
      <h4 class="text-base text-sky-700 font-bold mb-2 <mobile:text-sm">
        Aʼzoligingizni bekor qilmoqchi ekanligingizdan afsusdamiz...
      </h4>
      <p class="text-sm text-zinc-600 mb-6 <mobile:text-xs">
        Sizning fikr-mulohazalaringiz biz uchun juda qadrlidir, chunki biz sizni
        e'lonbizda.uz oilasi a'zosi sifatida ko'rishda davom etishni istaymiz.
        Agar sizda muammo bo'lsa yoki a'zoligingiz haqida so'ramoqchi
        bo'lsangiz,
        <a href="" class="text-sky-700 font-bold">Qo'llab-quvvatlash</a> markazi
        orqali biz bilan bog'lanishingiz mumkin.
      </p>
      <h4 class="text-base text-sky-700 font-bold mb-2 <mobile:text-sm">
        Agar siz E’lonbizda.uz a'zoligingizni bekor qilsangiz;
      </h4>
      <ul class="text-sm text-zinc-600 mb-6 list-disc pl-5 <mobile:text-xs">
        <li>Aʼzoligingizni qayta faollashtirib boʻlmaydi.</li>
        <li>Chop etilgan barcha eʼlonlaringiz bekor qilinadi.</li>
        <li>
          Agar sizda doping qo'llangan reklama bo'lsa, pul qaytarib berilmaydi.
        </li>
        <li>
          Mobil telefon raqamingizni boshqa e’lonbizda hisobiga ko'chirishingiz
          mumkin.
        </li>
        <li>
          Sizning e-mail manzilingizni yangi obuna uchun ishlatib bo'lmasligini
          eslatib o'tamiz.
        </li>
      </ul>
    </div>
    <div
      class="flex justify-end items-end mb-20 <mobile:justify-center <mobile:items-center"
    >
      <BaseButton
        class="block bg-error py-3 px-4 rounded font-bold text-white <mobile:text-sm <mobile:py-2 <mobile:px-3"
        @click="$pushQuery(modalQuery, true)"
        >Aʼzolikni bekor qilish
      </BaseButton>
    </div>

    <UserCancelMembership :query-name='modalQuery' @submit="handleCancelSubmit"/>
  </div>
</template>
