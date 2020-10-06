<template>
  <div class="bodyWel">
    <div class="tabBar">
      <div class="changeBg" @click="changeBg">
        <i class="el-icon-picture-outline-round changeBglogo"></i>
        <span>切换图片</span>
      </div>
      <a :href="BgUrl" target="_blank" class="getBg">
        <i class="el-icon-paperclip changeBglogo" @click="changeBg"></i>
        <span>获取当前背景地址</span>
      </a>
    </div>
    <div class="searchBar">
      <form
        class="engineGet"
        action="https://cn.bing.com/search"
        target="_self"
        method="get"
      >
        <input
          type="text"
          id="search-input"
          name="q"
          autocomplete="off"
          placeholder="请输入要搜索的内容："
          @focus="inputFocus()"
        />
        <input
          type="submit"
          id="search-button"
          value="search"
          class="searchz"
        />
        <i class="el-icon-search searchIco"></i>
        <div
          class="EngineBtn"
          v-if="EngineShow"
          :class="{
            engineBtnMoveAnim: EngineIsShow,
            engineBtnOutAnim: !EngineIsShow,
          }"
        >
          <span
            class="baiduBtn iconfont"
            :class="{ active: isActive == 'baidu' }"
            @click="changeEngine('baidu')"
            >&#xe7a1;</span
          >
          <span
            class="bingBtn iconfont"
            :class="{ active: isActive == 'bing' }"
            @click="changeEngine('bing')"
            >&#xe66e;</span
          >
          <span
            class="googleBtn iconfont"
            :class="{ active: isActive == 'google' }"
            @click="changeEngine('google')"
            >&#xe631;</span
          >
        </div>
      </form>
    </div>
    <div class="time">
      <div class="timeClock">
        <span>{{ hour }}</span>
        <span>:</span>
        <span>{{ minute }}</span>
      </div>
      <div class="dateInfo">{{ dateInfo }}</div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import axios from 'axios'
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  import 'font-awesome/css/font-awesome.min.css'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        imgUrl: '',
        BgUrl: 'http://www.baidu.com',
        hour: '00',
        minute: '00',
        dateInfo: '',
        isActive: 'bing',
        EngineIsShow: false,
        EngineShow: false,
      }
    },
    props: {
      msg: String,
    },
    mounted() {
      let _this = this
      document.addEventListener('click', function (e) {
        // 下面这句代码是获取 点击的区域是否包含你的菜单，如果包含，说明点击的是菜单以外，不包含则为菜单以内
        let flag = e.target.contains(document.querySelector('.searchBar'))
        if (!flag) {
          return
        }
        _this.inputBlur()
        _this.menuShow = false
      })
    },
    created() {
      this.changeBg()
      this.getNowTime()
      this.BgUrl = ''
      // http://www.neolep.cn:3001/api/users/getpic
    },
    methods: {
      changeBg() {
        axios
          // .get('/api/api.php?return=json', {
          .get('http://www.neolep.cn:3001/api/users/getpic', {
            params: {},
          })
          .then((res) => {
            // console.log(res)
            // console.log(res.data.imgurl)
            let bgUrl = res.data.imgurl
            $('body').css('background', 'url(' + bgUrl + ') no-repeat')
            this.BgUrl = bgUrl
            this.$store.commit('$_changeIsLoading', true)
            console.log(this.$store.state.IsLoading)
          })
          .catch((err) => {
            console.log(err)
          })
      },
      changeEngine(webset) {
        console.log(webset)
        let engineGet = document.querySelector('.engineGet')
        let searchInput = document.querySelector('#search-input')
        console.log(engineGet.action)
        if (webset === 'baidu') {
          engineGet.action = 'http://www.baidu.com/baidu'
          searchInput.name = 'word'
          this.isActive = 'baidu'
        } else if (webset === 'google') {
          engineGet.action = 'https://www.google.com/search'
          searchInput.name = 'q'
          this.isActive = 'google'
        } else if (webset === 'bing') {
          engineGet.action = 'https://cn.bing.com/search'
          searchInput.name = 'q'
          this.isActive = 'bing'
        }
      },
      getNowTime() {
        var myDate = new Date()
        this.dateInfo = myDate.toLocaleDateString()
        setInterval(() => {
          var myDate = new Date()
          var mytime = myDate.toLocaleString()
          if (myDate.getHours() < 10) {
            this.hour = '0' + myDate.getHours()
          } else {
            this.hour = myDate.getHours()
          }

          if (myDate.getMinutes() < 10) {
            this.minute = '0' + myDate.getMinutes()
          } else {
            this.minute = myDate.getMinutes()
          }
        }, 1000)
      },
      inputFocus() {
        this.EngineIsShow = true
        this.EngineShow = true
      },
      inputBlur() {
        this.EngineIsShow = false
      },
    },
  }
