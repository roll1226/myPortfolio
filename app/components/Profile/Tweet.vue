<template>
  <div>
    <h3 class="Sub_Title">
      つぶやき
    </h3>

    <div class="Twitter_Wrap">
      <a
        class="twitter-timeline"
        data-chrome="noscrollbar nofooter noheader"
        data-width="600"
        data-height="500"
        href="https://twitter.com/Tonotomo1226?ref_src=twsrc%5Etfw"
        >Tweets by Tonotomo1226</a
      >
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss">
.Twitter_Wrap {
  margin-top: 5vw;
  text-align: center;
  padding: 0 10vw;

  &::-webkit-scrollbar {
    display: none;
  }
}

@media screen and(min-width: 770px) {
  .Twitter_Wrap {
    margin-top: 2vw;
    padding: 0 0vw;
  }
}
</style>
