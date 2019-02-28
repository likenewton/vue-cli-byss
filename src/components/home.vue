<template>
  <div class="containers home-container" :class="[isMobile ? 'MOBILE' : 'PC']">
    <v-header @openWechat="isShowWechat = true" @toBarone="toYxts" @toTop="toTop" @toWeChat="toWeChat">
      <div v-if="!isMobile" class="logo-wrapper fl">
        <img src="../assets/image/logo.png">
      </div>
    </v-header>
    <div class="section section_1">
      <img v-if="!isMobile" class="bg" src="../assets/image/index/index_bg_01.jpg">
      <img v-if="isMobile" class="bg" src="../assets/image/index/index_m_bg_01.jpg">
      <div v-if="!isMobile" class="js-Download">
        <v-download></v-download>
      </div>
      <div v-if="isMobile" class="download-block">
        <img src="../assets/image/download_block_m.png">
        <span class="js-Download-m" @click="download"></span>
      </div>
    </div>
    <div class="section section_2">
      <img v-if="!isMobile" class="bg" src="../assets/image/index/index_bg_02.jpg">
      <img v-if="isMobile" class="bg" src="../assets/image/index/index_m_bg_02.jpg">
      <div class="xwzx-title" ref='xwzx'>
        <img src="../assets/image/xwzx.png">
      </div>
        <div class="xwzx-content">
          <div class="left">
            <div class="swiper-container js-Swiper_01">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <router-link :to="{name: 'NEWS', query: {TYPE: 'NEWS', ID: '_8'}}">
                    <img src="../assets/image/index/index_P_01.png">
                  </router-link>
                </div>
                <div class="swiper-slide">
                  <router-link :to="{name: 'NEWS', query: {TYPE: 'NEWS', ID: '_7'}}">
                    <img src="../assets/image/index/index_P_02.png">
                  </router-link>
                </div>
              </div>
              <div class="swiper-pagination" style="cursor: default"></div>
            </div>
            <div v-if="isMobile" class="hr border-bottom-1px"></div>
          </div>
          <div class="right">
            <router-link :to="{name: 'NEWS', query: {TYPE}}">
              <div class="js-more_news pointer"></div>
            </router-link>
            <div class="js-newsType">
              <span class="type" :class="{active: showNewsType === 'LASTEST'}" @click="showNewsType = 'LASTEST'">最新</span>
              <span class="type" :class="{active: showNewsType === 'NEWS'}" @click="showNewsType = 'NEWS'">公告</span>
              <span class="type" :class="{active: showNewsType === 'ACTIVITIES'}" @click="showNewsType = 'ACTIVITIES'">活动</span>
              <span class="type" :class="{active: showNewsType === 'WALKTHROUGH'}" @click="showNewsType = 'WALKTHROUGH'">攻略</span>
            </div>
            <div class="news_title_content">
              <ul class="title-list">
                <li class="title-item" :class="{first: !isMobile && index === 0}" v-for="(item, index) in showData" :key="index" v-show="index < maxDisplay">
                  <span v-if="!isMobile && index === 0" class="yellow">NEW</span>
                  <span v-else class="type">[{{newsType}}]</span>
                  <router-link :to="{name: 'NEWS', query: {TYPE, ID: item.ID}}">
                    <span class="text js-article pointer ellipsis">{{item.text}}</span>
                  </router-link>
                  <span class="date">[{{item.date}}]</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="section section_3">
        <img v-if="!isMobile" class="bg" src="../assets/image/index/index_bg_03.jpg">
        <img v-if="isMobile" class="bg" src="../assets/image/index/index_m_bg_03.jpg">
        <div class="yxts-title">
          <img src="../assets/image/yxts.png">
        </div>
          <div class="yxts-content" ref="yxts">
            <div class="swiper-container js-Swiper_02">
              <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../assets/image/index/index_carousel_01.png"></div>
                  <div class="swiper-slide"><img src="../assets/image/index/index_carousel_02.png"></div>
                    <div class="swiper-slide"><img src="../assets/image/index/index_carousel_03.png"></div>
                      <div class="swiper-slide"><img src="../assets/image/index/index_carousel_04.png"></div>
                      </div>
                    </div>
                    <div v-if="!isMobile" class="btn-swiper btn-prev" @click="swiper2.swipeNext()"></div>
                    <div v-if="!isMobile" class="btn-swiper btn-next" @click="swiper2.swipePrev()"></div>
                  </div>
                </div>
                <div v-if="!isMobile" class="slide-bar-warpper">
                  <div class="slide-bar">
                    <span class="bar-item bar_01" @click="tobar1"></span>
                    <span class="bar-item bar_02" :class="{bar_act_02: isShowWechat, bar_act: isShowWechat}" @click="isShowWechat = true"></span>
                    <span class="bar-item bar_03" :class="{bar_act_03: isShowDownload, bar_act: isShowDownload}" @click="isShowDownload = true"></span>
                    <span class="bar-item bar_04" @click="openServer"></span>
                    <span class="bar-top pointer" @click="toTop"></span>
                  </div>
                </div>
                <div v-if="isShowDownload && !isMobile" class="download-mask-wrapper">
                  <div class="js-Download_02">
                    <v-download :isShowCloseBtn="true" @closeDownload="isShowDownload = false"></v-download>
                  </div>
                </div>
                <div v-if="isShowWechat && !isMobile" class="gzwx-mask-wrapper">
                  <v-focus-wechat @closeWechat="isShowWechat = false"></v-focus-wechat>
                </div>
                <v-footer :isMobile="isMobile" :type="isMobile ? 3 : 1">
                  <v-qrcode v-if="isMobile"></v-qrcode>
                </v-footer>
              </div>
