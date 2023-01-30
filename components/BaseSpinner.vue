<template>
  <div class="spinner space-x-2 text-center">
    <div
      v-for="i in 3"
      :key="i"
      class="bg-secondary w-[18px] h-[18px] rounded-full inline-block"
      :class="`bounce${i}`"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'BaseSpinner',
}
</script>

<style>
.spinner > div {
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  animation-delay: -0.16s;
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
  }

  40% {
    transform: scale(1);
  }
}
</style>
