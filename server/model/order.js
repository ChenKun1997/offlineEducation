const {model} = require('mongoose');

module.exports = model('order', {
  id:{
    type:String,
    required:true
  },
  user: {
    type: String,
    required: true
  },
  
  // 商品状态
  // 1：待支付
  // 2：学习中
  // 3：已结束
  // 4：退款/售后
  state:{
      type:Number,
      required:true
  },
  detail:{
      type:Object,
      required:true
  }
//   {
//     "user" : "18379678695",
//     "id" : "9012450",
//     "count" : "1",
//     "select" : false,
//     "state" : 2,
//     "detail" : {
//         "_id" : ObjectId("5f6fec0badbd09d6e00378a2"),
//         "Instro" : "韩式系列/初心不负· 韩式花束系列花艺师全新打造，卡罗拉玫瑰11枝、白底粉边洋桔梗5枝、大叶尤加利10枝",
//         "ItemCode" : "9012450",
//         "LinePrice" : "357",
//         "Price" : "228",
//         "Sales" : "30845",
//         "img" : "https://img01.hua.com/uploadpic/newpic/9012450.jpg_220x240.jpg",
//         "title" : "全新韩式系列"
//     },
//   }

});