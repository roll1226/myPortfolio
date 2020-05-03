<template>
  <div class="Card_Wrap" @click="openModal(work)">
    <div class="Card_Img_Wrap">
      <img :src="work.src" :alt="work.title" />
    </div>

    <div class="Card_Text_Wrap">
      <h3 class="Card_Title">
        {{ work.title }}
      </h3>

      <p class="Card_Text">
        {{ work.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IWork } from '@/store/work'

export default Vue.extend({
  props: {
    work: {
      type: Object as PropType<IWork>,
      required: true
    }
  },

  methods: {
    openModal(work: IWork) {
      this.$store.commit('work/SET_MODAL', true)

      this.$store.commit('work/SET_WORK', work)
    }
  }
})
</script>

<style lang="scss">
.Card_Wrap {
  max-width: 100%;
  margin: 2.5vh auto 2.5vh;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  transition: 200ms;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  }

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
      letter-spacing: 0.3rem;
    }

    .Card_Text {
      line-height: 1.5rem;
      letter-spacing: 0.1rem;
      white-space: pre-line;
    }
  }
}

@media screen and (min-width: 770px) {
  .Card_Wrap {
    max-width: 30%;
    margin: 5vh auto;
  }
}
</style>
