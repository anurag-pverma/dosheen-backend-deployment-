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

