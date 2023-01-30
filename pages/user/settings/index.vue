<script>
import UserEditInfo from '~/components/UserEditInfo.vue'
import UserShowInfo from '~/components/UserShowInfo.vue'
import { $pushQuery } from '~/mixins/pushQuery.js'
import { $deleteQuery } from '~/mixins/deleteQuery.js'
export default {
  name: 'UserSettings',
  components: { UserEditInfo, UserShowInfo },
  mixins: [
    {
      methods: {
        $pushQuery,
        $deleteQuery,
      },
    },
  ],
  data() {
    return {
      UserEditInfo,
      UserShowInfo,
      editQuery: 'edit-info',
      verifyQuery: 'verify',
    }
  },
  computed: {
    activeComponent() {
      if (this.$route.query[this.editQuery]) {
        return [UserEditInfo, true]
      }
      return [UserShowInfo, false]
    },
    verifyVisable() {
      if (this.$route.query[this.verifyQuery]) {
        return true
      }
      return false
    },
  },
  methods: {
    verifySubmit() {
      const query = { ...this.$route.query }
      delete query[this.editQuery]
      delete query[this.verifyQuery]
      this.$router.push({ ...this.$route, query: { ...query } })
    },
  },
}
</script>

<template>
  <div class="w-full pb-4 flex flex-col">
    <h2 class="font-semibold text-xl mb-4">Shaxsiy ma'lumot</h2>
    <component :is="activeComponent[0]" />
    <BaseButton
      v-if="!activeComponent[1]"
      class="w-44 mt-8 self-end"
      @click="$pushQuery(editQuery, true)"
      >Tahrirlash</BaseButton
    >
    <BaseButton
      v-else-if="activeComponent[1]"
      class="w-44 mt-8 self-end"
      @click="$pushQuery(verifyQuery, true)"
      >Saqlash</BaseButton
    >
    <AuthVerifyModal :query-name="verifyQuery" @submit="verifySubmit" />
  </div>
</template>
