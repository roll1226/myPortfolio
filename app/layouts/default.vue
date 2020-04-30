<template>
  <div>
    <PortfolioHead />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PortfolioHead from '~/components/PortfolioHead.vue'

export default Vue.extend({
  components: {
    PortfolioHead
  }
})
</script>

<style lang="scss">
html {
  font-family: 'MaruZawa', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #fdff99;
}

html,
body {
  overflow: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

*:focus {
  outline: none;
}

.Title_Wrap {
  margin-top: 20vh;
  text-align: center;
  font-size: 4rem;
  letter-spacing: 2rem;
  padding-left: 2rem;
  color: #985633;
  text-shadow: 3px 3px 4px #b3b3b3;
}

.Sub_Title {
  margin-top: 10vh;
  text-align: center;
  font-size: 4rem;
  letter-spacing: 2rem;
  padding-left: 2rem;
  color: #985633;
  text-shadow: 3px 3px 4px #b3b3b3;
}

.No_Scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

@media screen and(min-width: 770px) {
  .Title_Wrap {
    margin-top: 25vh;
  }

  .Sub_Title {
    margin-top: 14vh;
  }
}
</style>
