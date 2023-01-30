<script>
import { LAYOUTS } from '@/constants.js'
import { $pushQuery } from '~/mixins/pushQuery.js'

export default {
  name: 'SingleAd',
    mixins: [
    {
      methods: {
        $pushQuery,
      },
    },
  ],
  layout: LAYOUTS.LayoutSingleAd,
  data() {
    return {
      slidesData: [
        'https://images.unsplash.com/photo-1426122402199-be02db90eb90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1546688412-835bd2988be5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1651304480606-2e040b8f644f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
      ],
      modalQuery: 'slidesModal',
      phoneNumberQuery: 'phoneNumberMain',
      complaintQuery: 'complaint',
      mapModalQuery: 'show-map',
    }
  },
}
</script>

<template>
  <section>
    <div class="flex flex-col laptop:space-y-12 <laptop:space-y-4 pb-16">
      <section class="bg-white <laptop:pt-8 <laptop:shadow-md">
        <div class="<laptop:container">
          <AppNavCorusel :slides="slidesData" :modal-query="modalQuery" />
          <SingleAdInfo class="laptop:mt-8 <laptop:mt-12 <mobile:mt-8" />
          <div class="flex flex-col mt-8 laptop:hidden">
            <div class="flex mobile:mb-6 <mobile:mb-4">
              <BaseButton
                type="warning"
                size="base"
                class="w-full mr-4 <mobile:text-sm <mobile:px-3"
                @click="$pushQuery(phoneNumberQuery, true)"
                >Raqamni ko'rsatish</BaseButton
              >
              <BaseButton
                class="w-full <mobile:text-sm <mobile:px-3"
                size="base"
                >Xabar yozish</BaseButton
              >
            </div>
            <button
              class="flex items-center w-full mobile:pt-5 mobile:pb-6 <mobile:py-3 border-t border-b-zinc-300"
              @click="$pushQuery(mapModalQuery, true)"
            >
              <BaseIcon name="location" class="w-4.5 h-5.5 text-sky-700 mr-5" />
              <p
                class="font-medium mobile:text-[17px] <mobile:text-sm text-secondary"
              >
                Toshkent viloyati / Chorvoq tumani
              </p>
              <BaseIcon
                name="chevron-left"
                class="transform rotate-180 ml-auto mobile:children:w-4 mobile:children:h-4 <mobile:children:w-3 <mobile:children:h-3"
              />
            </button>
          </div>
        </div>
      </section>

      <section class="laptop:hidden bg-white shadow-md">
        <div
          class="<laptop:container mobile:py-8 <mobile:py-4 divide-y divide-secondary divide-opacity-10"
        >
          <article class="mb-6">
            <h4 class="font-semibold text-sm text-black mb-4">Tavsifi</h4>
            <p
              class="max-w-192.5 w-full font-normal text-md leading-[22px] text-zinc-600"
            >
              Chorvog’ bochka Tog’ yon bag’rida XAY TEK uslubida qurilgan dacha
              ijaraga beriladi Shanba Yakshanba kunlari 2 000 000 so’m 5 ta
              yotoqxona 1 bolalar yotoqxonasi, qishki basseyn 10/5, yozgi
              basseyn 14/7 tennis, bilyart, Playstation 3, Turetskiy va Ruskiy
              Hammom, Qo’shimcha Oshpaz va xizmatchi xam bor
            </p>
          </article>

          <article class="mobile:pt-8 <mobile:pt-6 mobile:mt-8 <mobile:mt-6">
            <h4 class="font-semibold text-sm text-black mb-4">Ma'lumotlar</h4>
            <div
              class="flex mobile:items-end mobile:justify-between <mobile:flex-col <mobile:items-end <mobile:space-y-6"
            >
              <ul class="flex flex-col w-1/2 <mobile:self-start">
                <li
                  class="flex items-center justify-between not-last:pb-3 not-first:pt-3"
                >
                  <p class="font-bold text-sm text-zinc-600">ID</p>
                  <span class="font-medium text-sm text-error"
                    >79095695819</span
                  >
                </li>
                <li
                  class="flex items-center justify-between not-last:pb-3 not-first:pt-3"
                >
                  <p class="font-bold text-sm text-zinc-600">Xonalar soni</p>
                  <span class="font-medium text-sm text-zinc-600">7</span>
                </li>
              </ul>
              <button class="inline-flex items-center text-sky-700">
                <p class="font-medium text-sm">Barcha ma'lumotlar</p>
                <BaseIcon class="ml-3" name="coolicon" />
              </button>
            </div>
          </article>

          <article class="mobile:pt-8 <mobile:pt-6 mobile:mt-8 <mobile:mt-6">
            <h4 class="font-semibold text-sm text-black mb-4">
              Kvartirada bor
            </h4>
            <p class="font-normal text-md leading-[22px] text-zinc-600">
              Kir yuvish mashinasi, Muzlatkich, Oshxona, Televizor, Balkon,
              Konditsioner, Internet, Kabelli TV, Telefon
            </p>
            <h4 class="font-semibold text-sm text-black mb-4 mt-12">
              Yaqinida joylashgan
            </h4>
            <p class="font-normal text-md leading-[22px] text-zinc-600">
              Restoran, Kafelar, Bolalar bog’chasi, Turargoh, Bekatlar,
              Supermarket, Do’konlar, Park, Yashil zona, Kasalxona, Maktab,
              Bolalar maydonchasi
            </p>
          </article>
        </div>
      </section>

      <section class="laptop:hidden bg-white shadow-md">
        <div
          class="<laptop:container pt-8 mobile:pt-8 <mobile:pt-4 pb-5 divide-y divide-secondary divide-opacity-10"
        >
          <button class="flex pb-6 w-full">
            <img
              class="block w-16 h-16 rounded-1 mr-4"
              src="https://picsum.photos/id/1005/96/96"
              alt="Foydalanuvchi"
              width="64"
              height="64"
            />
            <div>
              <p
                class="font-semibold text-xl text-black mb-2"
                title="Davron Yo'ldashev"
              >
                Davron Yo'ldashev
              </p>
              <p class="font-normal text-xs text-zinc-600">
                Membership Date April 2012
              </p>
            </div>
            <BaseIcon
              name="chevron-left"
              class="transform rotate-180 children:w-4 children:h-4 self-center ml-auto text-secondary"
            />
          </button>
          <button
            class="flex items-center justify-between w-full pt-5 pb-6"
            @click="$pushQuery(complaintQuery, true)"
          >
            <p class="font-medium text-[17px] text-secondary">
              Shikoyat qilish
            </p>
            <BaseIcon
              name="chevron-left"
              class="transform rotate-180 children:w-4 children:h-4 text-secondary"
            />
          </button>
          <button class="flex items-center justify-between w-full pt-5">
            <p class="font-medium text-[17px] text-secondary">
              Xavfsizlik maslahatlari
            </p>
            <BaseIcon
              name="chevron-left"
              class="transform rotate-180 children:w-4 children:h-4 text-secondary"
            />
          </button>
        </div>
      </section>

      <section class="<laptop:hidden">
        <div>
          <BaseButton
            class="px-12 rounded-bl-none rounded-br-none"
            size="base"
            type="warning"
          >
            <span class="font-bold text-md text-black">Manzil</span>
          </BaseButton>
        </div>
        <client-only>
          <SingleAdMap />
        </client-only>
      </section>

      <div class="flex <mobile:flex-col mobile:space-x-6 <mobile:space-y-4 bg-white <laptop:shadow-md <laptop:p-4">
        <BaseButton type="primary" class="min-w-32 h-10 font-bold">Tahrirlash</BaseButton>
        <BaseButton type="error" secondary class="<mobile:order-1 min-w-37 h-10 font-bold">E’lonni o’chirish</BaseButton>
      </div>
    </div>
    <SingleAdTelInfoModal :query-name="phoneNumberQuery" />
    <AppComplaintModal :query-name="complaintQuery" />
    <SingleAdModalSlide :slides="slidesData" :modal-query="modalQuery" />
    <BaseModal
      class="laptop:hidden"
      title="Toshkent viloyati / Chorvoq tumani"
      adaptive="tablet"
      :query-name="mapModalQuery"
    >
      <client-only>
        <SingleAdMap />
      </client-only>
    </BaseModal>
  </section>
</template>
