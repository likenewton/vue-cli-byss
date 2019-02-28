<template>
  <div class="v-download" v-show="isShowDownload">
    <div class="download-block-wrapper">
      <div id="qrcode">
        <div class="qrcode" ref="qrcode"></div>
        <img class='qrcode-icon' src="../../assets/image/qrcode_icon.png">
      </div>
      <div class="btn-download btn-android" @click="download"></div>
      <div class="btn-download btn-ios" @click="download"></div>
      <div v-if="isShowCloseBtn" class="close pointer" @click="$emit('closeDownload')"></div>
    </div>
  </div>
</template>
<script>
import STATIC from '../../assets/js/static'
import QRCode from '../../../static/qrcode/qrcode'

export default {
  name: 'vQrcode',
  data() {
    return {
      qrcode: null,
      isShowDownload: true
    }
  },
  props: ['isShowCloseBtn'],
  mounted() {
    this.isShowDownload = true
    let e = this.$refs.qrcode
    window.addEventListener('resize', function() {
      e.innerHTML = ''
      this.qrcode = new QRCode(e, {
        text: STATIC.downloadLinks.byss[0],
        width: Math.floor(e.offsetWidth),
        height: Math.floor(e.offsetHeight)
      })
    })
    window.dispatchEvent(new Event('resize'))
  },
  methods: {
    download() {
      window.open(STATIC.downloadLinks.byss[0])
    }
  }
}

</script>
<style scoped lang="scss">
.v-download {

  .download-block-wrapper {
    width: 100%;
    height: 0;
    background-image: url('../../assets/image/download_block.png');
    background-size: 100% 100%;
    padding-top: 49.37%;

    #qrcode {
      position: absolute;
      width: 15.1%;
      height: 30.6%;
      top: 36.5%;
      left: 39.5%;
      .qrcode {
        width: 100%;
        height: 100%;
      }
    }

    .qrcode-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3D(-50%, -50%, 0);
      width: 24%;
      height: 24%;
    }

    .close {
      position: absolute;
      top: 18%;
      left: 87%;
      width: 30px;
      height: 30px;
      background: url('../../assets/image/close.png') no-repeat;
      background-size: 100% 100%;
    }

    .btn-download {
      position: absolute;
      width: 20.5%;
      height: 13.6%;
      left: 62%;
      cursor: pointer;

      &.btn-android {
        top: 36%;
      }

      &.btn-ios {
        top: 54.5%;
      }
    }
  }

}

</style>
