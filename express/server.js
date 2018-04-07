const express = require('express');
const app = express();


app.set('view engine','ejs'); // 要先安裝 ejs: npm install ejs --save

app.get('/template', function(req, res){
    res.render('index', {user: user});
    // 不用寫 views/index.ejs 因為 express 預設 template會放在 views 資料夾裡面
});

app.get('/about', function(req, res) {
    res.render('index', {name: req.query.name});
});

app.listen(3000, function () {
  console.log('Example app is running on port 3000!');
});      