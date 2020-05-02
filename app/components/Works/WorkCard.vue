<template>
  <div class="Card_Wrap">
    <div class="Card_Img_Wrap">
      <img :src="work.src" :alt="work.title" />
    </div>

    <div class="Card_Text_Wrap">
      <h3 class="Card_Title">
        {{ work.title }}
      </h3>

      <p class="Card_Text">
        {{ work.text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

type Work = {
  title: string
  src: string
  text: string
}

export default Vue.extend({
  props: {
    work: {
      type: Object as PropType<Work>,
      required: true
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
      white-space: pre-line;
    }
  }
}

@media screen and (min-width: 770px) {
  .Card_Wrap {
    max-width: 25vw;
    margin: 5vh auto;
  }
}
</style>
