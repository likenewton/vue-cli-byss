<template>
  <div class="v-focusWechat">
    <img class="code" src="../../assets/image/weixin_guanzhu.jpg">
    <span class="close pointer" @click="$emit('closeWechat')"></span>
  </div>
</template>
<script>
export default {
  name: 'vQrcode',
  data() {
    return {}
  }
}

</script>
<style scoped lang="scss">
.v-focusWechat {
  position: absolute;
  top: 50%;
  left: 49%;
  transform: translate3D(-50%, -50%, 0);
  width: percent(672);
  height: 0;
  padding-top: percent(240);
  background: url('../../assets/image/gzwx_block.png') no-repeat;
  background-size: 100% 100%;
  min-width: 448px;
  min-height: 160px;

  .code {
    position: absolute;
    top: 5%;
    left: 15px;
    width: 32%;
    height: 90%;
  }

  .close {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 23px;
    height: 23px;
    background: url('../../assets/image/close_black.png') no-repeat;
    background-size: 100% 100%;
  }
}

</style>
