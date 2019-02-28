<template>
  <div class="v-header clearfix" :class="[isMobile ? 'MOBILE-H' : 'PC-H', pageType]">
    <div class="header-inner" :class="{'module-core': !isMobile}">
      <slot>
        <!-- 默认是移动端的slot，PC从外边传递 -->
        <img class="logo" src="../../assets/image/qrcode_icon.png">
        <h1>
          <p>捕鱼圣手</p>
          <span>满屏爆金根本停不下来!!</span>
        </h1>
        <a class="js-Download-H" :href="link" target="_blank"></a>
        <span class="iconfont menu" :class="{'show-menu': isShowMenu}" @click="controlMenu"></span>
      </slot>
    </div>
    <div v-show="isShowMenu" class="header-mask" @click="closeMenu"></div>
    <!-- pc端 -->
    <ul v-if="!isMobile" class="nav-list fr clearfix">
      <!-- PAGE NEWS -->
      <li v-if="pageType==='NEWS'">
        <router-link :to="{name: 'HOME'}">
          <span class="ch">首页</span>
          <span class="en">HOME</span>
        </router-link>
      </li>
      <li v-if="pageType==='NEWS'">
        <router-link :to="{name: 'NEWS', query: {TYPE: 'NEWS'}}" :class="{active: isActive('NEWS')}">
          <span class="ch">新闻公告</span>
          <span class="en">NEWS</span>
        </router-link>
      </li>
      <li v-if="pageType==='NEWS'">
        <router-link :to="{name: 'NEWS', query: {TYPE: 'ACTIVITIES'}}" :class="{active: isActive('ACTIVITIES')}">
          <span class="ch">精彩活动</span>
          <span class="en">ACTIVITIES</span>
        </router-link>
      </li>
      <li v-if="pageType==='NEWS'">
        <router-link :to="{name: 'NEWS', query: {TYPE: 'WALKTHROUGH'}}" :class="{active: isActive('WALKTHROUGH')}">
          <span class="ch">游戏攻略</span>
          <span class="en">WALKTHROUGH</span>
        </router-link>
      </li>
      <!-- PAGE HOME -->
      <li v-if="pageType==='HOME'">
        <router-link :to="{name: 'NEWS', query: {TYPE: 'NEWS'}}">
          <span class="ch">新闻资讯</span>
          <span class="en">NEWS</span>
        </router-link>
      </li>
      <li v-if="pageType==='HOME'">
        <div @click="$emit('toBarone')">
          <span class="ch">游戏特色</span>
          <span class="en">CHARACTERISTIC</span>
        </div>
      </li>
      <li v-if="pageType==='HOME'">
        <div @click="$emit('openWechat')">
          <span class="ch">微信公众号</span>
          <span class="en">WECHAT</span>
        </div>
      </li>
      <li v-if="pageType==='HOME'">
        <div @click="openServer">
          <span class="ch">联系客服</span>
          <span class="en">CONTACT</span>
        </div>
      </li>
      <li v-if="pageType==='HOME'">
        <router-link :to="{name: 'NEWS', query: {TYPE: 'NEWS', ID: '_6'}}">
          <span class="ch">关于我们</span>
          <span class="en">ABOUT</span>
        </router-link>
      </li>
    </ul>
    <!-- 移动端 -->
    <transition name="slide">
      <!-- PAGE HOME -->
      <ul v-if="isMobile" v-show="isShowMenu" class="nav-list fr clearfix" @click="isShowMenu = false">
        <li v-if="['NEWS', 'AGREEMENT'].includes(pageType)">
          <router-link :to="{name: 'HOME'}">
            <span class="ch">首页</span>
            <span class="en">HOME</span>
          </router-link>
        </li>
        <li v-if="pageType==='NEWS'">
          <router-link :to="{name: 'NEWS', query: {TYPE: 'NEWS'}}">
            <span class="ch">新闻公告</span>
            <span class="en">NEWS</span>
          </router-link>
        </li>
        <li v-if="pageType==='NEWS'">
          <router-link :to="{name: 'NEWS', query: {TYPE: 'ACTIVITIES'}}">
            <span class="ch">精彩活动</span>
            <span class="en">ACTIVITIES</span>
          </router-link>
        </li>
        <li v-if="pageType==='NEWS'">
          <router-link :to="{name: 'NEWS', query: {TYPE: 'WALKTHROUGH'}}">
            <span class="ch">游戏攻略</span>
            <span class="en">WALKTHROUGH</span>
          </router-link>
        </li>
        <li v-if="pageType==='HOME'" @click="$emit('toTop')">
          <div>
            <span class="ch">首页</span>
            <span class="en">HOME</span>
          </div>
        </li>
        <li v-if="pageType==='HOME'">
          <router-link :to="{name: 'NEWS', query: {TYPE: 'NEWS'}}">
            <span class="ch">新闻资讯</span>
            <span class="en">NEWS</span>
          </router-link>
        </li>
        <li v-if="pageType==='HOME'" @click="$emit('toBarone')">
          <div>
            <span class="ch">游戏特色</span>
            <span class="en">CHARACTERISTIC</span>
          </div>
        </li>
        <li v-if="['HOME', 'NEWS'].includes(pageType)" @click="$emit('toWeChat')">
          <div>
            <span class="ch">微信公众号</span>
            <span class="en">WECHAT</span>
          </div>
        </li>
        <li v-if="pageType==='HOME'">
          <router-link :to="{name: 'NEWS', query: {TYPE: 'NEWS', ID: '_6'}}">
            <span class="ch">关于我们</span>
            <span class="en">ABOUT</span>
          </router-link>
        </li>
        <li v-if="pageType==='AGREEMENT'">
          <router-link :to="{name: 'NEWS', query: {TYPE: 'NEWS'}}">
            <span class="ch">资讯中心</span>
            <span class="en">NEWS</span>
          </router-link>
        </li>
      </ul>
      <slot name="other"></slot>
    </transition>
  </div>
