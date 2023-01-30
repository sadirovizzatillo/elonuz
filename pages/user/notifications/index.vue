<script>
export default {
    name: 'NotificationIndex'
}
</script>

<template>
    <div class="w-full">
        <h3 class="font-bold text-xl mb-4">E’lonlardan kelgan xabarlar</h3>
        <ul class="">
            <li class="flex items-center w-full relative  box-border h-29 p-4 bg-white rounded-lg shadow-md shadow-zinc-300 mb-2 <sm:p-3">
                <img src="https://picsum.photos/id/3/80" class="block rounded-full w-20 h-20 mr-3 <laptop:w-18 <laptop:h-18" alt="User photo">
                <div class="flex items-center justify-between w-full h-full">
                    <div class="">
                    <div class="flex mb-1.5">
                        <h4 class="font-bold text-secondary text-base mr-1 <tablet:text-base <mobile:mb-0 <mobile:tracking-normal">Odil Nizomov</h4>
                        <span class="text-base text-zinc-600 mr-1 <laptop:hidden <tablet:block <tablet:text-sm <mobile:hidden">E'loningizga xabar yuborildi</span>
                        <a href="" class="text-base text-secondary-light font-medium w-48 truncate <desktop:w-44 <laptop:hidden <tablet:block <tablet:w-35 <tablet:text-sm <sm:hidden">Tog’da joylashgan uy oilaviy dam olish uchun</a>
                    </div>
                    <p class="text-xs leading-4 text-zinc-600 mb-2 w-160 truncate <desktop:w-105 <laptop:w-72 <tablet:w-97 <sm:w-35 <mobile:w-35 <mobile:mb-3">
                        Shanba Yakshanba kunlari 4 500 000 so’m Chorvog’ bochka Tog’ yon bag’rida XAY TEK uslubida qurilgan dacha 2 km 5 ta yotoqxona 1 bolalar yotoqxonasi...
                    </p>
                    <div class="flex">
                        <span class="block mr-1 text-xs text-zinc-500 <mobile:hidden">Yuborildi</span>
                        <span class="block text-xs text-secondary-light <mobile:w-14 truncate">4 hours ago</span>
                    </div>
                </div>
                <div class="flex flex-col justify-between items-end h-full">
                    <button class="flex items-center justify-center w-6 h-6 rounded-default bg-gray-300 <sm:hidden">
                        <BaseIcon name="delete-icon" class="transition fill-white stroke-white hover:fill-red-600"/>
                    </button>
                    <BaseButton type="info" size="extra-small" class="block w-20 <sm:absolute bottom-4">Ko'rish</BaseButton>
                </div>
                </div>
            </li>
        </ul>
    </div>
</template>