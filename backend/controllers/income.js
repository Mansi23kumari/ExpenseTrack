const incomeschema=require("../models/incomemodel")

exports.addIncome=async(req,res)=>{
    const {title,amount,category,description,date}=req.body

    const income=incomeschema({
        title,
        amount,
        category,
        description,
        date
    })

    try{
        if(!title || !category || !description || !date  ){
            return res.status(400).json({message: 'All fields are required!'});
        }
        if(amount<=0 || !amount==='number'){
            return res.status(400).json({message: 'Amount must be positive number'});
        }
        await income.save()
        res.status(200).json({message: 'income added'});
    }catch(err){
        res.status(500).json({message: 'server error'});
    }
    console.log(income);
}

exports.getIncome=async(req,res)=>{
    try{
        const incomes=await incomeschema.find();
        res.status(200).json(incomes)
    }catch(err){
        res.status(200).json({message: 'server error'})
    }
}

exports.deleteIncome=async(req,res)=>{
    const {id}=req.params;
    incomeschema.findByIdAndDelete(id)
   .then((income)=>{
        res.status(200).json({message:'income deleted'})
   })
    .catch((err)=>{
        res.status(500).json({message: 'server error'})
    })
}