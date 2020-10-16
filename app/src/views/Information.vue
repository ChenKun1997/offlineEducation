<template>
  <div id="information" class="page">
    <header class="header">
      <h2>资讯</h2>
    </header>
    <!-- 滚动组件 -->
    <scroll class="scroll">
      <div class="content">
          <div class="item">
            <div class="left">
              <img src="../assets/information1.png" alt="">
            </div>
            <div class="right">
              <p>义务教育改革 提了哪些新要求</p>
              <p class="time"><span>11分钟前</span><i class="iconfont iconyanjing">1000</i></p>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <img src="../assets/information2.png" alt="">
            </div>
            <div class="right">
              <p>孩子写作业磨蹭，家长应该如何应对?</p>
              <p class="time"><span>11分钟前</span><i class="iconfont iconyanjing">1000</i></p>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <img src="../assets/information3.png" alt="">
            </div>
            <div class="right">
              <p>儿童成长中悲剧频频发生 监护人需负重要责任</p>
              <p class="time"><span>11分钟前</span><i class="iconfont iconyanjing">1000</i></p>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <img src="../assets/information4.png" alt="">
            </div>
            <div class="right">
              <p>解决二孩入园难应强化政府“兜底”</p>
              <p class="time"><span>11分钟前</span><i class="iconfont iconyanjing">1000</i></p>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <img src="../assets/information1.png" alt="">
            </div>
            <div class="right">
              <p>儿童成长中悲剧频频发生 监护人需负重要责任</p>
              <p class="time"><span>11分钟前</span><i class="iconfont iconyanjing">1000</i></p>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <img src="../assets/information2.png" alt="">
            </div>
            <div class="right">
              <p>义务教育改革 提了哪些新要求</p>
              <p class="time"><span>11分钟前</span><i class="iconfont iconyanjing">1000</i></p>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <img src="../assets/information3.png" alt="">
            </div>
            <div class="right">
              <p>孩子写作业磨蹭，家长应该如何应对?</p>
              <p class="time"><span>11分钟前</span><i class="iconfont iconyanjing">1000</i></p>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <img src="../assets/information4.png" alt="">
            </div>
            <div class="right">
              <p>儿童成长中悲剧频频发生 监护人需负重要责任</p>
              <p class="time"><span>11分钟前</span><i class="iconfont iconyanjing">1000</i></p>
            </div>
          </div>
        </div>
    </scroll>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.scroll{
  width: 100%;
  height: 100%;
}
.header{
  width: 100%;
  height: 40px;
  background-color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-indent: 20px;
  line-height: 40px;
}
.content{
    width: 100%;
    height: max-content;
    
    .item{
      width: 100%;
      height: 124px;
      box-sizing: border-box;
      border-bottom: 1Px solid #999;
      border-top: 1Px solid #999;
      padding: 20px 10px 14px;
      overflow: hidden;
      margin-bottom: 10px;
      background-color: #fff;
      .left{
        width: 120px;
        height: 90px;
        float: left;
        img{
          width: 120px;
          height: 90px;
        }
      }
      .right{
        width: 235px;
        height: 90px;
        float: left;
        box-sizing: border-box;
        padding: 10px 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p{
          font-size: 13px;
          color: #333;
        }
        .time{
          font-size: 12px;
          color: #999;
          .iconfont{
            margin-left: 50px;
            font-size: 12px;
          }
        }
      }
    }
    
  }
</style>