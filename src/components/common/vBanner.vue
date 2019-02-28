<template>
  <div class="v-banner" :class="[isMobile ? 'MOBILE-B' : 'PC-B']">
    <div class="banner">
      <span class="fish"></span>
      <h2 class="fuck-sohard">资讯中心</h2>
    </div>
  </div>
</template>
<script>
import Unit from '../../assets/js/unit.js'

export default {
  name: 'vBanner',
  data() {
    return {
      isMobile: Unit.browser().versions.mobile || Unit.browser().versions.iPad
    }
  }
}

</script>
<style scoped lang="scss">
.v-banner {
  position: relative;
  height: 285px;
  overflow: hidden;

  .banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 247px;
    background: url("../../assets/image/news/news_banner.png") center no-repeat;
  }

  .fish {
    position: absolute;
    width: 242px;
    height: 254px;
    background: url('../../assets/image/news/news_fish.png') no-repeat;
    background-size: 100% 100%;
    left: 50%;
    bottom: -35px;
  }

  h2 {
    position: absolute;
    color: #fff;
    letter-spacing: 2px;
    left: 50%;
  }

  &.MOBILE-B {
    margin-top: 0.9rem;

    .fish {
      transform: translateX(-15%);
    }

    h2 {
      font-size: 0.5rem;
      bottom: 10%;
      transform: translateX(-150%);
    }
  }

  &.PC-B {
    .fish {
      margin-left: 70px;
    }

    h2 {
      font-size: 40px;
      bottom: 18%;
      margin-left: -490px;
    }
  }
}

</style>
