<template>
  <div class="Nav_Wrap">
    <!-- わたしは 作品 思い出 -->
    <ul>
      <li>
        <nuxt-link to="/profile">
          わたし
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="/works">
          作品
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="/memories">
          メモリー
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss">
.Nav_Wrap {
  z-index: 42;
  position: absolute;
}
</style>
