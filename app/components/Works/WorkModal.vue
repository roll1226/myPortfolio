<template>
  <div v-if="modal" class="Mask">
    <div class="Modal_Wrap" @click="closeModal"></div>

    <div class="Work_Card_Wrap">
      <div class="Work_Card_Img_Wrap">
        <img :src="work.src" :alt="work.title" />
      </div>

      <div class="Work_Card_Text_Wrap">
        <h3 class="Work_Card_Title">
          {{ work.title }}
        </h3>

        <div class="Work_Tag_Wrap">
          <p
            v-for="(technology, index) in work.technologies"
            :key="index"
            class="Work_Tag"
          >
            {{ technology }}
          </p>
        </div>

        <p class="Work_Card_Text">
          {{ work.text }}
        </p>

        <div class="Fa_Text_Wrap">
          <p class="Fa_Text">
            <a :href="work.github" target="_block">
              <fa class="Fa_Icon" :icon="faGithub" />
              Github
            </a>
          </p>

          <p class="Fa_Text">
            <a :href="work.page" target="_block">
              <fa class="Fa_Icon" :icon="faExternalLinkAlt" />
              Open Site
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { IWork } from '@/store/work'

export default Vue.extend({
  computed: {
    modal(): boolean {
      return this.$store.state.work.modal
    },

    work(): IWork {
      return this.$store.state.work.work
    },

    faExternalLinkAlt() {
      return faExternalLinkAlt
    },

    faGithub() {
      return faGithub
    }
  },

  methods: {
    closeModal() {
      this.$store.commit('work/SET_MODAL', false)

      const resetWork = {
        title: '',
        src: '',
        text: '',
        description: '',
        technologies: [],
        github: '',
        page: ''
      }
      this.$store.commit('work/SET_WORK', resetWork)
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
@keyframes openModal {
  from {
    width: 0vw;
    height: 0vh;
  }

  to {
    width: 85vw;
    height: 70vh;
  }
}

.Mask {
  @include fontFamily();
  position: absolute;
  z-index: 990;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.5);

  .Modal_Wrap {
    position: absolute;
    z-index: 995;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .Work_Card_Wrap {
    width: 85vw;
    height: 70vh;
    border-radius: 10px;
    background: #fff;
    position: absolute;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);

    animation: openModal 200ms linear 0s forwards;

    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      display: none;
    }

    .Work_Card_Img_Wrap {
      width: 100%;
      height: 250px;

      img {
        width: 100%;
        max-height: 250px;
        object-fit: none;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
      }
    }

    .Work_Card_Text_Wrap {
      width: 100%;
      padding: 1.3rem;

      .Work_Card_Title {
        font-size: 1.7rem;
        letter-spacing: 0.3rem;
      }

      .Work_Tag_Wrap {
        margin-top: 0.5rem;

        .Work_Tag {
          display: inline-block;
          padding: 0.2em 0.5rem;
          letter-spacing: 0.1rem;
          margin-bottom: 0.5rem;
          margin-right: 0.4rem;
          text-decoration: none;
          color: #985633;
          border: 1px solid #985633;
          border-radius: 2em;
        }
      }

      .Work_Card_Text {
        margin-top: -2.5vw;
        line-height: 1.5rem;
        white-space: pre-line;
        word-wrap: break-word;
        letter-spacing: 0.2rem;
      }

      .Fa_Text_Wrap {
        margin-top: 1rem;
        display: flex;

        .Fa_Text {
          font-size: 1rem;
          letter-spacing: 0.1rem;
          margin-right: 0.5rem;

          a {
            text-decoration: none;
            color: #985633;
            border: solid 1px #985633;
            padding: 0.1rem 0.7rem;
            border-radius: 500px;
            display: inline-block;
            transition: 200ms;

            .Fa_Icon {
              margin-right: 0.1rem;
            }

            &:hover {
              color: #fff;
              background: #985633;
            }
          }
        }
      }
    }
  }
}

@media screen and(min-width: 770px) {
  @keyframes openModal {
    from {
      width: 0vw;
      height: 0vh;
    }

    to {
      width: 40vw;
      height: 75vh;
    }
  }

  .Mask {
    .Work_Card_Wrap {
      width: 40vw;
      height: 75vh;

      .Work_Card_Img_Wrap {
        height: 420px;

        img {
          max-height: 420px;
        }
      }

      .Work_Card_Text_Wrap {
        .Work_Card_Text {
          margin-top: -1.2vw;
        }

        .Fa_Text_Wrap {
          .Fa_Text {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}
</style>
