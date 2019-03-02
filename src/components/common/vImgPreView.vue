<template>
  <div class="v-img-pre-view pointer" :class="[isMobile ? 'MOBILE-P' : 'PC-P']" @click="$emit('close')">
    <div class="preview-container">
      <img class="preview" src="../../assets/image/lisence.png">
    </div>
  </div>
</template>
<script>

import Unit from '../../assets/js/unit.js'

export default {
  name: 'vImgPreView',
  data() {
    return {
      isMobile: Unit.browser().versions.mobile || Unit.browser().versions.iPad
    }
  }
}

</script>
<style scoped lang="scss">

.PC-P {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 199;
  background: rgba(0, 0, 0, 0.8);

  .preview-container {
    margin: 0 auto;
    height: 100%;
    text-align: center;

    img {
      height: 100%;
    }
  }
}

.MOBILE-P {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 199;
  background: rgba(0, 0, 0, 0.8);

  .preview-container {
    position: absolute;
    margin: 0 auto;
    height: 60%;
    top: 50%;
    left: 50%;
    transform: translate3D(-50%, -50%, 0);
    text-align: center;

    img {
      height: 100%;
    }
  }
}

</style>
