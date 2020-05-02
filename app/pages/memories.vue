<template>
  <div class="No_Scroll">
    <h2 class="Title_Wrap">
      メモリー
    </h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ store }) {
    await store.commit('nav/SET_IS_NAV', false)
  },

  head() {
    return {
      title: 'メモリー'
    }
  }
})
</script>

<style lang="scss"></style>
