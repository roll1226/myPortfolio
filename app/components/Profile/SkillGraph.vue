<template>
  <div class="graph">
    <span
      class="bar"
      :style="`width: ${skill.value}%; background: ${skill.color};`"
      >{{ skill.name }}</span
    >
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

type Skill = {
  name: string
  color: string
  value: string
}

export default Vue.extend({
  props: {
    skill: {
      type: Object as PropType<Skill>,
      required: true
    }
  }
})
</script>

<style lang="scss">
.graph {
  position: relative;
  max-width: 80vw;
  margin: 5vh auto 0;
  border: 1px solid #985633;
  padding: 2px;

  .bar {
    display: block;
    position: relative;
    text-align: center;
    color: #fff;
    height: 2em;
    line-height: 2em;
  }
}

.graph .bar span {
  position: absolute;
  left: 1em;
}

@media screen and(min-width: 770px) {
  .graph {
    max-width: 52vw;
  }
}
</style>