</script>
<style scoped>
  @font-face {
    font-family: 'iconfont';
    src: url('../assets/font/iconfont.eot');
    src: url('../assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
      url('../assets/font/iconfont.woff2') format('woff2'),
      url('../assets/font/iconfont.woff') format('woff'),
      url('../assets/font/iconfont.ttf') format('truetype'),
      url('../assets/font/iconfont.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family: 'iconfont' !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .searchz {
    position: relative;
    z-index: 10;
    border: 1px solid red;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .bodyWel
    width: 100%
    height: 900px
  .searchBar
    position: absolute
    top: 60%
    left: 70%
    width: 465px
    overflow: hidden
    text-align: center
    input[type='text']
      z-index: 10
      border: none
      outline: none
      padding: 10px 15px
      width: 400px
      // &:focus
      // background-color: pink
      &:afrer
        content: '123'
    input[type='submit']
      border: none
      outline: none
      background-color: transparent
      height: 35px
      width: 35px
      color: transparent
      cursor: pointer
    .searchIco
      font-size: 25px
      line-height: 35px
      position: absolute
      top: 0px
      right: 0px
      color: white
      z-index: 9
      width: 35px
      height: 35px
      background-color: pink
    .EngineBtn
      position: relative
      z-index: -10
      top: -38px
      display: inline-block
      vertical-align: middle
      // border: 1px solid red
      margin: 5px auto
      span
        box-sizing: border-box
        cursor: pointer
        display: inline-block
        height: 30px
        padding: 0 20px
        line-height: 30px
        text-align: center
        border-radius: 30px
        background-color: rgba(0, 0, 0, 0.5)
        color: whitesmoke
        transition: all 0.3s ease-in
        &:nth-child(2)
          margin: 0 15px
          font-size: 18px
          padding: -1px 18px
        &:hover
          background-color: pink
  .changeBg, .getBg
    overflow: hidden
    // width: 88px
    // border: 1px solid green
    cursor: pointer
    position: absolute
    top: 25px
    right: 22px
    font-size: 25px
    height: 25px
    font-weight: 300
    transition: all 0.3s ease-in
    .changeBglogo
      float: left
    span
      float: left
      margin-left: 3px
      width: 0px
      overflow: hidden
      font-weight: 400
      // border: 1px solid red
      font-size: 14px
      line-height: 27px
      height: 25px
      transition: all 0.3s ease-in
      color: #008080
    &:hover
      color: pink
      span
        width: 60px
  .getBg
    top: 55px
    &:hover
      span
        width: 113px
  .time
    cursor: pointer
    overflow: hidden
    position: absolute
    top: 55%
    left: 85%
    padding: 10px
    border-radius: 5px
    transform: translateY(-50%)
    background-color: rgba(0, 0, 0, 0.5)
    .timeClock
      float: left
      // border: 1px solid red
      font-size: 30px
      color: whitesmoke
    .dateInfo
      display: inline-block
      float: left
      height: 40px
      // border: 1px solid red
      line-height: 60px
      font-size: 15px
      text-align: right
      padding-left: 10px
      color: whitesmoke
  .active
    background-color: rgba(245, 195, 203, 0.7) !important
  .engineBtnMoveAnim
    animation: engineBtnMove 0.3s forwards ease-in
  .engineBtnOutAnim
    animation: engineBtnOut 0.3s forwards ease-in
    z-index: -10
  @keyframes engineBtnMove
    0%
      top: -38px
    100%
      top: 0
      z-index: 0
  @keyframes engineBtnOut
    0%
      top: 0
    100%
      top: -38px
</style>