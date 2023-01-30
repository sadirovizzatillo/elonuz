<script>
export default {
  name: 'UserShowInfo',
}
</script>

<template>
  <div
    class="w-full flex justify-between <sm:flex-col items-start p-6 rounded shadow-md bg-white"
  >
    <table class="sm:w-1/2 <sm:w-full <sm:order-1 <sm:mt-6">
      <tbody class="w-full">
        <tr class="w-full last:children:pb-0">
          <td class="w-1/2 pb-6 font-normal text-[15px] text-zinc-600">Ism</td>
          <td
            class="pb-6 font-normal text-[15px] text-slate-400 first-letter:uppercase"
          >
            Mirjalol
          </td>
        </tr>
      </tbody>
    </table>
    <label
      class="sm:self-center flex flex-col items-center  justify-center w-28 h-28 bg-light-400 rounded border border-slate-300"
    >
      <input class="sr-only" disabled type="file" name="user-img" />
      <BaseIcon
        name="add-img-icon"
        class="children:w-5 children:h-5 text-slate-300 mb-1.5"
      />
      <p class="max-w-15 w-full font-md text-sm text-slate-300 text-center">
        Rasm qo'shish
      </p>
    </label>
  </div>
</template>
