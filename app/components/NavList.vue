<template>
  <div class="Nav_Wrap">
    <!-- わたしは 作品 思い出 -->
    <ul class="Nav_List_Wrap" :class="{ disabled: !isNav }">
      <li
        v-if="nowRoute !== 'index'"
        class="Nav Nav_Space"
        :class="{ Open_Nav_1: isNav, Close_Nav: !isNav }"
      >
        <nuxt-link to="/">
          トップ
        </nuxt-link>
      </li>

      <li
        v-if="nowRoute !== 'profile'"
        class="Nav Nav_Space"
        :class="{
          Open_Nav_1: isNav && nowRoute === 'index',
          Open_Nav_2: isNav && nowRoute !== 'index',
          Close_Nav: !isNav
        }"
      >
        <nuxt-link to="/profile">
          わたし
        </nuxt-link>
      </li>

      <li
        v-if="nowRoute !== 'works'"
        class="Nav"
        :class="{
          Open_Nav_2: isNav && nowRoute !== 'contact',
          Open_Nav_3: isNav && nowRoute === 'contact',
          Nav_Space: nowRoute !== 'contact',
          Close_Nav: !isNav
        }"
      >
        <nuxt-link to="/works">
          作品
        </nuxt-link>
      </li>

      <li
        v-if="nowRoute !== 'contact'"
        class="Nav"
        :class="{ Open_Nav_3: isNav, Close_Nav: !isNav }"
      >
        <nuxt-link to="/contact">
          コンタクト
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {
  nowRoute: string | null | undefined
}

export default Vue.extend({
  data(): Data {
    return {
      nowRoute: ''
    }
  },

  computed: {
    isNav(): boolean {
      return this.$store.state.nav.isNav
    }
  },

  watch: {
    $route(from) {
      this.nowRoute = from.name
    }
  },

  created() {
    this.nowRoute = this.$route.name
  }
})
</script>

<style lang="scss">
@mixin animetionNav($time, $timing, $opacity) {
  transition: all $time ease-in $timing;
  opacity: $opacity;
}

@keyframes hoverAnimetion {
  from {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
}

.Nav_Wrap {
  z-index: 42;
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);

  .Nav_List_Wrap {
    padding: 0;
    list-style-type: none !important;
    text-align: center;
    &.disabled {
      pointer-events: none;
    }
  }

  .Nav {
    font-size: 2rem;
    letter-spacing: 1rem;
    width: 100vw;

    a {
      padding-left: 1rem;
      text-decoration: none;
      color: #fdff99;
      text-shadow: 2px 2px 3px #000;
      @include animetionNav(250ms, 0ms, 0.6);

      &:hover {
        animation: hoverAnimetion 300ms linear 0s forwards;
      }
    }

    &.Nav_Space {
      padding-bottom: 3.5rem;
    }

    &.Open_Nav_1 {
      @include animetionNav(400ms, 450ms, 1);
    }

    &.Open_Nav_2 {
      @include animetionNav(400ms, 650ms, 1);
    }

    &.Open_Nav_3 {
      @include animetionNav(400ms, 850ms, 1);
    }

    &.Close_Nav {
      @include animetionNav(0ms, 0ms, 0);
    }
  }
}

@media screen and(min-width: 770px) {
  .Nav_Wrap {
    .Nav {
      font-size: 2.8rem;
      letter-spacing: 2rem;
      width: auto;

      a {
        padding-left: 2rem;
        text-shadow: 2.5px 2.5px 4px #000;
      }

      &.Nav_Space {
        padding-bottom: 8rem;
      }
    }
  }
}
</style>
