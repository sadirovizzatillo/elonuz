<script>
export default {
  name: 'ChangeUserPassword',
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      repeatNewPassword: '',
      formFields: [
        {
          state: this.currentPassword,
          label: 'Joriy parol',
        },
        {
          state: this.newPassword,
          label: 'Yagi parol',
        },
        {
          state: this.repeatNewPassword,
          label: 'Parolni takrorlash',
        },
      ],
    }
  },
}
</script>

<template>
  <form class="w-full pb-4 flex flex-col">
    <h2 class="font-semibold text-xl mb-4">Parolni o'zgartirish</h2>
    <div
      class="w-full flex justify-between items-start <sm:flex-col p-6 rounded shadow-md bg-white"
    >
      <div
        class="xl:w-[60%] <xl:w-[90%] <sm:w-full <sm:order-1 <sm:mt-6 flex flex-col space-y-2"
      >
        <label
          v-for="(item, index) of formFields"
          :key="index"
          class="flex items-center space-x-4"
        >
          <p class="sm:w-[40%] <sm:w-[70%] font-normal text-[15px] text-zinc-600">
            {{ item.label }}
          </p>
          <BaseInput
            v-model="item.state"
            :name="item.label"
            rules="required"
            required
            block
            input-wrapper-class="bg-white"
            size="small"
            class="w-full"
          />
        </label>
      </div>
    </div>
    <BaseButton html-type="submit" class="w-44 mt-8 self-end"
      >Saqlash</BaseButton
    >
  </form>
</template>
