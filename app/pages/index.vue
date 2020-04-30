<template>
  <div class="Index_Wrap">
    <h1 class="Portfolio_Title">
      プリン好きプログラマ
    </h1>
    <h2 class="Portfolio_Title">
      の
    </h2>
    <h2 class="Portfolio_Title">
      ポートフォリオ
    </h2>

    <img
      src="~/assets/img/spoon.svg"
      alt="spoonImg"
      class="Protfolio_Spoon_Img"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ store }) {
    await store.commit('nav/SET_IS_NAV', false)
  }
})
</script>

<style lang="scss">
.Index_Wrap {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .Portfolio_Title {
    text-align: center;
    position: relative;
    z-index: 2;
    color: #985633;
    text-shadow: 2.5px 2.5px 7px #b3b3b3;
    font-size: 2.3rem;
    letter-spacing: 0.5rem;
    padding-top: 1vh;
    padding-left: 3vw;
  }

  .Protfolio_Spoon_Img {
    z-index: 1;
    position: absolute;
    width: 98vw;
  }
}

@media screen and(min-width: 770px) {
  .Index_Wrap {
    .Portfolio_Title {
      text-shadow: 4px 4px 5px #b3b3b3;
      font-size: 4.5rem;
      letter-spacing: 0.7rem;
      padding-top: 0.5vh;
      padding-left: 1vw;
    }

    .Protfolio_Spoon_Img {
      width: 46vw;
    }
  }
}
</style>
