<template>
<div>
  <div id="shouye" class="page">
    <header class="header">
      <div class="left">  
        <span class="iconfont icondizhi address"></span>
        <span class="campus">海淀校区</span>
        <span class="iconfont iconjiantou-up-down arrow"></span>
      </div>
      <div class="right">
        <span class="iconfont iconsousuo search"></span>
        <input type="text" placeholder="搜索课程">
      </div>
    </header>
    <!-- 滚动组件 -->
    <scroll class="scroll">
      <!-- 首页轮播图 -->
      <div class="swiper-container" ref="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/banner1.png" alt="banner"></div>
            <div class="swiper-slide"><img src="../assets/banner2.png" alt="banner"></div>
            <div class="swiper-slide"><img src="../assets/banner3.png" alt="banner"></div>
            <div class="swiper-slide"><img src="../assets/banner4.png" alt="banner"></div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
      </div>
      <!-- 选课中心 -->
      <div class="select">
        <div class="item" @click="toChooseClassAction">
          <span class="iconfont iconcaidan"></span>
          <p>选课中心</p>
        </div>
        <div class="item">
          <span class="iconfont icondiannao"></span>
          <p>公开课</p>
        </div>
        <div class="item">
          <span class="iconfont iconliwu"></span>
          <p>热门活动</p>
        </div>
        <div class="item">
          <span class="iconfont icondizhi"></span>
          <p>全部校区</p>
        </div>
      </div>
      <!-- 名师推荐 -->
      <div class="teacher">
        <div class="top">
          <div class="title">名师推荐</div>
          <div class="right">
            <span>更多</span>
            <span class="iconfont iconxiangyou"></span>
          </div>
        </div>
        <scroll :scrollX="true" :scrollY="false" :width="wrapWidth">
          <div class="content" ref="wrap">
            <div class="item">
              <img src="../assets/teacher1.png" alt="">
              <p>张奇</p>
              <h6>小学数学老师</h6>
            </div>
            <div class="item">
              <img src="../assets/teacher2.png" alt="">
              <p>王丹</p>
              <h6>小学语文老师</h6>
            </div>
            <div class="item">
              <img src="../assets/teacher3.png" alt="">
              <p>李烁</p>
              <h6>初中语文老师</h6>
            </div>
            <div class="item">
              <img src="../assets/teacher2.png" alt="">
              <p>赵丽云</p>
              <h6>小学数学老师</h6>
            </div>
            <div class="item">
              <img src="../assets/teacher3.png" alt="">
              <p>刘丽</p>
              <h6>初中物理老师</h6>
            </div>
            <div class="item">
              <img src="../assets/teacher4.png" alt="">
              <p>Tom</p>
              <h6>初中英语老师</h6>
            </div>
            <div class="item">
              <img src="../assets/teacher5.png" alt="">
              <p>赵芸</p>
              <h6>初中物理老师</h6>
            </div>
            
          </div>
        </scroll>
        
      </div>
      <!-- 推荐课程 -->
      <div class="course">
        <div class="top">
          <div class="title">推荐课程</div>
          <div class="right">
            <span>更多</span>
            <span class="iconfont iconxiangyou"></span>
          </div>
        </div>
        <div class="content">
          <div class="item">
            <p class="title">二年级数学志高秋季班(下)</p>
            <p><span class="iconfont icondizhi"></span>丰台角门少儿学习中心220</p>
            <p><span class="iconfont iconrili"></span>2019/9/30 至 2019/12/26</p>
            <p><span class="iconfont icontubiao2tixingnaozhong-copy"></span>周一,周四17:00-18:30</p>
            <p class="cost">￥2340/10课时</p>
          </div>
          <div class="item">
            <p class="title">二年级数学志高秋季班(下)</p>
            <p><span class="iconfont icondizhi"></span>丰台角门少儿学习中心220</p>
            <p><span class="iconfont iconrili"></span>2019/9/30 至 2019/12/26</p>
            <p><span class="iconfont icontubiao2tixingnaozhong-copy"></span>周一,周四17:00-18:30</p>
            <p class="cost">￥2340/10课时</p>
          </div>
          <div class="item">
            <p class="title">二年级数学志高秋季班(下)</p>
            <p><span class="iconfont icondizhi"></span>丰台角门少儿学习中心220</p>
            <p><span class="iconfont iconrili"></span>2019/9/30 至 2019/12/26</p>
            <p><span class="iconfont icontubiao2tixingnaozhong-copy"></span>周一,周四17:00-18:30</p>
            <p class="cost">￥2340/10课时</p>
          </div>
          <div class="item">
            <p class="title">二年级数学志高秋季班(下)</p>
            <p><span class="iconfont icondizhi"></span>丰台角门少儿学习中心220</p>
            <p><span class="iconfont iconrili"></span>2019/9/30 至 2019/12/26</p>
            <p><span class="iconfont icontubiao2tixingnaozhong-copy"></span>周一,周四17:00-18:30</p>
            <p class="cost">￥2340/10课时</p>
          </div>
        </div>
      </div>
      <!-- 公开课 -->
      <div class="public_class">
        <div class="top">
          <div class="title">公开课</div>
          <div class="right">
            <span>更多</span>
            <span class="iconfont iconxiangyou"></span>
          </div>
        </div>
        <div class="content">
          <div class="item">
            <img src="../assets/class1.png" alt="">
            <p>小学英语体验课</p>
            <p class="num"><span>已报20人</span><i>免费</i></p>
          </div>
          <div class="item">
            <img src="../assets/class2.png" alt="">
            <p>小学语文体验课</p>
            <p class="num"><span>已报20人</span><i>免费</i></p>
          </div>
        </div>
      </div>
      <!-- 资讯 -->
      <div class="information">
        <div class="top">
          <div class="title">资讯</div>
          <div class="right">
            <span>更多</span>
            <span class="iconfont iconxiangyou"></span>
          </div>
        </div>
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
        </div>
      </div>
    </scroll>
  </div>
  <router-view/>
