<script>
export default {
  name: 'CountDown',
  props: {
    finished: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentSeconds: 0,
    }
  },
  computed: {
    minutes() {
      return Math.floor(this.currentSeconds / 60)
        .toString()
        .padStart(2, '0')
    },
    seconds() {
      return (this.currentSeconds % 60).toString().padStart(2, '0')
    },
  },
  watch: {
    finished(val) {
      if (!val) {
        localStorage.removeItem(this.$route.name)
        this.initCurrentSeconds()
        this.intervalId = setInterval(this.handleInterval, 1000)
      }
    },
  },
  created() {
    if (process.client) {
      this.initCurrentSeconds()
      this.intervalId = setInterval(this.handleInterval, 1000)
    }
  },
  beforeDestroy() {
    this.clearInterval()
  },
  methods: {
    initCurrentSeconds() {
      let rawTargetDate = localStorage.getItem(this.$route.name)
      if (!rawTargetDate) {
        rawTargetDate = new Date().getTime() + 120 * 1000
        localStorage.setItem(this.$route.name, rawTargetDate)
      }
      const targetDate = JSON.parse(rawTargetDate)
      const currentDate = new Date().getTime()

      this.currentSeconds = Math.max(
        Math.floor((targetDate - currentDate) / 1000),
        0
      )
    },
    handleInterval() {
      if (this.currentSeconds <= 0) {
        this.clearInterval()
        this.$emit('update:finished', true)
        return
      }
      this.currentSeconds--
    },
    clearInterval() {
      if (this.intervalId) {
        clearInterval(this.intervalId)
      }
    },
  },
}
</script>
<template>
  <div
    class="text-base text-white"
    laptop="text-black"
    desktop="text-lg text-zinc-600"
  >
    {{ minutes }}:{{ seconds }}
  </div>
</template>
