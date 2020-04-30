<template>
  <div class="About_Wrap">
    <p>
      専門学校に通っている学生が、<span class="My_Name">鶴巻智康</span>である。
    </p>

    <p>
      わたしの好きなプログラミングで、多くの人に利用してもらい、<span
        class="Thank_You"
        ><span class="Brackets">「</span>ありがとう<span class="Brackets"
          >」</span
        ></span
      >と言ってもらえるサービスを作るべく、学んでいる。
    </p>
  </div>
</template>

<style lang="scss">
@mixin fontFamily() {
  font-family: 'ヒラギノ丸ゴ Pro W4', 'ヒラギノ丸ゴ Pro',
    'Hiragino Maru Gothic Pro', 'ヒラギノ角ゴ Pro W3',
    'Hiragino Kaku Gothic Pro', 'HG丸ｺﾞｼｯｸM-PRO', 'HGMaruGothicMPRO',
    'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
}

.About_Wrap {
  max-width: 52vw;
  margin: 5vh auto 0;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;

  p {
    margin-bottom: 2vh;
    line-height: 2rem;
  }

  .My_Name {
    @include fontFamily();
    letter-spacing: 0.3rem;
    color: #985633;
    font-weight: bold;
  }

  .Thank_You {
    font-size: 1.8rem;
    color: #f00;
    font-weight: bold;

    .Brackets {
      @include fontFamily();
    }
  }
}
</style>
