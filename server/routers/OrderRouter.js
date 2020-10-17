const {Router} = require('express');
const Order = require('../model/order');
const Course = require('../model/course');
const router = new Router();
const url = require('url')

// 添加订单
router.get('/addOrder',async (req,res)=>{
    //获取url中的参数
    const {id,user,state} = req.query;
    const result = await Order.find({id,user,state:1},);
    const result2 = await Order.find({id,user,state:2},);
    // console.log(result);
    // console.log(result2);
    if(result.length > 0 || result2.length > 0){
        res.json({code:-1,message:'您已购买过该课程！'});
        return;
    }else{
        let result2 = await Course.findOne({id});
        await new Order({...req.query,detail:result2}).save();
        res.json({code:0,message:'订单添加成功'});
    }
})

// // 删除订单
router.get('/deleteOrder',async (req,res)=>{
    const {_id} = req.query;
    try{
        const result = await Order.deleteOne({_id});
        if(result.deletedCount === 1){
            res.json({code:0,message:'取消成功'})
        }else{
            res.json({code:-1,message:'取消失败'});
        }
    }catch{
        res.json({code:-1,message:'取消失败'});
    }
})

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