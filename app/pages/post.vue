<template>
  <div>
    <h1>
      test
    </h1>
    {{ posts }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { firestore } from '@/plugins/firebase'

export default Vue.extend({
  async asyncData() {
    const data = await firestore.collection('test').get()
    const posts = []
    for (let index = 0; index < data.size; index++) {
      posts.push(data.docs[index].data())
    }
    return { posts }
  }
})
</script>
