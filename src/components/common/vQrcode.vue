<template>
  <div class="v-qrcode">
    <div class="section_1">
      <span class="weixin-logo"></span>
      <span class="weixin-text">关注微信公众号</span>
      <span class="weixin-qrcode">
        <img src="../../assets/image/weixin_guanzhu.jpg" alt="捕鱼圣手微信公众号">
      </span>
      <div class="qrcode-text">
        <p class="one">长按二维码或保存二维码</p>
        <p class="two">或搜索公众号 : <span class="yellow">捕鱼圣手</span></p>
      </div>
      <span class="text">更多惊喜等你发现~!!</span>
    </div>
    <div class="section_2" @click="toTop">
      <span class="to-top"></span>
    </div>
  </div>
</template>
<script>
import $ from '../../../static/jquery/jquery.min.js'
export default {
  name: 'vQrcode',
  data() {
    return {}
  },
  methods: {
    toTop() {
      $('html, body').animate({scrollTop: 0}, 500)
    }
  }
}

</script>
<style scoped lang="scss">
.v-qrcode {
  * {
    font-size: 0.18rem;
  }
  .section_1 {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 71.73%;
    background: url('../../assets/image/index/index_m_bg_04.jpg') no-repeat;
    background-size: 100% 100%;

    .weixin-logo {
      position: absolute;
      width: 0.69rem;
      height: 0.69rem;
      top: 8%;
      left: 50%;
      transform: translateX(-50%);
      background: url('../../assets/image/weixin_y.png') no-repeat;
      background-size: 100% 100%;

    }

    .weixin-text {
      position: absolute;
      color: #fff;
      top: calc(8% + 0.85rem);
      font-size: 0.28rem;
      left: 50%;
      transform: translateX(-50%);
    }

    .weixin-qrcode {
      position: absolute;
      width: 2.28rem;
      height: 2.28rem;
      top: 32%;
      left: 50%;
      transform: translateX(-50%);

      img {
        width: 100%;
      }

    }

    .qrcode-text {
      position: absolute;
      top: calc(32% + 2.4rem);
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      font-size: 0.28rem;

      .yellow {
        color: #ffd800;
      }
    }

    .text {
      position: absolute;
      bottom: 0.15rem;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      font-size: 0.18rem;
    }
  }

  .section_2 {
    position: relative;
    height: 1.24rem;
    width: 100%;
    background: url('../../assets/image/header_bg.png') no-repeat;
    background-size: 100% 100%;

    .to-top {
      position: absolute;
      width: 1.73rem;
      height: 0.38rem;
      top: 50%;
      left: 50%;
      transform: translate3D(-50%, -50%, 0);
      background: url('../../assets/image/to-top.png') no-repeat;
      background-size: 100% 100%;

    }
  }
}

</style>
