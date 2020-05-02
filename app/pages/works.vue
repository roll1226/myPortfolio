<template>
  <div class="No_Scroll">
    <h2 class="Title_Wrap">
      作品
    </h2>

    {{ works }}

    <div class="Card_Wrap">
      <div class="Card_Img_Wrap">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/j4k1-b789f.appspot.com/o/logo%2FlogoBg.svg?alt=media&token=9f65cd88-4797-4f9a-b567-c2f39907298e"
          alt=""
        />
      </div>

      <div class="Card_Text_Wrap">
        <h3 class="Card_Title">
          GLAMPI
        </h3>

        <p class="Card_Text">
          2年生のグループ作品。
          <br />
          流行していたグランピングの予約サイト。同じ目的を持った人達で集まり、安くとまれるサービスを作った。
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { firestore } from '@/plugins/firebase'

export interface IWork {
  title: string
  text: string
  src: string
}

type Data = {
  works: IWork[]
}

export default Vue.extend({
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
.Card_Wrap {
  max-width: 25vw;
  background: #fff;
  border-radius: 10px;
  box-shadow: 3.5px 3.5px 1.5px rgba(0, 0, 0, 0.1);

  .Card_Img_Wrap {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      max-height: 200px;
      object-fit: none;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }
  }

  .Card_Text_Wrap {
    padding: 1.3rem;

    .Card_Title {
      font-size: 1.7rem;
      margin-bottom: 1rem;
    }

    .Card_Text {
      line-height: 1.5rem;
    }
  }
}
</style>
