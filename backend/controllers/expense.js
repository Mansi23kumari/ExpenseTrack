const expenseschema=require("../models/expensemodel")

exports.addExpense=async(req,res)=>{
    const {title,amount,category,description,date}=req.body

    const income=expenseschema({
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
        res.status(200).json({message: 'expense added'});
    }catch(err){
        res.status(500).json({message: 'server error'});
    }
    console.log(income);
}

exports.getExpense=async(req,res)=>{
    try{
        const expenses=await expenseschema.find();
        res.status(200).json(expenses)
    }catch(err){
        res.status(200).json({message: 'server error'})
    }
}

exports.deleteExpense=async(req,res)=>{
    const {id}=req.params;
    expenseschema.findByIdAndDelete(id)
   .then((income)=>{
        res.status(200).json({message:'expense deleted'})
   })
    .catch((err)=>{
        res.status(500).json({message: 'server error'})
    })
}