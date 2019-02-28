<template>
  <div class="v-footer" :class="[isMobile ? 'MOBILE-F' : 'PC-F']">
    <slot></slot>
    <div v-if="type === 1 && !isMobile" class="footer-inner type1">
      <div class="center">
        <p>
          <span>海南边缘网络科技有限公司</span>
          <span>电话 :</span>
          <span>0898-36690405</span>
          <span>地址 :</span>
          <span>海南省老城高新技术产业示范区海南生态软件园A09幢三层301</span>
        </p>
        <p>
          <span>文网文备案 :</span>
          <span class="open_varchar"><a href="../../../static/image/lisence.png" target="_blank">琼网文（2018）4638-443号</a></span>
          <span>icp备案 :</span>
          <span>琼icp备18001345号</span>
          <span>文网游备字</span>
          <span>〔2017〕Ｍ-CSG 2384 号</span>
          <span class="ivs"></span>
        </p>
        <p>
          <span>纠纷处理方式 :</span>
          <span>联系客服或依<router-link :to="{name: 'AGREEMENT'}">《用户协议》</router-link>约定方式处理</span>
        </p>
      </div>
    </div>
    <div v-if="type === 2 && !isMobile" class="footer-inner type2 clearfix">
      <div class="module-core">
        <div class="left">
          <ul>
            <li @click="$emit('openDownload')">
              <span class="icon"></span>
              <span class="text">游戏下载</span>
            </li>
            <li @click="$emit('openWechat')">
              <span class="icon"></span>
              <span class="text">微信公众号</span>
            </li>
            <li @click="$emit('openServer')">
              <span class="icon"></span>
              <span class="text">联系客服</span>
            </li>
          </ul>
        </div>
        <div class=right>
          <div>
            <div>
              <span>海南边缘网络科技有限公司</span>
              <span>电话 :</span>
              <span>0898-36690405</span>
            </div>
            <div>
              <span>地址 :</span>
              <span>海南省老城高新技术产业示范区海南生态软件园A09幢三层301</span>
            </div>
          </div>
          <div>
            <div>
              <span>文网文备案 :</span>
              <span class="open_varchar"><a href="../../../static/image/lisence.png" target="_blank">琼网文（2018）4638-443号</a></span>
              <span>icp备案 :</span>
              <span>琼icp备18001345号</span>
            </div>
            <div>
              <span>文网游备字</span>
              <span>〔2017〕Ｍ-CSG 2384 号</span>
              <span class="ivs"></span>
            </div>
          </div>
          <div>
            <div>
              <span>纠纷处理方式 :</span>
              <span>联系客服或依<router-link :to="{name: 'AGREEMENT'}">《用户协议》</router-link>约定方式处理</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- type === 3 为移动端 -->
    <div v-if="type === 3 && isMobile" class="footer-inner">
      <div>
        <div>
          <span>海南边缘网络科技有限公司 </span>
          <span>电话 :</span>
          <span>0898-36690405</span>
        </div>
        <div>
          <span>地址 :</span>
          <span>海南省老城高新技术产业示范区海南生态软件园A09幢三层301</span>
        </div>
      </div>
      <div>
        <div>
          <span>文网文备案 :</span>
          <span><a href="../../../static/image/lisence.png">琼网文（2018）4638-443号</a></span>
        </div>
        <div>
          <span>ICP备案 :</span>
          <span>琼IPC备18001345号</span>
          <span>文网游备字</span>
          <span>〔2017〕Ｍ-CSG 2384 号<span class="ivs"></span></span>
        </div>
      </div>
      <div>
        <div>
          <span>纠纷处理方式 :</span>
          <span>联系客服或依<router-link :to="{name: 'AGREEMENT'}">《用户协议》</router-link>约定方式处理</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vFooter',
  data() {
    return {}
  },
  props: {
    type: {
      default: 3 // 1(PC-home), 2(PC-news), 3(MOBILE)
    },
    isMobile: {
      default: true
    }
  }
}

</script>
<style scoped lang="scss">
.PC-F {
  background: #101f43;

  * {
    font-size: 12px;
    color: #1e3a7f;
  }

  .type1 {
    padding: 30px 0;
    position: relative;

    * {
      font-size: 14px;
    }

    p {
      height: 21px;
      line-height: 21px;
    }

    .ivs {
      display: inline-block;
      width: 15px;
      height: 18px;
      background: url('../../assets/image/ivs.png') no-repeat;
      background-size: 100% 100%;
      vertical-align: text-top;
    }

    span {
      display: inline-block;
      padding: 0 5px;

      a {
        font-size: 14px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .type2 {
    padding: 30px 0;
    margin: 0 auto;

    * {
      font-size: 12px;
    }

    .left {
      float: left;
      width: 375px;
      height: 100%;

      ul {
        width: 100%;
        display: flex;
        height: 100%;
        justify-content: space-between;

        li {
          text-align: center;
          height: 100%;
          cursor: pointer;

          &:hover {
            .text {
              color: #05a8eb;
            }
          }

          .icon {
            display: inline-block;
            width: 45px;
            height: 45px;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            margin-bottom: 5px;
          }

          &:nth-child(1) {
            .icon {
              background-image: url('../../assets/image/footer_icon_01.png');
            }
          }

          &:nth-child(2) {
            .icon {
              background-image: url('../../assets/image/footer_icon_02.png');
            }
          }

          &:nth-child(3) {
            .icon {
              background-image: url('../../assets/image/footer_icon_03.png');
            }
          }

          .text {
            display: block;
            color: #fff;
            font-size: 18px;
          }
        }
      }
    }

    .right {
      float: right;
      width: 400px;
    }
  }

}

.MOBILE-F {
  margin: 0 auto;

  * {
    font-size: 0.18rem;
    color: #1e3a7f;
    text-align: center;
  }

  .footer-inner {
    background: #101f43;
    padding: 20px;
    width: 100%;

    .ivs {
      display: inline-block;
      width: 0.3rem;
      height: 0.36rem;
      background: url('../../assets/image/ivs.png') no-repeat;
      background-size: 100% 100%;
      vertical-align: text-top;
      margin-left: 5px;
    }

  }
}

</style>
