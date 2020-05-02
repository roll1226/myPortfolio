<template>
  <div class="No_Scroll">
    <h2 class="Title_Wrap">
      作品
    </h2>

    <div v-for="(work, index) in works" :key="index" class="Works_Card_Wrap">
      <WorkCard :work="work" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { firestore } from '@/plugins/firebase'
import WorkCard from '~/components/Works/WorkCard.vue'

export interface IWork {
  title: string
  text: string
  src: string
}

type Data = {
  works: IWork[]
}

export default Vue.extend({
  components: {
    WorkCard
  },

  async asyncData({ store }) {
    await store.commit('nav/SET_IS_NAV', false)
  },

  data(): Data {
    return { works: [] }
  },

  async created() {
    const works = await firestore.collection('works').get()
    for (let index = 0; index < works.size; index++) {
      this.works.push(works.docs[index].data() as IWork)
    }
  },

  head() {
    return {
      title: '作品'
    }
  }
})
</script>

<style lang="scss">
.Works_Card_Wrap {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
</style>
