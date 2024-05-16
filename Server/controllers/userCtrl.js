const user=require('../modules/user')

const Login=async(req,res) =>{
    const body = req.body
    const findUser = await user.findOne({email:body.email})
    //comparing the hashedpassword with raw password which user is send
    const comparePassword= await bcryptjs.compare(body.password,findUser.password)
    if(!comparePassword){
        return res.status(401).json({errorMessage:'Invalid password'})
    }
    res.send({message:'success',data:findUser})
}

const Register = async(req, res) => {
//data which we getting from user in req.body
const body = req.body
const hashpassword = await bcryptjs.hash(req.body.password,10)
const saveData = await user.create({
    username:body.username,
    email:body.email,
    //saving the hashed password
    password:hashpassword
}) //saves in mongo databse

res.send({message:'success',data:saveData}) //sending back the user data to react
}

module.exports={
    Login,
    Register
}