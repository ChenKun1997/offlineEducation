const {model} = require('mongoose');

module.exports = model('course', {
  id:{
    type:Number,
    required:true
  },
  // 账号
  title: {
    type: String,
    required: true
  },
  address:{
    type:String,
    required:false
  },
  num:{
    type:Number,
    required:false
  },
  date:{
    type:String,
    required:false
  },
  time:{
    type:String,
    required:false
  },
  fee:{
    type:String,
    required:false
  }
});