<template>
  <div class="Head_Wrap">
    <div class="Head_Img">
      <img src="~/assets/myHead.svg" alt="PortfilioHeadImg" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
.Head_Wrap {
  position: relative;
  .Head_Img {
    position: absolute;
    top: -45vw;
    left: 0px;
    img {
      width: 100vw;
    }
  }
}

@media screen and(min-width: 770px) {
  .Head_Wrap {
    .Head_Img {
      top: -56vw;
    }
  }
}
</style>
