<script>
export default {
  name: 'AuthVerifyModal',
  props: {
    queryName: {
      type: String,
      default: 'modal',
    },
  },
  data() {
    return {
      formData: {
        code: undefined,
      },
      countdownFinished: false,
    }
  },
  computed: {
    isVisible() {
      return !!this.$route.query[this.queryName]
    },
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
    class="flex items-center justify-center w-screen h-screen fixed top-0 left-0"
    :class="[
      isVisible
        ? 'pointer-events-auto z-50 bg-black bg-opacity-0'
        : 'bg-opacity-0 pointer-events-none',
    ]"
  >
    <!-- Modal overlay -->
    <transition name="fade">
      <div
        v-if="isVisible"
        class="absolute inset-0 bg-black bg-opacity-70"
      />
    </transition>
    <!-- Modal main content -->
    <transition name="pop">
      <div
        v-if="isVisible"
        class="transform-none relative flex flex-col p-12 <tablet:p-9 <sm:p-4 <sm:mx-8 max-w-120 w-full overflow-x-hidden rounded-lg bg-white"
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
              m="t-[24px]"
              @submit.prevent="handleSubmit(onSubmit)"
            >
              <section
                class="flex flex-row-reverse items-center justify-end space-x-4 space-x-reverse space-y-0 <mobile:relative"
              >
                <CountDown
                  class="!text-black <mobile:absolute <mobile:-bottom-11 <mobile:right-0"
                  :finished.sync="countdownFinished"
                />
                <BaseCodeInput
                  v-model="formData.code"
                  rules="required|digits:5"
                  autofocus
                  class="<laptop:children:children:border border-solid border-zinc-500"
                  w="<sm:children:children:12"
                  h="<sm:children:children:12"
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
        <section class="flex flex-col space-y-4 mt-2xl">
          <BaseButton
            html-type="submit"
            form="form"
            :disabled="countdownFinished"
          >
            Davom etish
          </BaseButton>
          <BaseButton
            html-type="button"
            type="quaternary"
            @click="$router.go(-1)"
          >
            Orqaga
          </BaseButton>
        </section>
      </div>
    </transition>
  </div>
</template>
