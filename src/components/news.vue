<template>
  <div class="containers" :class="[isMobile ? 'MOBILE-M' : 'PC-M']">
    <v-header @openWechat="isShowWechat = true" @toWeChat="toWeChat" pageType="NEWS">
      <div v-if="!isMobile" class="header-download-wrapper" @mouseenter="renderHeaderQrcode">
        <img src="../assets/image/news/news_logo.png" class="logo">
        <h1>捕鱼圣手</h1>
        <img class="icon" src="../assets/image/news/news_download_icon.png">
        <img class="android pointer" src="../assets/image/news/news_header_android.png" @click="download">
        <img class="ios pointer" src="../assets/image/news/news_header_ios.png" @click="download">
        <span class="qrcode-wrapper">
          <span class="qrcode" ref="qrcode"></span>
        <img class='qrcode-icon' src="../assets/image/qrcode_icon.png">
        </span>
      </div>
      <template v-if="!isMobile" v-slot:other>
        <img class="weixin-wrapper" src="../assets/image/news/news_weixin.png" @click="isShowWechat = true">
      </template>
    </v-header>
    <v-banner></v-banner>
    <div class="crumbs-nav">
      <div class="module-core">
        <span><router-link :to="{name: 'HOME'}">首页</router-link></span>
        <span class="consolas iconfont">&#xe632;</span>
        <span><router-link :to="{name: 'NEWS', query: { TYPE }}">{{textData[TYPE].crumbs}}</router-link></span>
        <span v-if="ID && !isMobile" class="consolas iconfont">&#xe632;</span>
        <span v-if="ID && !isMobile">{{choiceArticleTitle.text}}</span>
      </div>
    </div>
    <v-article-title></v-article-title>
    <div v-if="isShowDownload && !isMobile" class="download-mask-wrapper">
      <div class="js-Download_02">
        <v-download :isShowCloseBtn="true" @closeDownload="isShowDownload = false"></v-download>
      </div>
    </div>
    <div v-if="isShowWechat && !isMobile" class="gzwx-mask-wrapper">
      <v-focus-wechat @closeWechat="isShowWechat = false"></v-focus-wechat>
    </div>
    <v-footer :isMobile="isMobile" @openWechat="isShowWechat = true" @openDownload="isShowDownload = true" @openServer="openServer" :type="isMobile ? 3 : 2">
      <v-qrcode v-if="isMobile"></v-qrcode>
    </v-footer>
  </div>
</template>
<script>
import STATIC from '../assets/js/static.js'
import QRCode from '../../static/qrcode/qrcode'
import Vue from 'vue'
import vHeader from '@/components/common/vHeader'
import vFooter from '@/components/common/vFooter'
import vBanner from '@/components/common/vBanner'
import vDownload from '@/components/common/vDownload'
import vArticleTitle from '@/components/common/vArticleTitle'
import Unit from '../assets/js/unit.js'
import vFocusWechat from '@/components/common/vFocusWechat'
import vQrcode from '@/components/common/vQrcode'
import $ from '../../static/jquery/jquery.min.js'
import { mapMutations, mapState } from 'vuex'
console.log(STATIC)

Vue.component('vBanner', vBanner)
Vue.component('vArticleTitle', vArticleTitle)
Vue.component('vHeader', vHeader)
Vue.component('vFooter', vFooter)
Vue.component('vFocusWechat', vFocusWechat)
Vue.component('vQrcode', vQrcode)
Vue.component('vDownload', vDownload)

Unit.server53(STATIC._53CodeSrc)

export default {
  name: 'introduction',
  data() {
    return {
      qrcode: null,
      isMobile: Unit.browser().versions.mobile || Unit.browser().versions.iPad,
      isShowDownload: false,
      isShowWechat: false,
      // 所有文章数据
      sqlDateList: STATIC.articleList,
      // 要展示的文章列表
      titleList: STATIC.titleList,
      // 一些文案数据
      textData: {
        NEWS: {
          crumbs: '新闻公告',
          type: '公告'
        },
        ACTIVITIES: {
          crumbs: '精彩活动',
          type: '活动'
        },
        WALKTHROUGH: {
          crumbs: '游戏攻略',
          type: '攻略'
        }
      }
    }
  },
  mounted() {
    this.SET_TYPE({ TYPE: this.$route.query.TYPE })
    // 如果路由中没有ID参数, 即进入文章列表选择，如果有ID,即进入文章
    if (this.$route.query.ID) {
      this.SET_ID({ ID: this.$route.query.ID })
    } else {
      this.SET_ID({ ID: 0 })
    }
  },
  methods: {
    ...mapMutations([
      'SET_TYPE',
      'SET_ID'
    ]),
    toWeChat() {
      $('html, body').animate({ scrollTop: $('.weixin-qrcode').offset().top }, 500)
    },
    renderHeaderQrcode() {
      let e = this.$refs.qrcode
      e.innerHTML = ''
      this.qrcode = new QRCode(e, {
        text: STATIC.downloadLinks.byss[0],
        width: 210,
        height: 210
      })
    },
    download() {
      window.open(STATIC.downloadLinks.byss[0])
    },
    openServer() {
      $('#KFLOGO .Lelem')[0].onclick()
    }
  },
  computed: {
    ...mapState({
      TYPE: 'TYPE',
      ID: 'ID'
    }),
    choiceArticleTitle() {
      return this.titleList[this.TYPE].filter((v) => v.ID === this.ID)[0]
    }
  },
  watch: {
    '$route': function(newVal, oldVal) {
      this.SET_TYPE({ TYPE: this.$route.query.TYPE })
      if (newVal.query.ID) {
        this.SET_ID({ ID: this.$route.query.ID })
      } else {
        this.SET_ID({ ID: 0 })
      }
    }
  }
}

</script>
<style scoped lang="scss">
$width: 1920;
$borderColor: #b2b2b2;

@function percent($n) {
  @return percentage($n/$width);
}

.PC-M {
  .v-header {
    position: relative;
  }

  .header-download-wrapper {
    position: absolute;
    width: 270px;
    top: 0;
    left: 0;
    height: 100%;

    &:hover {
      .qrcode-wrapper {
        visibility: visible;
      }
    }

    .qrcode-wrapper {
      visibility: hidden;
      position: absolute;
      top: 110px;
      left: 155px;
      background: #fff;
      width: 230px;
      height: 230px;
      padding: 10px;
    }

    .logo {
      margin-top: 10px;
    }

    .icon {
      margin-left: 20px;
      margin-top: 40px;
    }

    .android {
      margin-top: 40px;
    }

    .ios {
      margin-top: 40px;
    }

    h1 {
      position: absolute;
      top: 20px;
      left: 136px;
      color: #fff;
      font-size: 32px;
    }
  }

  .crumbs-nav {
    height: 38px;
    background: #d7d7d7;
    line-height: 38px;
    margin-top: -38px;

    * {
      color: #333;
      font-size: 14px;
    }
  }

  .weixin-wrapper {
    cursor: pointer;
  }

  .download-mask-wrapper,
  .gzwx-mask-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 199;

    .js-Download_02 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3D(-55%, -50%, 0);
      width: percent(945);
      min-width: 630px;
    }
  }
}

.MOBILE-M {
  overflow-x: hidden;

  .crumbs-nav {
    padding: 0 0.25rem;
    height: 38px;
    background: #d7d7d7;
    line-height: 38px;
    margin-top: -38px;

    * {
      color: #333;
      font-size: 14px;
    }
  }
}

</style>
