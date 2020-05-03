<template>
  <div class="No_Scroll">
    <h3 class="Title_Wrap">
      コンタクト
    </h3>

    <div class="Input_Wrap">
      <input type="text" placeholder="タイトル" @blur="backtop" />
    </div>

    <div class="Input_Wrap">
      <input type="text" placeholder="メールアドレス" @blur="backtop" />
    </div>

    <div class="Input_Wrap">
      <textarea
        class="Textarea_Wrap"
        placeholder="内容"
        @blur="backtop"
      ></textarea>
    </div>

    <div class="Send_Btn_Wrap">
      <button class="Send_Btn">
        送信
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {
  title: string
  email: string
  contact: string
}

export default Vue.extend({
  async asyncData({ store }) {
    await store.commit('nav/SET_IS_NAV', false)
  },

  data(): Data {
    return {
      title: '',
      email: '',
      contact: ''
    }
  },

  methods: {
    backtop() {
      let currentY = window.pageYOffset
      const step = 0 / currentY > 1 ? 10 : 100
      const timeStep = (0 / currentY) * step
      const intervalID = setInterval(scrollUp, timeStep)

      function scrollUp() {
        currentY = window.pageYOffset
        if (currentY === 0) {
          clearInterval(intervalID)
        } else {
          scrollBy(0, -step)
        }
      }
    }
  },

  head() {
    return {
      title: 'コンタクト'
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

@mixin commonCss($height: auto, $paddding: 0.8rem) {
  font-size: 1rem;
  box-sizing: border-box;
  width: 100%;
  height: $height;
  padding: $paddding;
  transition: 0.3s;
  letter-spacing: 0.3rem;
  color: #000;
  border: 2px solid #1b2538;
  border-radius: 10px;
}

@mixin commonFocus() {
  border: 2px solid #fdff99;
  outline: none;
  box-shadow: 0 0 8px 4px rgba(152, 86, 51, 0.5);
}

.Input_Wrap {
  max-width: 80vw;
  margin: 4vh auto 0;

  input[type='text'] {
    @include fontFamily();
    @include commonCss(auto, 0.5rem);

    &:focus {
      @include commonFocus();
    }
  }
}

.Textarea_Wrap {
  @include fontFamily();
  @include commonCss(7rem, 0.5rem);

  &:focus {
    @include commonFocus();
  }
}

.Send_Btn_Wrap {
  text-align: center;
  .Send_Btn {
    font-family: 'MaruZawa', 'Source Sans Pro', -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      sans-serif;

    margin-top: 2vh;
    padding: 0.5rem 1.2rem;
    text-decoration: none;
    font-weight: bold;
    font-size: 1em;
    color: #985633;
    border: solid 2px #985633;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      @include commonFocus();
    }
  }
}

@media screen and(min-width: 770px) {
  .Input_Wrap {
    max-width: 52vw;
    margin: 5.5vh auto 0;

    input[type='text'] {
      @include commonCss();
    }
  }

  .Textarea_Wrap {
    @include commonCss(9rem, 0.8rem);
  }

  .Send_Btn_Wrap {
    .Send_Btn {
      font-size: 1.3em;
    }
  }
}
</style>
