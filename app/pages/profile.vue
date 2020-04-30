<template>
  <div class="Profile_Wrap">
    <h2 class="Profile_Title">
      わたし
    </h2>

    <About />

    <Skill />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import About from '~/components/Profile/About.vue'
import Skill from '~/components/Profile/Skill.vue'

export default Vue.extend({
  components: {
    About,
    Skill
  },

  async asyncData({ store }) {
    await store.commit('nav/SET_IS_NAV', false)
  }
})
</script>

<style lang="scss">
.Profile_Wrap {
  height: 100vh;
  overflow-y: auto;

  .Profile_Title {
    margin-top: 25vh;
    text-align: center;
    font-size: 4rem;
    letter-spacing: 2rem;
    padding-left: 2rem;
    color: #985633;
    text-shadow: 3px 3px 4px #b3b3b3;
  }
}
</style>
