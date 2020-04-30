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
import { firestore } from '@/plugins/firebase'

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
      skills: []
    }
  },

  async created() {
    const skill = await firestore.collection('skills').get()

    const skillList: ISkills[] = []

    for (let index = 0; index < skill.size; index++) {
      skillList.push(skill.docs[index].data() as ISkills)
    }

    this.skills = skillList
  }
})
</script>

<style lang="scss"></style>
