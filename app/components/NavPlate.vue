<template>
  <div class="Plate_Wrap" :class="{ Open_Plate: isNav, Close_Plate: !isNav }">
    <div class="Plate"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    isNav(): boolean {
      return this.$store.state.nav.isNav
    }
  }
})
</script>

<style lang="scss">
@mixin animetionPlate() {
  transition: all 400ms cubic-bezier(0.04, 0.18, 0, 1) 0s;
}

.Plate_Wrap {
  position: absolute;
  z-index: 41;

  left: 50%;
  top: 50vh;
  transform: translateY(-50%) translateX(-50%);

  &.Open_Plate {
    .Plate {
      transform: scale(1) rotate(30deg);
    }
  }

  &.Close_Plate {
    .Plate {
      transform: scale(0) rotate(-90deg);
    }
  }

  .Plate {
    width: 500px;
    height: 500px;
    border-bottom: solid 7px #ddd;
    background: white;
    border-radius: 50%;

    box-shadow: 12px 0px 0px rgba(0, 0, 0, 0.1);
    display: inline-block;
    margin: 0 10px 0 0;
    position: relative;
    transform-origin: center;
    @include animetionPlate();

    &::before {
      content: '';
      display: block;
      height: 280px;
      width: 280px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
      border-radius: 50%;
      border-top: solid 10px #ccc;
      opacity: 0.4;
      background: rgba(255, 255, 255, 1);
    }
  }
}

@media screen and(min-width: 770px) {
  .Plate_Wrap {
    &.Open_Plate {
      .Plate {
        width: 580px;
        height: 580px;

        &::before {
          height: 310px;
          width: 310px;
        }
      }
    }
  }
}
</style>