</template>
<script>
import $ from '../../../static/jquery/jquery.min.js'
import STATIC from '../../assets/js/static.js'
import Unit from '../../assets/js/unit.js'
import { mapState } from 'vuex'

export default {
  name: 'vHeader',
  data() {
    return {
      isMobile: Unit.browser().versions.mobile || Unit.browser().versions.iPad,
      isShowMenu: false,
      link: STATIC.downloadLinks.byss[0]
    }
  },
  props: {
    pageType: {
      default: 'HOME'
    }
  },
  mounted() {},
  methods: {
    controlMenu() {
      this.isShowMenu = !this.isShowMenu
    },
    closeMenu() {
      this.isShowMenu = false
    },
    isActive(type) {
      return this.TYPE === type
    },
    openServer() {
      $('#KFLOGO .Lelem')[0].onclick()
    }
  },
  computed: {
    ...mapState({
      TYPE: 'TYPE'
    })
  }
}

</script>
<style scoped lang="scss">
.PC-H {
  position: absolute;
  width: 100%;
  height: 108px;
  z-index: 9;

  &.HOME {
    .header-inner {
      height: 0;
    }

    .logo-wrapper {
      height: 100%;
      padding: 10px 0;
      width: 130px;
      transform: translateX(-70px);

      img {
        width: 145px;
        height: 108px;
      }
    }

    ul {
      position: absolute;
      display: flex;
      width: 845px;
      height: 108px;
      padding: 0 50px;
      margin-top: 10px;
      left: 50%;
      transform: translateX(-50%);
      background: url('../../assets/image/nav-bg.png') no-repeat;
    }

    li {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 10px 0;

      &.active,
      &:hover {
        * {
          color: #ffe327 !important;
        }

      }

      a,
      div {
        display: inline;
        color: #fff;
        text-align: center;
        cursor: pointer;
      }

      span {
        display: inline-block;
        width: 100%;
      }

      .ch {
        font-size: 18px;
      }

      .en {
        font-size: 12px;
        color: #087bd7;
      }
    }
  }

  &.NEWS {
    background: #142d6b;

    ul {
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -200px;
      display: flex;
      width: 530px;
      height: 104px;

      li {
        display: flex;
        padding: 0 24px;
        height: 104px;
        align-items: center;
        justify-content: center;

        div,
        a {
          cursor: pointer;
          text-align: center;

          &:hover {
            * {
              color: #ffe327
            }
          }

          &.active {
            * {
              color: #ffe327
            }
          }
        }

        .ch {
          color: #fff;
          font-size: 18px;
        }

        .en {
          font-size: 12px;
          color: #087bd7;
        }
      }
    }

    .weixin-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3D(340px, -50%, 0);
    }

    .qrcode-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3D(-50%, -50%, 0);
      width: 20%;
      height: 20%;
    }
  }

  .module-core {
    position: relative;
  }

}

.MOBILE-H {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.24rem;
  z-index: 99;

  .header-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 98;
    background: url('../../assets/image/header_bg.png') no-repeat;
    background-size: 100% 100%;

  }

  .header-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: -1;
  }

  .logo {
    position: absolute;
    height: 1.0rem;
    left: 0.3rem;
    top: 0.12rem;

  }

  h1 {
    position: absolute;
    width: 100%;
    left: 1.46rem;
    top: 0.27rem;

    p {
      color: #fff;
      font-size: 0.4rem;
      height: 0.5rem;
      line-height: 0.5rem;
      font-weight: bold;
    }

    span {
      position: absolute;
      font-size: 0.2rem;
      top: 0.50rem;
      left: 0;
    }
  }

  .js-Download-H {
    position: absolute;
    top: 0.27rem;
    right: 1.04rem;
    width: 2.56rem;
    height: 0.9rem;
    background: url('../../assets/image/download.png') no-repeat;
    background-size: 100% 100%;
  }

  .menu {
    padding: 0.2rem;
    box-sizing: content-box;
    position: absolute;
    top: 0.22rem;
    right: -0.04rem;
    width: 0.78rem;
    height: 0.45rem;
    background: url('../../assets/image/menue-small-2.png') no-repeat;
    background-origin: content-box;
    background-size: 100% 100%;

    &.show-menu {
      right: 0.14rem;
      width: 0.423rem;
      height: 0.45rem;
      background: url('../../assets/image/menu-close.png') no-repeat;
      background-origin: content-box;
      background-size: 100% 100%;
    }

  }

  .nav-list {
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 1.24rem;
    width: 100%;
    padding: 0 0.3rem;
    z-index: 9;

    li {
      height: 1.2rem;
      line-height: 1.2rem;

      div, a {
        width: 100%;
        height: 100%;
        display: inline-block;
      }

      .ch {
        font-size: 0.32rem
      }

      .en {
        font-family: 'Arial';
        font-size: 0.28rem;
      }
    }
  }

  * {
    color: #fff;
    font-family: tahoma, "Microsoft YaHei", sans-serif
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
}

</style>
