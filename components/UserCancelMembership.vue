<script>
export default {
  name: 'UserCancelMembership',
  props: {
    queryName: {
      type: String,
      default: 'modal',
    },
  },
  data() {
    return {
      formData: ""
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
  }
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
      <div v-if="isVisible" class="absolute inset-0 bg-black bg-opacity-70" />
    </transition>
    <!-- Modal main content -->
    <transition name="pop">
      <div
        v-if="isVisible"
        class="transform-none relative flex flex-col p-12 <tablet:p-9 <sm:p-4 <sm:mx-8 max-w-120 w-full overflow-x-hidden rounded-lg bg-white"
      >
        <h2 class="font-bold text-3xl mb-12">Aʼzolikni bekor qilish</h2>
        <p class="text-base text-zinc-600 mb-8">
          Parolingizni kiriting va A’zolikni bekor qilishni tasdiqlang. Bizning
          xizmatlarimizdan mamnun bo’ldingiz, degan umiddamiz.
        </p>
        <form @submit.prevent="onSubmit">
          <BaseInput
            v-model="formData"
            class="w-full mb-12"
            name="large-input"
            label="Parolni kiriting"
            size="large"
            type="password"
            clearable
            error-message="Error message!"
          />
          <BaseButton html-type="submit" type="error" class="block w-full mb-4"
            >Aʼzolikni bekor qilish</BaseButton
          >
        </form>
        <BaseButton
          type="quaternary"
          class="block w-full"
          @click="$router.go(-1)"
          >Orqaga</BaseButton
        >
      </div>
    </transition>
  </div>
</template>