</template>
<script>
import Vue from 'vue'
import vHeader from '@/components/common/vHeader'
import vFooter from '@/components/common/vFooter'
import vDownload from '@/components/common/vDownload'
import vQrcode from '@/components/common/vQrcode'
import vFocusWechat from '@/components/common/vFocusWechat'
import Swiper from '../../static/swiper2/idangerous.swiper.min.js'
import $ from '../../static/jquery/jquery.min.js'
import STATIC from '../assets/js/static.js'
import Unit from '../assets/js/unit.js'

Vue.component('vHeader', vHeader)
Vue.component('vFooter', vFooter)
Vue.component('vDownload', vDownload)
Vue.component('vFocusWechat', vFocusWechat)
Vue.component('vQrcode', vQrcode)

Unit.server53(STATIC._53CodeSrc)

export default {
  name: 'Home',
  data() {
    return {
      // 是否是移动端设备（手机，ipad）
      isMobile: Unit.browser().versions.mobile || Unit.browser().versions.iPad,
      // 要展示的文章列表
      titleList: STATIC.titleList,
      swiper1: null,
      swiper2: null,
      isShowDownload: false,
      isShowWechat: false,
      isShowModal: false,
      showNewsType: 'LASTEST',
      maxDisplay: 4
    }
  },
  methods: {
    tobar1() {
      $('html, body').animate({ scrollTop: $('.xwzx-content').offset().top - ($(window).height() - $('.xwzx-content').height()) / 2 }, 500)
    },
    toYxts() {
      $('html, body').animate({ scrollTop: $('.yxts-content').offset().top - ($(window).height() - $('.yxts-content').height()) / 2 }, 500)
    },
    toTop() {
      $('html, body').animate({ scrollTop: 0 }, 500)
    },
    toWeChat() {
      $('html, body').animate({ scrollTop: $('.weixin-qrcode').offset().top }, 500)
    },
    download() {
      window.open(STATIC.downloadLinks.byss[0])
    },
    openServer() {
      $('#KFLOGO .Lelem')[0].onclick()
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      $('.wxzx-content .left').width('')
      $('.wxzx-content .left').width(Math.round($('.wxzx-content .left').width()))
      if (this.isMobile) {
        $('.wxzx-content .left').height(Math.round($('.wxzx-content .left').width() / 480 * 327))
      } else {
        this.maxDisplay = Math.floor(($(window).width() > 1280 ? $(window).width() : 1280) / 260)
      }
    })
    window.dispatchEvent(new Event('resize'))
    this.swiper1 = new Swiper('.js-Swiper_01', {
      loop: true,
      autoplay: 5000,
      pagination: `.swiper-pagination`,
      paginationClickable: true,
      autoplayDisableOnInteraction: false
    })
    this.swiper2 = new Swiper('.js-Swiper_02', {
      loop: true,
      autoplay: 5000,
      paginationClickable: true,
      autoplayDisableOnInteraction: false
    })
  },
  computed: {
    showData() {
      if (this.showNewsType === 'LASTEST') {
        let data = []
        let arr = ['NEWS', 'ACTIVITIES', 'WALKTHROUGH']
        arr.forEach((v) => {
          this.titleList[v].forEach((item) => {
            data.push(item)
          })
        })
        // 按照时间顺序排序
        for (var i = 0; i < data.length - 1; i++) {
          for (var j = i; j < data.length - 1; j++) {
            if (data[j].date < data[j + 1].date) {
              [data[j], data[j + 1]] = [data[j + 1], data[j]]
            }
          }
        }
        return data
      } else {
        return this.titleList[this.showNewsType]
      }
    },
    newsType() {
      const A = {
        'LASTEST': '公告',
        'NEWS': '公告',
        'ACTIVITIES': '活动',
        'WALKTHROUGH': '攻略'
      }
      return A[this.showNewsType]
    },
    TYPE() {
      return this.showNewsType === 'LASTEST' ? 'NEWS' : this.showNewsType
    }
  }
}

</script>
<style lang="scss">
@import '../../static/swiper2/idangerous.swiper.css';
@import '../assets/style/home.scss';

</style>
