const {Router} = require('express');
const Course = require('../model/course');
const router = new Router();

// 添加课程
router.get('/addCourse',async (req,res)=>{
    //获取url中的参数
    await new Course(req.query).save();
    res.json({code:0,message:'课程添加成功'})
})

// 删除课程
router.get('/deleteCourse',async (req,res)=>{
    //获取url中的参数
    const {_id} = req.query; 
    try{
        const result = await Course.deleteOne({_id});
        // console.log(result);
        if(result.deletedCount === 1){
            res.json({code:0,message:'删除成功'})
        }else{
            res.json({code:-1,message:'删除失败'})
        }
    }
    catch{
        res.json({code:-1,message:'删除失败'})
    }
    
    
})

// 修改课程
router.get('/updateCourse',(req,res)=>{
    
})

// 获取课程result
router.get('/getCourse',async (req,res)=>{
    const result = await Course.find();
    res.json({code:0,message:'ok',data:result});
})
module.exports = router;