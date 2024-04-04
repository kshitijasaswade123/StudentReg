const student = require('../Model/StudentModel');

exports.getdata = async (req,res)=>{
    try {
       const data = await student.find() 
       return res.json({
        errors:false,
        data:data
     })

    } catch (error) {
        return res.status(400).json({
            errors:true,
            message:error.message
            
        });
    }
}
exports.postdata = async(req,res)=>{
    try {
        const data = await student.create(req.body)
        return res.json({
            errors:false,
            data:data
        })
    } catch (error) {
        return  res.status(400).json({
            errors:true,
            message:error.message
        })
    }
}

exports.putdata = async(req,res)=>{
    try {
        const data = await student.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({
            errors:false,
            data:data
        })
    } catch (error) {
        return  res.status(400).json({
            errors:true,
            message:error.message
        })
    }
}

exports.deletdata = async(req,res)=>{
    try {
        const data = await student.findByIdAndDelete(req.params.id)
        return res.json({
            errors:false,
            data:data
        })
    } catch (error) {
        return  res.status(400).json({
            errors:true,
            message:error.message
        })
    }
}