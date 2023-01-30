<script>
export default {
  name: 'UserEditInfo',
  data() {
    return {
      formData: {
        firstname: 'Mirjalol',
        // lastname: '',
        // phoneNumber: '',
        // email: '',
      },
      selectedImage: null,
    }
  },
  methods: {
    onImageSelected(event) {
      const input = event.target
      if (input.files && input.files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.selectedImage = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
  },
}
</script>

<template>
  <div
    class="w-full flex justify-between items-start <sm:flex-col p-6 rounded shadow-md bg-white"
  >
    <div class="sm:w-1/2 <sm:w-full <sm:order-1 <sm:mt-6 flex flex-col space-y-2">
      <label class="flex items-center">
        <p class="w-1/2 font-normal text-[15px] text-zinc-600">Ism</p>
        <BaseInput
          v-model="formData.firstname"
          name="firstname"
          placeholder="Ixtiyorjon"
          rules="required"
          block
          input-wrapper-class="bg-white"
          size="small"
          class="w-57"
        />
      </label>
    </div>
    <label
      class="sm:self-center flex flex-col items-center justify-center w-28 h-28 cursor-pointer bg-light-400 rounded border border-slate-300"
    >
      <input class="sr-only" type="file" accept="image/*" name="user-img" @change="onImageSelected" />
      <div v-if="!selectedImage" class="flex flex-col items-center justify-center">
        <BaseIcon
          name="add-img-icon"
          class="children:w-5 children:h-5 text-slate-300 mb-1.5"
        />
        <p class="max-w-15 w-full font-md text-sm text-slate-300 text-center">
          Rasm qo'shish
        </p>
      </div>
      <img v-else-if="selectedImage" class="w-full h-full object-cover object-center" :src="selectedImage" alt="selected image">
    </label>
  </div>
</template>
