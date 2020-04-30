<template>
  <div>
    <h3 class="Sub_Title">
      スキル
    </h3>

    <div v-for="(skill, index) in skills" :key="index">
      <SkillGraph :skill="skill" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SkillGraph from '~/components/Profile/SkillGraph.vue'

export interface ISkills {
  name: string
  color: string
  value: string
}

type Data = {
  skills: ISkills[]
}

export default Vue.extend({
  components: {
    SkillGraph
  },

  data(): Data {
    return {
      skills: [
        { name: 'Vue, Nuxt', color: '#40B27F', value: '80' },
        { name: 'React, Next', color: '#6CD3FE', value: '30' },
        { name: 'Typescript', color: '#0177C7', value: '60' }
      ]
    }
  }
})
</script>

<style lang="scss"></style>
