import  UserData from "../Model/userSchema.js"

export  const getdata =async(req, res)=> {
    try {
        const getdata = await UserData.find()
        res.json(getdata)
    } catch (error) {
        res.status(402).json(error.errors)
    }
}

export const  createData = async (req, res)=>{
   try {
    const {name, email, password, repeatePassword} = req.body
    const saveData = new UserData({
       name,
       email, 
       password,
       repeatePassword
    });
    await saveData.save();
    res.status(201).json({message: "Data is saved Successful"})
   } catch (error) {
    res.status(400).json(error.error)
   }

}

export const deleteData = async (req, res)=>{
    await UserData.deleteOne({_id:req.params.id});
    res.json({message: "successfull deleted"})
}

export const  updateData = async (req, res)=>{
    try {
        await UserData.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json({message: "update Successfully"})
    } catch (error) {
        res.status(404).json(error.errors)
    }
}

