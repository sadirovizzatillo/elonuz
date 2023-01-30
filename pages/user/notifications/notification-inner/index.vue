<script>
import BaseLink from '~/components/BaseLink.vue'
export default {
    name: "NotificationInner",
    methods: {
        to() {
            this.$router.go(-1);
        },
    },
    components: { BaseLink }
}
</script>

<template>
  <div class="w-full">
      <h3 class="tablet:hidden font-bold text-lg mb-4">Bildirishnomalar</h3>
    <div class="py-4 px-8 bg-white <tablet:px-6 <sm:px-4 mb-20">
      <button
        class="flex items-center font-medium text-lg mb-6 py-3 <tablet:mb-4 sm:mb-2 <tablet:text-base <tablet:py-1 <sm:py-0"
        @click="to"
      >
        <BaseLink to="" text="orqaga" prev />
      </button>
      <img
        src="https://picsum.photos/id/555/920/402"
        alt=""
        class="block rounded mb-8 <tablet:mb-6 <sm:mb-2"
      />
      <h3 class="font-bold text-lg mb-5 <tablet:mb-3 <sm:mb-1">E’lon.comda siz uchun yangilik</h3>
      <p class="text-base text-zinc-600 <sm:text-xs <sm:leading-snug">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra enim a
        id semper nulla id ullamcorper malesuada. Suspendisse sem massa, sed est
        nam eu ac. Pellentesque sit vitae a lobortis vel. Mattis duis auctor
        tristique luctus urna. Arcu turpis neque viverra accumsan duis viverra.
        Sit id laoreet sed sit amet in. Eu volutpat consectetur dui sed tellus
        duis at id lacus. Habitant eget molestie in risus vitae, neque, libero
        non ut. Ut molestie et nisl odio ullamcorper sed sed neque sagittis.
        Gravida venenatis nibh eget sem tincidunt. Ullamcorper vivamus id ipsum
        vitae, elementum sed. Cras magna at aliquet neque. In etiam justo ac
        ipsum. Turpis ut tortor tincidunt id aliquam urna. Habitant ornare proin
        et ipsum nunc. Aliquam nec dolor in vel velit vitae.
      </p>
    </div>
  </div>
</template>
