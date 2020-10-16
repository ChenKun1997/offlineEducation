<template>
  <div id="message" class="page">
    <header class="header">
      <h2>消息</h2>
    </header>
    <!-- 滚动组件 -->
    <scroll class="scroll">
      <div class="content">
        <div class="item">
          <p class="title">课程消息</p>
          <p class="detail">
            亲爱的小小，您已成功的购买了【二年级数学志高秋季班(下)】，主课老师会联系您，请按时上课哦~
          </p>
          <p class="date">2019-10-16</p>
        </div>
        <div class="item">
          <p class="title">课程消息</p>
          <p class="detail">
            亲爱的小小，您已成功的购买了【二年级数学志高秋季班(下)】，主课老师会联系您，请按时上课哦~
          </p>
          <p class="date">2019-10-16</p>
        </div>
        <div class="item">
          <p class="title">课程消息</p>
          <p class="detail">
            亲爱的小小，您已成功的购买了【二年级数学志高秋季班(下)】，主课老师会联系您，请按时上课哦~
          </p>
          <p class="date">2019-10-16</p>
        </div>
        <div class="item">
          <p class="title">活动消息</p>
          <p class="detail">
            亲爱的小小，您已成功的购买了【二年级数学志高秋季班(下)】，主课老师会联系您，请按时上课哦~
          </p>
          <p class="date">2019-10-16</p>
        </div>
        <div class="item">
          <p class="title">课程消息</p>
          <p class="detail">
            亲爱的小小，您已成功的购买了【二年级数学志高秋季班(下)】，主课老师会联系您，请按时上课哦~
          </p>
          <p class="date">2019-10-16</p>
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
      .title{
        font-size: 14px;
        color: #333;
        line-height: 20px;
      }
      .detail{
        display: block;
        width: 344px;
        height: 56px;
        font-family:'微软雅黑';
        font-weight:400;
        line-height: 28px;
        font-size: 13px;
        color: #999;
        box-sizing: border-box;
        padding-left: 10px;
      }
      .date{
        font-size: 13px;
        color: #999;
        text-align: right;
      }
    }
    
  }
</style>