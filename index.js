const express = require('express');
const fs = require('fs')
const app = express()
const formData = require('express-form-data');
const multer  = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const fileUpload = require('express-fileupload')
// app.use(fileUpload({
//   useTempFiles : true,
//     tempFileDir : '/tmp/'
// }));
// app.use(fileUpload());
const buff = fs.readFileSync('image/app.png').toString('base64')
console.log('buf', buff)
  const bf = Buffer.from(buff, 'base64')
fs.writeFileSync('image/appn.png', bf)

console.log('hello')
app.use(formData.parse());
// app.use(express.json())
app.get('/', (req, res)=>{
  res.send({name:'upload'})
})
app.post('/',async (req,res)=>{
  const body = req.body
  
  // console.log('body',body,  )
  const img = Buffer.from(body.image, 'base64')
  console.log('####', img)
  fs.writeFileSync('image/'+'app.jpeg', img,'utf8')
  res.send({name:'image'})
})
app.listen(5555,()=>{console.log('listening')})