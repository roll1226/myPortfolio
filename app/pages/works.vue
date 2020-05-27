<template>
  <div class="No_Scroll">
    <h2 class="Title_Wrap">
      作品
    </h2>

    <template v-if="!loading">
      <div class="Works_Card_Wrap">
        <WorkCard v-for="(work, index) in works" :key="index" :work="work" />
      </div>

      <WorkModal />
    </template>

    <template v-else>
      <AllLoading />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { firestore } from '@/plugins/firebase'
import WorkCard from '~/components/Works/WorkCard.vue'
import WorkModal from '~/components/Works/WorkModal.vue'
import AllLoading from '~/components/AllLoading.vue'
import { IWork } from '@/store/work'

type Data = {
  works: IWork[]
  loading: boolean
}

export default Vue.extend({
  components: {
    WorkCard,
    WorkModal,
    AllLoading
  },

  async asyncData({ store }) {
    await store.commit('nav/SET_IS_NAV', false)
  },

  data(): Data {
    return {
      works: [],
      loading: false
    }
  },

  async created() {
    this.loading = true

    const works = await firestore.collection('works').get()
    for (let index = 0; index < works.size; index++) {
      this.works.push(works.docs[index].data() as IWork)
      this.loading = false
    }

    this.loading = false
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
