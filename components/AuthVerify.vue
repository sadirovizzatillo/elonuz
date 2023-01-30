<script>
export default {
  name: 'AuthVerify',
  data() {
    return {
      formData: {
        code: undefined,
      },
      countdownFinished: false,
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.formData)
    },
    onResentCode() {
      this.countdownFinished = false
    },
  },
}
</script>

<template>
  <div
    class="rounded w-full flex-grow-1 laptop:flex-grow-0 flex flex-col justify-end"
    bg="laptop:white"
    text="4xl"
    p="x-xl laptop:y-xl desktop:x-2xl desktop:t-2xl desktop:b-[40px]"
  >
    <section class="flex flex-col">
      <h2 class="my-0 py-0" text="2xl desktop-xl:4xl" font="semibold">
        Tasdiqlash kodi
      </h2>
      <p
        class="text-sm desktop-xl:text-base mt-[16px] laptop:mt-[32px] desktop:mt-[24px]"
      >
        Biz besh xonali tasdiqlash kodini telefon raqamingizga yubordik
      </p>
      <ValidationObserver v-slot="{ handleSubmit }" slim>
        <form
          id="form"
          class="flex flex-col"
          m="t-lg laptop:t-[40px] desktop:t-[24px]"
          @submit.prevent="handleSubmit(onSubmit)"
        >
          <section
            class="flex flex-col space-y-2 items-end"
            laptop="flex-row-reverse items-center justify-end space-x-4 space-x-reverse space-y-0"
          >
            <CountDown :finished.sync="countdownFinished" />
            <BaseCodeInput
              v-model="formData.code"
              rules="required|digits:5"
              autofocus
            />
          </section>
          <button
            type="button"
            class="text-sm text-sky-700 font-semibold self-start mt-6"
            @click="onResentCode"
          >
            Kodni qayta yuborish
          </button>
        </form>
      </ValidationObserver>
    </section>
    <section
      class="pt-[123px] laptop:pt-0 flex flex-col space-y-4 mt-[40px] desktop:mt-2xl"
    >
      <BaseButton html-type="submit" form="form" :disabled="countdownFinished">
        Davom etish
      </BaseButton>
      <BaseButton html-type="button" type="quaternary" @click="$router.go(-1)">
        Orqaga
      </BaseButton>
    </section>
  </div>
</template>
