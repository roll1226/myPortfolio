<template>
  <div class="Head_Wrap">
    <img
      src="~/assets/img/myHead.svg"
      alt="PortfilioHeadImg"
      class="Head_Img"
      :class="{ Open_Nav_Img: isNav }"
    />

    <NavPlate :class="{ Close_All_Nav: !isNav }" />

    <NavList :class="{ Close_All_Nav: !isNav }" />

    <button
      class="Nav_Btn"
      :class="{ Open_Nav: isNav, Close_Nav: !isNav }"
      @click="navBtn"
    >
      <img src="~/assets/img/pudding.png" alt="pudding.png" />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavList from '~/components/NavList.vue'
import NavPlate from '~/components/NavPlate.vue'

// type NuxtData = {
//   isNav: boolean
// }

export default Vue.extend({
  components: {
    NavList,
    NavPlate
  },

  computed: {
    isNav(): boolean {
      return this.$store.state.nav.isNav
    }
  },

  // data(): NuxtData {
  //   return {
  //     isNav: false
  //   }
  // },

  methods: {
    navBtn() {
      // this.isNav = !this.isNav
      if (this.isNav === false) this.$store.commit('nav/SET_IS_NAV', true)
      else this.$store.commit('nav/SET_IS_NAV', false)
    }
  }
})
</script>

<style lang="scss">
@keyframes clossAllNav {
  from {
    width: 100vw;
  }

  to {
    width: 0%;
  }
}

.Head_Wrap {
  position: relative;

  .Close_All_Nav {
    animation: clossAllNav 1ms linear 405ms forwards;
  }

  .Head_Img {
    z-index: 40;
    position: absolute;
    top: -225vw;
    left: 0px;
    width: 100vw;
    transition: all 300ms cubic-bezier(0.28, 0.52, 0.03, 0.9) 0ms;
    &.Open_Nav_Img {
      top: 0vw;
    }
  }

  .Nav_Btn {
    position: absolute;
    z-index: 41;
    top: 2vh;
    right: 2vw;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    transform-origin: center;
    transition: all 200ms;
    transform: scale(1);
    transition: all 300ms cubic-bezier(0.28, 0.52, 0.03, 0.9) 0s;

    &.Open_Nav {
      transform: rotate(-180deg);
    }

    &.Close_Nav {
      transform: rotate(0deg);
    }

    img {
      transition: all 200ms;
      transform: scale(1);
      width: 25vw;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
}

@media screen and(min-width: 770px) {
  .Head_Wrap {
    .Head_Img {
      top: -248vw;
      &.Open_Nav_Img {
        top: -170vw;
      }
    }

    .Nav_Btn {
      top: 0.6vw;
      right: 2vw;
      img {
        width: 9vw;
      }
    }
  }
}
</style>
