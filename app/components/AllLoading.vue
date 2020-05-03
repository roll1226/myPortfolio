<template>
  <div class="Work_Loading_Wrap">
    <div class="spinner">
      <div class="dot1"></div>
      <div class="dot2"></div>
    </div>
  </div>
</template>

<style lang="scss">
@keyframes sk-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}

.Work_Loading_Wrap {
  width: 40vw;
  height: 40vw;
  margin: 0 auto;

  .spinner {
    margin: 100px auto;
    width: 40px;
    height: 40px;
    position: relative;
    text-align: center;

    animation: sk-rotate 1.5s infinite linear;
  }

  .dot1,
  .dot2 {
    width: 60%;
    height: 60%;
    display: inline-block;
    position: absolute;
    top: 0;
    background-color: #985633;
    border-radius: 100%;

    animation: sk-bounce 1.5s infinite ease-in-out;
  }

  .dot2 {
    top: auto;
    bottom: 0;

    animation-delay: -0.7s;
  }
}
</style>
