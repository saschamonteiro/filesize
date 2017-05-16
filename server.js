var express = require('express')
var fs = require('fs')
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var app = express()
var bodyparser = require('body-parser')

var port = process.env.PORT || 8080

app.use(bodyparser.urlencoded({extended: false}))
app.use(express.static('public'))
app.post('/get-file-size', upload.single('upfile'), function(req, res1) {
  console.log(req.file)
    var s = {
      "name": req.file.originalname,
      "size":req.file.size}
    fs.unlinkSync(req.file.path)
    res1.end(JSON.stringify(s))
})

app.listen(port, function() {
  console.log('Example app listening on port ' + port)
})