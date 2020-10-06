<template>
  <div class="frontPage" :class="{ animtionG: IsLoading }">
    <div class="loadingBar">
      <div class="TextLoad">Loading</div>
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        IsLoading: false,
      }
    },
    created() {
      // console.log(this.$store.state.IsLoading)
      setTimeout(() => {
        this.IsLoading = this.$store.state.IsLoading
      }, 3000)
    },
  }
</script>
<style lang="stylus" scoped>
  .frontPage
    position: absolute
    top: 0
    left: 0
    z-index: 10
    background: url('https://tva4.sinaimg.cn/large/0072Vf1pgy1foxk3qdi4cj31kw0w0kh2.jpg') no-repeat
    background-position: center !important
    width: 100%
    height: 100%
    // animation: fadeout 1.5s ease forwards
    .loadingBar
      position: absolute
      top: 45%
      left: 50%
      background-color: rgba(0, 0, 0, 0.5)
      border-radius: 50%
      transform: translate(-50%, -50%)
      width: 400px
      height: 400px
      .TextLoad
        color: whitesmoke
        line-height: 400px
        text-align: center
        font-size: 50px
        font-weight: 600
      .loadingIcon
        position: absolute
        top: 260px
        left: 50%
        transform: translateX(-50%)
        border: 1px solid red
      @keyframes fadeout
        0%
          transform: translateY(0)
        100%
          transform: translateY(-100%)
</style>

<style scoped>
  .animtionG {
    animation: fadeout 1.5s ease forwards;
  }
  .spinner {
    position: absolute;
    top: 260px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 60px;
    text-align: center;
    font-size: 10px;
  }

  .spinner > div {
    /* background-color: #67cf22; */
    background-color: pink;
    height: 100%;
    width: 6px;
    display: inline-block;
    margin: 0 2px;
    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out;
  }

  .spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .spinner .rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  .spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes stretchdelay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(0.4);
    }
    20% {
      -webkit-transform: scaleY(1);
    }
  }

  @keyframes stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
      -webkit-transform: scaleY(1);
    }
  }
  @keyframes fadeout {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
</style>