<script>
import BaseIcon from './BaseIcon.vue'
export default {
  name: 'TheFooter',
  components: { BaseIcon },
}
</script>

<template>
  <div class="container tablet:pt-12 tablet:pb-8 <tablet:py-2.5">
    <div
      class="flex <tablet:justify-between tablet:gap-20 tablet:pb-8 <tablet:pb-2.5 border-b w-full border-zinc-300"
    >
      <div class="flex items-center">
        <span
          class="rounded-1 laptop:w-12 laptop:h-12 tablet:w-8 tablet:h-8 <tablet:w-6 <tablet:h-6 tablet:mr-4 <tablet:mr-2 bg-white flex items-center justify-center"
        >
          <BaseIcon
            name="phone"
            class="text-secondary laptop:children:w-5 laptop:children:h-5 tablet:children:w-3 tablet:children:h-3 <tablet:children:w-2.5 <tablet:children:h-2.5"
          />
        </span>
        <div>
          <p
            class="font-semibold laptop:text-md <tablet:text-xs tracking-wide text-blue-300 laptop:mb-[6px]"
          >
            Qo'ng'iroqlar markazi
          </p>
          <a
            class="laptop:font-medium laptop:text-lg tablet:font-normal tablet:text-md <tablet:text-sm text-white"
            href="tel:+998904440022"
            target="blank"
            >+998 90 444 00 22</a
          >
        </div>
      </div>
      <div class="flex items-center">
        <span
          class="rounded-1 laptop:w-12 laptop:h-12 tablet:w-8 tablet:h-8 <tablet:w-6 <tablet:h-6 tablet:mr-4 <tablet:mr-2 bg-white flex items-center justify-center"
        >
          <BaseIcon
            name="mail"
            class="text-secondary laptop:children:w-5 laptop:children:h-5 tablet:children:w-3 tablet:children:h-3 <tablet:children:w-2.5 <tablet:children:h-2.5"
          />
        </span>
        <div>
          <p
            class="font-semibold laptop:text-md <tablet:text-xs tracking-wide text-blue-300 laptop:mb-[6px]"
          >
            Yordam markazi
          </p>
          <a
            class="laptop:font-medium laptop:text-lg tablet:font-normal tablet:text-md <tablet:text-sm text-white"
            href="mailto:elon@gmail.com"
            target="blank"
            >elon@gmail.com</a
          >
        </div>
      </div>
    </div>
    <p
      class="font-normal laptop:text-xs <laptop:text-[10px] text-white laptop:mt-8 tablet:mt-2 <tablet:mt-1.5"
    >
      Copyright © 2000-2021 e’lon.uz
    </p>
  </div>
</template>