</div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.css";
export default {
  data(){
    return {
      wrapWidth:0,
    }
  },
  methods:{
    toChooseClassAction(){
      this.$router.push('/shouye/choose-class-center');
    }
  },
  mounted(){
    // 创建轮播图
    const swiper = new Swiper(this.$refs.swiper, {
          pagination: {
            el: ".swiper-pagination",
          },
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
        });
    this.wrapWidth = this.$refs.wrap.offsetWidth;
  }
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  .left{
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .address{
      font-size: 20px;
    }
    .campus{
      font-size: 14px;
    }
    .arrow{
      font-size: 15px;
    }
  }
  .right{
    width: 260px;
    height: 36px;
    border: 1Px solid #eee;
    border-radius: 20px;
    box-sizing: border-box;
    padding-left: 50px;
    display: flex;
    justify-items: center;
    align-items: center;
    .search{
      font-size: 20px;
      color: #aaa;
    }
    input{
      width: 200px;
      height: 28px;
      border: none;
      outline: none;
      margin-top: 5px;
      &::placeholder{
        font-size: 13px;
        text-align: center;
      }
    }
  }
}
.swiper-container{
  width: 100%;
  height: 186px;
  background-color: #fff;
  .swiper-wrapper{
    width: 100%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
.select{
  width: 100%;
  height: 137px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
  .item{
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .iconfont{
      font-size: 35px;
    }
    p{
      font-size: 14px;
    }
  }
}
.teacher{
  width: 100%;
  height: 220px;
  background-color: #fff;
  .top{
    width: 100%;
    height: 50px;
    border-bottom: 1Px solid #999;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title{
      font-size: 16px;
      font-weight: bold;
    }
    .right{
      span{
        color: #999;
      }
      .iconfont{
        font-size: 15px;
        font-weight: bolder;
        color: #888;
      }
    }
  }
  .content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    width: max-content;
    height: 170px;
    .item{
      width: 140px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img{
        width: 87px;
        height: 89px;
      }
      p{
        font-size: 14px;
        font-weight: bold;
        margin: 4px 0 8px ;
      }
      h6{
        font-size: 14px;
      }
    }
  }
}
.course{
  width: 100%;
  height: 363px;
  background-color: #fff;
  margin-top: 10px;
  .top{
    width: 100%;
    height: 50px;
    border-bottom: 1Px solid #999;
    box-sizing: border-box;
    padding:0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title{
      font-size: 16px;
      font-weight: bold;
    }
    .right{
      span{
        color: #999;
      }
      .iconfont{
        font-size: 15px;
        font-weight: bolder;
        color: #888;
      }
    }
  }
  .content{
    width: 100%;
    height: 313px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    .item{
      width: 187px;
      height: 153px;
      box-sizing: border-box;
      border-right: 1Px solid #aaa;
      border-bottom: 1Px solid #aaa;
      padding: 5px 0;
      .title{
        font-size: 15px;
        color: #333;
        line-height: 20px;
      }
      p{
        font-size: 14px;
        line-height: 28px;
        color: #999;
      }
      .cost{
        color: rgb(240, 0, 0);
      }
    }
  }
}
.public_class{
  width: 100%;
  height: 240px;
  background-color: #fff;
  margin-top: 10px;
  .top{
    width: 100%;
    height: 50px;
    border-bottom: 1Px solid #999;
    box-sizing: border-box;
    padding:0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title{
      font-size: 16px;
      font-weight: bold;
    }
    .right{
      span{
        color: #999;
      }
      .iconfont{
        font-size: 15px;
        font-weight: bolder;
        color: #888;
      }
    }
  }
  .content{
    width: 100%;
    height: 190;
    display: flex;
    justify-content: space-between;
    align-content: center;
    .item{
      flex: 1;
      height: 190px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-content: center;
      text-align: center;
      box-sizing: border-box;
      padding: 25px 30px 20px 15px;
      img{
        width: 139px;
        height: 89px;
      }
      p{
        font-size: 14px;
        line-height: 28px;
        color: #333;
      }
      .num{
        font-size: 14px;
        span{ 
          color: #999;
          margin: 0 10px;
        }
        i{
          color: red;
          margin: 0 10px;
        }
      }
    }
  }
}
.information{
  width: 100%;
  height: max-content;
  background-color: #fff;
  margin-top: 10px;
  .top{
    width: 100%;
    height: 50px;
    border-bottom: 1Px solid #999;
    box-sizing: border-box;
    padding:0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title{
      font-size: 16px;
      font-weight: bold;
    }
    .right{
      span{
        color: #999;
      }
      .iconfont{
        font-size: 15px;
        font-weight: bolder;
        color: #888;
      }
    }
  }
  .content{
    width: 100%;
    height: max-content;
    .item{
      width: 100%;
      height: 124px;
      box-sizing: border-box;
      border-bottom: 1Px solid #999;
      padding: 20px 10px 14px;
      overflow: hidden;
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
}
</style>
<style>
.swiper-pagination.swiper-pagination-bullets .swiper-pagination-bullet{
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background-color: #eee;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active{
  background: #fff;
  border-radius: 2px;
}
</style>