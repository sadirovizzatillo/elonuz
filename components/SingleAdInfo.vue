<script>
export default {
  name: 'SingleAdInfo',

}
</script>
<template>
  <section class="pb-4 laptop:border-b laptop:border-b-zinc-300">
    <div class="flex items-start justify-between laptop:mb-9 <laptop:mb-6.5 <mobile:mb-4">
      <h2
        class="mobile:max-w-[70%] <mobile:max-w-full font-semibold laptop:text-4xl
        laptop:leading-[43px] <laptop:text-2xl <mobile:text-lg
        <laptop:leading-[30px] text-black mr-5"
      >
        Tog'da joylashgan uy oilaviy dam olish uchun ijaraga beriladi
      </h2>
      <BaseCheckbox label="Sevimlilarimga qo'shish" type="asterisk" class="<laptop:hidden"/>
      <BaseCheckbox type="asterisk" class="laptop:hidden"/>
    </div>
    <div class="laptop:mb-14.5 <laptop:mb-12.5 <mobile:mb-8 flex items-center text-error">
      <BaseIcon name="cash" class="mobile:w-9 <mobile:w-7 mobile:h-8 <mobile:w-6 mobile:mr-4 <mobile:mr-6 block" />
      <p class="font-bold mobile:text-2xl <mobile:text-xl">2 000 000 UZS</p>
    </div>
    <div class="flex items-center">
      <div class="flex items-center mr-6">
        <BaseIcon
          name="calendar"
          class="text-zinc-600 mr-1.5 children:w-4.5 children:h-4.5"
        />
        <time class="font-normal text-sm text-zinc-600" datetime="2018-07-07">
          Oct, 19, 2021
        </time>
      </div>
      <div class="flex items-center">
        <BaseIcon
          name="eye-on"
          class="text-zinc-600 mr-1.5 children:w-4 children:h-4"
        />
        <p class="font-normal text-sm text-zinc-600">1021</p>
      </div>
    </div>
  </section>
</template>
