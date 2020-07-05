<template>
  <div
    class="Snackbar_Wrap"
    :class="{ Open_Snackbar: isSnackbar, Close_Snackbar: !isSnackbar }"
  >
    <div class="Snackbar">
      <img class="Snackbar_Img" :src="snackbarImg" alt="aaaa" />
      <p class="Snackbar_text">
        {{ snackbarText }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      snackbarImg: require('~/assets/img/snackbar.svg')
    }
  },

  computed: {
    isSnackbar(): boolean {
      return this.$store.state.contact.isSnackbar
    },

    snackbarText(): string {
      return this.$store.state.contact.snackbarText
    }
  }
})
</script>

<style lang="scss">
.Snackbar_Wrap {
  width: 25vw;
  position: absolute;
  bottom: -25vw;
  margin: 0 0.5rem 0.5rem 0.5rem;
  transition: all 500ms;

  &.Open_Snackbar {
    bottom: 0;
  }

  &.Close_Snackbar {
    bottom: -25vw;
  }

  .Snackbar {
    position: relative;
    width: 100%;

    .Snackbar_Img {
      position: relative;
      width: 100%;
      filter: drop-shadow(0.5px 0.5px 3px #000);
    }

    .Snackbar_text {
      padding-left: 15px;
      letter-spacing: 0.1rem;
      font-size: 1.3rem;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
}
</style>
