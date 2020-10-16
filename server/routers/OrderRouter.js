const {Router} = require('express');
const Order = require('../model/order');
const Course = require('../model/course');
const router = new Router();
const url = require('url')

// 添加订单
router.get('/addOrder',async (req,res)=>{
    //获取url中的参数
    let {id,user,state} = req.query;
    const result = await Order.find({id,user,state:0});
    if(result.length > 0){
        if(result.state === 0){
            res.json({code:-1,message:'您已购买过该课程！'});
        }
        return;
    }else{
        let result2 = await Course.find({id});
        await new Order({...req.query,detail:result2}).save();
        res.json({code:0,message:'订单添加成功'});
    }
})

// // 删除订单
// router.get('/deleteOrder',async (req,res)=>{
    
    
// })

// 修改订单状态
router.get('/updateOrderState',async (req,res)=>{
    let {_id,state} = req.query;
    try {
        const result = await Order.updateOne({_id},{state});
        if(result){
            res.json({code:0,message:'成功修改订单状态'});
        }
    } catch (error) {
        res.json({code:-1,message:'修改失败'});
    }
    
})

// 获取订单
router.get('/getOrder',async (req,res)=>{
    let {user,state} = req.query;
    const result = await Order.find({user,state});
    if(result.length > 0){
        res.json({code:0,message:'ok',data:result});
    }else{
        res.json({code:-1,message:'暂无相关订单'})
    }
})
module.exports = router;