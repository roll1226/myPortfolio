<template>
  <div class="No_Scroll">
    <h2 class="Title_Wrap">
      作品
    </h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ store }) {
    await store.commit('nav/SET_IS_NAV', false)
  }
})
</script>

<style lang="scss"></style>
