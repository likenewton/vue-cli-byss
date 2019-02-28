let [NEWS, ACTIVITIES, WALKTHROUGH] = [{}, {}, {}]

const news = require.context('../tpl/NEWS', true, /\d+\.(tpl)$/)
const activities = require.context('../tpl/ACTIVITIES', true, /\d+\.(tpl)$/)
const walkthrough = require.context('../tpl/WALKTHROUGH', true, /\d+\.(tpl)$/)

// 将tpl文件打包进js中
news.keys().forEach((filename) => {
  let key = filename.replace('./', '_').replace('.tpl', '')
  NEWS[key] = news(filename)
})
activities.keys().forEach((filename) => {
  let key = filename.replace('./', '_').replace('.tpl', '')
  ACTIVITIES[key] = activities(filename)
})
walkthrough.keys().forEach((filename) => {
  let key = filename.replace('./', '_').replace('.tpl', '')
  WALKTHROUGH[key] = walkthrough(filename)
})

module.exports = {
  _53CodeSrc: 'https://tb.53kf.com/code/code/10144804/1',
  // 游戏的下载地址['安卓', '苹果'],
  downloadLinks: {
    'byss': ['http://www.3agame.net/download/?iosid=1443705606&type=wc&gid=54&mid=10072', 'http://www.3agame.net/download/?iosid=1443705606&type=wc&gid=54&mid=10072']
  },
  articleList: {
    NEWS,
    ACTIVITIES,
    WALKTHROUGH
  },
  titleList: {
    NEWS: [{
      ID: '_9',
      type: 'NEWS',
      text: '《捕鱼圣手》2月28日版本更新',
      date: '2019-02-28'
    }, {
      ID: '_8',
      type: 'NEWS',
      text: '新春狂欢，鱼你有约',
      date: '2019-01-24'
    }, {
      ID: '_7',
      type: 'NEWS',
      text: '如何兑红包，我知道，你需要',
      date: '2019-01-23'
    }, {
      ID: '_5',
      type: 'NEWS',
      text: '新年新气象，捕鱼来更新啦！',
      date: '2019-01-07'
    }, {
      ID: '_4',
      type: 'NEWS',
      text: '拒绝山寨 认准官方正版',
      date: '2019-01-05'
    }, {
      ID: '_1',
      type: 'NEWS',
      text: '关于利用BUG刷道具相关公告',
      date: '2018-12-24'
    }, {
      ID: '_2',
      type: 'NEWS',
      text: '捕鱼圣手官方公告',
      date: '2018-12-24'
    }, {
      ID: '_3',
      type: 'NEWS',
      text: '12月12日游戏内容优化公告',
      date: '2018-12-12'
    }, {
      ID: '_6',
      type: 'NEWS',
      text: '关于我们',
      date: '2018-07-10'
    }],
    ACTIVITIES: [{
      ID: '_1',
      type: 'ACTIVITIES',
      text: '双蛋节捕鱼活动大狂欢，更有双倍话费等你来赢！',
      date: '2018-12-24'
    }],
    WALKTHROUGH: [{
      ID: '_1',
      type: 'WALKTHROUGH',
      text: '新手抓鱼小技巧',
      date: '2018-09-24'
    }, {
      ID: '_2',
      type: 'WALKTHROUGH',
      text: '中级船长的升级之路',
      date: '2018-09-18'
    }, {
      ID: '_3',
      type: 'WALKTHROUGH',
      text: '进阶版本-海底世界的霸主',
      date: '2018-09-03'
    }, {
      ID: '_4',
      type: 'WALKTHROUGH',
      text: '新手船长扬帆起航之道具介绍',
      date: '2018-08-08'
    }]
  }
}
