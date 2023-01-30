<script>
import complaintImg from '@/static/assets/Img/complaint-img.png'
import { $pushQuery } from '~/mixins/pushQuery.js'


export default {
  name: 'SingleAdBarArticles',
    mixins: [
    {
      methods: {
        $pushQuery,
      },
    },
  ],
  data() {
    return {
      phoneNumberQuery: 'phoneNumberMain',
      complaintQuery: 'complaint',
      complaintImg,
    }
  },
}
</script>

<template>
  <div
    class="children:p-4 children:rounded-lg children:bg-light-500 children:shadow-sm children:mb-6"
  >
    <header class="p-4 rounded-lg bg-light-500">
      <div
        class="grid grid-cols-[64px,calc(100%-64px)] grid-rows-[repeat(2,24px)]"
      >
        <img
          class="block row-span-2 w-12 h-12 rounded-1"
          src="https://picsum.photos/id/1005/96/96"
          alt="Foydalanuvchi"
          width="48"
          height="48"
        />
        <p
          class="col-span-1 font-bold text-xl text-black w-full overflow-hidden truncate"
          title="Davron Yo'ldashev"
        >
          Davron Yo'ldashev
        </p>
        <p class="col-span-1 font-normal text-xs text-zinc-600 mt-1.5">
          Membership Date April 2012
        </p>
      </div>
      <div class="flex mt-5 gap-2">
        <BaseButton type="warning" size="small" class="w-12 px-0" @click="$pushQuery(phoneNumberQuery, true)">
          <BaseIcon
            name="phone"
            class="mx-auto w-5 children:w-5 h-5 children:h-5 pointer-events-none"
          />
        </BaseButton>
        <BaseButton type="info" size="small" class="w-full"
          >Xabar yozing</BaseButton
        >
      </div>
    </header>

    <ul class="flex flex-col divide-y divide-zinc-300">
      <li
        class="flex items-center justify-between not-last:pb-3 not-first:pt-3"
      >
        <p class="font-bold text-sm text-black">ID</p>
        <span class="font-medium text-sm text-error">79095695819</span>
      </li>
      <li
        class="flex items-center justify-between not-last:pb-3 not-first:pt-3"
      >
        <p class="font-bold text-sm text-black">Xonalar soni</p>
        <span class="font-medium text-sm text-black">7</span>
      </li>
      <li
        class="flex items-center justify-between not-last:pb-3 not-first:pt-3"
      >
        <p class="font-bold text-sm text-black">Umumiy maydoni</p>
        <span
          ><sub align="right">120m</sub
          ><sup align="right" class="text-[8px] font-semibold">2</sup></span
        >
      </li>
    </ul>

    <div>
      <article class="mb-12">
        <h3 class="font-bold text-sm text-black mb-2">Kvartirada bor</h3>
        <p class="font-normal text-[13px] leading-relaxed text-black">
          Kir yuvish mashinasi, Muzlatkich, Oshxona, Televizor, Balkon,
          Konditsioner, Internet, Kabelli TV, Telefon
        </p>
      </article>
      <article>
        <h3 class="font-bold text-sm text-black mb-2">Yaqinida joylashgan</h3>
        <p class="font-normal text-[13px] leading-relaxed text-black">
          Restoran, kafelar, bolalar og’chasi turargoh, Bekatlar, Supermarket,
          do’konlar, Park, yashil zona,, Kasalxona, Maktab, bolalar maydonchasi
        </p>
      </article>
    </div>

    <div class="min-h-93 flex flex-col">
      <article class="mb-4">
        <h3 class="font-bold text-sm text-black mb-2">Tavsifi</h3>
        <p class="font-normal text-[13px] leading-relaxed text-black">
          Shanba Yakshanba kunlari 4 500 000 so’m Chorvog’ bochka Tog’ yon
          bag’rida XAY TEK uslubida qurilgan dacha 2 km 5 ta yotoqxona 1 bolalar
          yotoqxonasi, qishki basseyn 10/5, yozgi basseyn 14/7 tennis, bilyart,
          Playstation 3, Turetskiy va Ruskiy Hammom, Qo’shimcha Oshpaz va
          xizmatchilar ham bor
        </p>
      </article>
      <button
        class="w-full flex items-center justify-end mt-auto pt-1.5 border-t-1 border-zinc-300"
        @click="$pushQuery(complaintQuery, true)"
      >
        <BaseIcon
          name="flag"
          class="text-error children:w-2.5 children:h-2.5 mr-2 pointer-events-none"
        />
        <p class="font-normal text-sm text-zinc-600 pointer-events-none">
          Shikoyat qilish
        </p>
      </button>
    </div>

    <div class="flex flex-col">
      <article class="mb-4">
        <h3 class="font-bold text-sm text-black mb-2">Tavsifi</h3>
        <p class="font-normal text-[13px] leading-relaxed text-zinc-600">
          Sizni qiziqtirgan maxsulotni ko’rmasdan oldin depozit yoki pul
          yubormang!
        </p>
      </article>
      <NuxtLink to="/" class="font-semibold text-xs text-sky-700">
        Batafsil
        <span
          class="font-normal text-sm text-zinc-600 pointer-events-none ml-[2px]"
        >
          ma'lumot uchun bosing.
        </span>
      </NuxtLink>
    </div>
    <SingleAdTelInfoModal :query-name="phoneNumberQuery"/>
    <AppComplaintModal :query-name="complaintQuery"/>
  </div>
</template>
