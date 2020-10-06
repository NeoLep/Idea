<template>
  <div id="app">
    <front-page />
    <hello-index />
  </div>
</template>

<script>
  import $ from 'jquery'
  import HelloIndex from './components/HelloIndex'
  import FrontPage from './components/FrontPage'
  export default {
    name: 'App',
    components: {
      HelloIndex,
      FrontPage,
    },
    created() {},
  }
</script>

<style>
  body,
  html {
    overflow: hidden;
    height: 100%;
    /* background: url('https://tva4.sinaimg.cn/large/87c01ec7gy1frx49krj9dj21hc0u016f.jpg') */
    background: url('https://tva4.sinaimg.cn/large/0072Vf1pgy1foxk3qdi4cj31kw0w0kh2.jpg')
      no-repeat;
    background-position: center !important;
  }
  * {
    padding: 0;
    margin: 0;
  }
  a {
    color: black;
  }
</style>
