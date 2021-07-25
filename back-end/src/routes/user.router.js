require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs")
const jwt =require("jsonwebtoken")
const verify = require("../auth/checkToken")
const {registerValidation, loginValidation} = require("../auth/validation")

const User = require("../models/user.model")

let newuser
router.post('/signup', async function(req, res){
    // Kiểm tra email có tồn tại hay không
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send(("Email đã tồn tại"))

      // Mã hóa password
      const salt = await bcrypt.genSalt(10);
      const hashPass = await bcrypt.hash(req.body.password, salt)
      // mã hóa password truyền vào và gán nó vào biến hashPass để có thể lưu pass vào database.


    const{ error } = registerValidation(req.body);
     if(error) return res.status(400).send(error.details[0].message)


    // Tạo user
    newuser = new User();
    newuser.name = req.body.name
    newuser.email = req.body.email
    newuser.password = hashPass
    newuser.confirmpassword=hashPass
    newuser.phone=req.body.phone
    try{
        const User = await newuser.save()
        res.send(User);
        
    }catch(err){
        res.status(400)
        res.send(err);
        console.log("error")
    }
})
router.post('/signin', async function(req, res){
    // Validate user
    const{ error } = loginValidation(req.body);
     if(error) return res.status(400).send(error.details[0].message)
      // Kiểm tra email
    const userLogin = await User.findOne({email: req.body.email});
    if(!userLogin) return res.status(400).send(("Không tìm thấy email"))

     // Kiểm tra password
    const passLogin = await bcrypt.compare(req.body.password, userLogin.password);
    if(!passLogin) return res.status(400).send(("Mật khẩu không hợp lệ"))

     //res.send("Bạn đã đăng nhập thành công")
     
  // Ký và tạo token

     res.send({userLogin})
})
router.get('/', verify, function(req, res){
    res.send(JSON.stringify("Token hợp lệ"))
 })
module.exports = router;