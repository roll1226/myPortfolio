<template>
  <div class="Index_Wrap">
    <h1 class="Portfolio_Title My_Name">
      鶴巻智康の
    </h1>
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
@mixin fontFamily() {
  font-family: 'ヒラギノ丸ゴ Pro W4', 'ヒラギノ丸ゴ Pro',
    'Hiragino Maru Gothic Pro', 'ヒラギノ角ゴ Pro W3',
    'Hiragino Kaku Gothic Pro', 'HG丸ｺﾞｼｯｸM-PRO', 'HGMaruGothicMPRO',
    'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
}

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

    &.My_Name {
      @include fontFamily();
      font-size: 2.1rem;
      letter-spacing: 0.8rem;
    }
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

      &.My_Name {
        letter-spacing: 1rem;
        font-size: 4.1rem;
      }
    }

    .Protfolio_Spoon_Img {
      width: 46vw;
    }
  }
}
</style>
