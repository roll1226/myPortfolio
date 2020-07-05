<template>
  <div class="No_Scroll">
    <h2 class="Title_Wrap">
      わたし
    </h2>

    <About />

    <Skill />

    <Tweet />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import About from '~/components/Profile/About.vue'
import Skill from '~/components/Profile/Skill.vue'
import Tweet from '~/components/Profile/Tweet.vue'

export default Vue.extend({
  components: {
    About,
    Skill,
    Tweet
  },

  async asyncData({ store }) {
    await store.commit('nav/SET_IS_NAV', false)
  },

  head() {
    return {
      title: 'わたし'
    }
  }
})
</script>
