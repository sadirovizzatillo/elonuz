<script>
export default {
  name: 'NotificationPage',
}
</script>

<template>
  <div class="w-full">
    <h3 class="font-bold text-xl mb-4">Bildirishnomalar</h3>
    <ul class="">
      <li>
        <NuxtLink
          to="/user/notifications/notification-inner"
          class="flex items-center w-full h-30 relative box-border p-4 bg-white rounded-lg shadow-md shadow-zinc-300 mb-2 <sm:p-3 <sm:h-25"
        >
          <div
            class="flex items-center justify-center rounded-1/2 box-border p-1 w-22 h-20 mr-3 bg-light-500 <laptop:w-18 <laptop:h-16 <sm:w-15 <sm:h-13"
          >
            <BaseIcon name="bell-icon" class="w-6 <sm:w-4" />
          </div>
          <div class="flex items-center justify-between w-full h-full">
            <div class="">
              <h4
                class="font-bold text-secondary mb-1.5 text-base mr-1 <tablet:text-base <sm:mb-0 <mobile:tracking-normal"
              >
                Theme 1
              </h4>
              <p
                class="text-xs leading-4 text-zinc-600 mb-2 w-180 truncate <desktop:w-130 <laptop:w-92 <tablet:w-90 <sm:w-60 <mobile:w-35 <sm:mb-0"
              >
                Shanba Yakshanba kunlari 4 500 000 so’m Chorvog’ bochka Tog’ yon
                bag’rida XAY TEK uslubida qurilgan dacha 2 km 5 ta yotoqxona 1
                bolalar yotoqxonasi...
              </p>
              <div class="flex">
                <span class="block mr-1 text-xs text-zinc-500 <mobile:hidden"
                  >Yuborildi</span
                >
                <span
                  class="block text-xs text-secondary-light <mobile:w-14 truncate"
                  >4 hours ago</span
                >
              </div>
            </div>
            <div class="flex flex-col justify-between items-end h-full">
              <button
                class="flex items-center justify-center w-6 h-6 rounded-default bg-gray-300 hover:bg-red-600"
              >
                <BaseIcon
                  name="delete-icon"
                  class="transition fill-white stroke-white"
                />
              </button>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
