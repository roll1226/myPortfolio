<template>
  <div class="No_Scroll">
    <Snackbar />

    <h3 class="Title_Wrap">
      コンタクト
    </h3>

    <form>
      <div class="Input_Wrap">
        <input
          v-model="title"
          type="text"
          placeholder="タイトル"
          @blur="backtop"
        />
      </div>

      <div class="Input_Wrap">
        <input
          v-model="email"
          type="text"
          placeholder="メールアドレス"
          @blur="backtop"
        />
      </div>

      <div class="Input_Wrap">
        <textarea
          v-model="contact"
          class="Textarea_Wrap"
          placeholder="内容"
          @blur="backtop"
        ></textarea>
      </div>
    </form>

    <div v-if="!loading" class="Send_Btn_Wrap">
      <button class="Send_Btn" :disabled="!isContact" @click="sendContact">
        送信
      </button>
    </div>

    <div v-else class="Loading_Contact">
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { functions } from '@/plugins/firebase'
import Snackbar from '~/components/Contact/Snackbar.vue'

type Data = {
  title: string
  email: string
  contact: string
  loading: boolean
}

export default Vue.extend({
  components: {
    Snackbar
  },

  async asyncData({ store }) {
    await store.commit('nav/SET_IS_NAV', false)
  },

  data(): Data {
    return {
      title: '',
      email: '',
      contact: '',
      loading: false
    }
  },

  computed: {
    isContact(): boolean {
      if (this.title === '' || this.email === '' || this.contact === '')
        return false
      else return true
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
    },

    async sendContact() {
      this.loading = true
      try {
        const contactFunc = functions.httpsCallable('email')
        const contactData = {
          title: this.title,
          email: this.email,
          contact: this.contact
        }
        const contact: { data: string } = await contactFunc(contactData)
        const contactJson: { message: string } = JSON.parse(contact.data)

        if (contactJson.message === 'success！') {
          this.snackbar('送信しました。', true)

          this.title = ''
          this.email = ''
          this.contact = ''
        } else {
          this.snackbar('送信に失敗しました。', true)
        }
      } catch (error) {
        this.snackbar('送信に失敗しました。', true)
      }
    },

    snackbar(text: string, bool: boolean) {
      this.loading = false
      this.$store.commit('contact/SET_IS_SNACKBAR', bool)
      this.$store.commit('contact/SET_SNACKBAR_TEXT', text)

      setTimeout(() => {
        this.snackbar('', false)
      }, 2500)
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
  letter-spacing: 0.2rem;
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

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
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

.Loading_Contact {
  .spinner {
    margin: 2.5vh auto 0;
    text-align: center;
  }

  .spinner > div {
    width: 18px;
    height: 18px;
    background-color: #985633;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
}
</style>
