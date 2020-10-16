const {model} = require('mongoose');

module.exports = model('appUser', {
  // 账号
  username: {
    type: String,
    required: true
  },
  // 密码
  password: {
    type: String,
    default: '123456',
  },
  // // 姓名
  // nickname: {
  //   type: String,
  //   required: true,
  // },
  // // 手机号
  // phonenumber: {
  //   type: String,
  //   required: true,
  // }
});