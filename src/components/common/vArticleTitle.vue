<template>
  <div class="v-article-title" :class="[isMobile ? 'MOBILE-A' : 'PC-A']">
    <div :class="{'module-core': !isMobile}">
      <div v-if="ID" class="article-wrapper">
        <h3 class="title">{{choiceArticleTitle.text}}</h3>
        <span class="date">{{choiceArticleTitle.date}}</span>
        <div v-html="sqlDateList[TYPE][ID]"></div>
      </div>
      <ul v-else class="title-list">
        <li v-for="(item, index) in titleList[TYPE]" :key="index" class="title-item border-bottom-1px" v-show="isShowArticleItem(index)">
          <span v-if="!isMobile">[{{textData[TYPE].type}}]</span>
          <router-link :to="{name: 'NEWS', query: {TYPE, ID: item.ID}}">
            <span class="text js-article" :class="{ellipsis: isMobile}">{{item.text}}</span>
          </router-link>
          <span class="date">{{item.date}}</span>
        </li>
      </ul>
      <div class="navigation" v-if="!ID">
        <span class="left-btn iconfont" :class="{more: currentPage > 1}" @click="getNewPage('Prev')">&#xe624;</span>
        <span class="curpage">{{currentPage}}</span>
        <span>/</span>
        <span class="totalpage">{{totalPage}}</span>
        <span class="right-btn iconfont" :class="{more: currentPage < totalPage}" @click="getNewPage('Next')">&#xe626;</span>
      </div>
    </div>
  </div>
</template>
<script>
import Unit from '../../assets/js/unit.js'
import STATIC from '../../assets/js/static.js'
import { mapState } from 'vuex'

export default {
  name: 'vArticleTitle',
  data() {
    return {
      isMobile: Unit.browser().versions.mobile || Unit.browser().versions.iPad,
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
      },
      currentPage: 1,
      pageSize: 6
    }
  },
  methods: {
    isShowArticleItem(index) {
      return (this.currentPage - 1) * this.pageSize <= index && index < this.currentPage * this.pageSize
    },
    getNewPage(dir) {
      if (dir === 'Next') {
        if (this.currentPage >= this.totalPage) return
        this.currentPage++
      } else {
        if (this.currentPage <= 1) return
        this.currentPage--
      }
    }
  },
  computed: {
    ...mapState({
      TYPE: 'TYPE',
      ID: 'ID'
    }),
    choiceArticleTitle() {
      return this.titleList[this.TYPE].filter((v) => v.ID === this.ID)[0]
    },
    totalPage() {
      return Math.ceil(this.titleList[this.TYPE].length / this.pageSize)
    }
  },
  watch: {
    '$route': function(newVal, oldVal) {
      this.currentPage = 1
    }
  }
}

</script>
<style scoped lang="scss">
$borderColor: #b2b2b2;

.PC-A {
  padding: 20px 0 30px;
  min-height: 700px;
  overflow: hidden;

  .title-list {
    .no-more {
      color: #aaa;
      height: 80px;
      line-height: 80px;
    }

    .title-item {
      height: 85px;
      line-height: 85px;

      .date {
        float: right;
        color: #ccc;
      }

      .text {
        color: #333;
        cursor: pointer;

        &:hover {
          color: #e92322;
        }
      }
    }
  }

  .navigation {
    margin-top: 20px;
    text-align: center;

    span {
      vertical-align: middle;
      display: inline-block;
      color: #bbb;
    }

    .left-btn,
    .right-btn {
      cursor: pointer;
      font-size: 30px;
      margin: 0 15px;

      &.more {
        color: #363636;
      }
    }
  }

  .article-wrapper {
    padding: 0 20px;

    h3.title {
      font-size: 28px;
      margin: 10px 0 0;
      font-weight: 300;
      letter-spacing: 2px;
    }

    .date {
      font-size: 12px;
      color: #333;
      margin-bottom: 20px;
    }
  }
}

.MOBILE-A {
  padding-bottom: 50px;
  .title-list {
    padding: 0 0.25rem;

    .no-more {
      color: #aaa;
      height: 80px;
      line-height: 80px;
    }

    * {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }

    .title-item {
      padding: 0.2rem 0;

      .date {
        color: #ccc;
        font-size: 12px;
        font-weight: normal;
      }

      .text {
        display: block;
        cursor: pointer;
      }
    }
  }

  .navigation {
    margin-top: 20px;
    text-align: center;

    span {
      vertical-align: middle;
      display: inline-block;
      color: #bbb;
    }

    .left-btn,
    .right-btn {
      cursor: pointer;
      font-size: 30px;
      margin: 0 15px;

      &.more {
        color: #363636;
      }
    }
  }

  .article-wrapper {
    padding: 0.3rem 20px 70px;

    h3.title {
      font-size: 20px;
      margin: 0.1rem 0 0;
      font-weight: bold;
    }

    .date {
      font-size: 10px;
      color: #333;
      margin-bottom: 0.2rem;
    }
  }
}

</style>
