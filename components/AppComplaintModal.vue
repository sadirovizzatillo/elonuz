<script>
import complaintImg from '@/static/assets/Img/complaint-img.png'
export default {
  name: 'AppComplaintModal',
  props: {
    queryName: {
      type: String,
      default: 'Modal',
      require: true,
    },
  },
  data() {
    return {
      complaintRadio: '',
      complaintImg,
    }
  },
}
</script>

<template>
  <BaseModal
    title="Shikoyat qilish"
    close-position="right"
    adaptive="tablet"
    :query-name="queryName"
  >
    <div class="flex flex-col tablet:items-center <tablet:items-start">
      <h4 class="font-bold text-4xl text-black mb-1 <tablet:hidden">
        Shikoyat
      </h4>
      <img
        class="w-36 h-41.5 block transform -translate-x-4 <tablet:hidden"
        :src="complaintImg"
        alt="shikoyat qilish"
        width="144"
        height="166"
      />
      <div
        class="tablet:mt-25 <tablet:mt-0 tablet:w-95.7 <tablet:w-full flex flex-col justify-between"
      >
        <h5 class="font-medium text-md text-black mb-6 <tablet:hidden">
          Ushbu e’londa nima noto‘g‘ri? <br />
        </h5>
        <ul class="mb-8 tablet:space-y-4">
          <li>
            <BaseRadio
              v-model="complaintRadio"
              label="Spam"
              name="complaint"
              value="Spam"
            />
          </li>
          <li>
            <BaseRadio
              v-model="complaintRadio"
              label="Noto‘g‘ri kategoriya"
              name="complaint"
              value="Noto‘g‘ri kategoriya"
            />
          </li>
          <li>
            <BaseRadio
              v-model="complaintRadio"
              label="Reklama"
              name="complaint"
              value="Reklama"
            />
          </li>
          <li>
            <BaseRadio
              v-model="complaintRadio"
              label="Taqiqlangan mahsulot xizmati yoki tarkibi"
              name="complaint"
              value="Taqiqlangan mahsulot xizmati yoki tarkibi"
            />
          </li>
          <li>
            <BaseRadio
              v-model="complaintRadio"
              label="Fribgarlik"
              name="complaint"
              value="Fribgarlik"
            />
          </li>
        </ul>
        <BaseButton type="primary" class="w-full">Yuborish</BaseButton>
      </div>
    </div>
  </BaseModal>
</template>
