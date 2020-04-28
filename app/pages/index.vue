<template>
  <div>
    <h1 class="Portfolio_Title">
      たいとる
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss">
.Portfolio_Title {
  position: relative;
  color: #fdff99;
  text-shadow: 2.5px 2.5px 7px #000;
  font-size: 2.3rem;
  letter-spacing: 0.5rem;
  padding-top: 1vh;
  padding-left: 3vw;
}

@media screen and(min-width: 770px) {
  .Portfolio_Title {
    text-shadow: 3.5px 3.5px 8px #000;
    font-size: 4.5rem;
    letter-spacing: 0.7rem;
    padding-top: 0.5vh;
    padding-left: 1vw;
  }
}
</style>
