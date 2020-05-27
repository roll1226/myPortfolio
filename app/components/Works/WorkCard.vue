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
        {{ countText(work.text) }}
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
    },

    countText(text: string) {
      if (text.length <= 40) {
        return text
      } else {
        return text.slice(0, 38) + '...'
      }
    }
  }
})
</script>

<style lang="scss">
@mixin fontFamily() {
  font-family: 'ヒラギノ丸ゴ Pro W4', 'ヒラギノ丸ゴ Pro',
    'Hiragino Maru Gothic Pro', 'ヒラギノ角ゴ Pro W3',
    'Hiragino Kaku Gothic Pro', 'HG丸ｺﾞｼｯｸM-PRO', 'HGMaruGothicMPRO',
    'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
}
@keyframes workCard {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.Card_Wrap {
  @include fontFamily();
  width: 100%;
  margin: 2.5vh auto 2.5vh;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  transition: 200ms;
  cursor: pointer;
  animation: workCard 1s ease-out 0s forwards;

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
      margin-bottom: -15px;
    }

    .Card_Text {
      width: 100%;
      line-height: 1.5rem;
      letter-spacing: 0.1rem;
      white-space: pre-line;
      word-wrap: break-word;
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
