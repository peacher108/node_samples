//モジュール読み込み
const express = require('express')
//dotenvモジュール読み込み
const dotenv = require('dotenv')

//dotenv読み込み
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT
console.log(HOST)
console.log(PORT)

//サーバ作成
const app = express()


//ミドルウェアの設定
app.use(express.static(__dirname + '/public'));

// GETリクエストの処理
app.get('/',(req,res) => {
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)
    //レスポンスの処理
    res.send('Hello!!!!')
})

app.get('/profile',(req,res) => {
    res.send('プロフィール!!')
})
//サーバ待機
app.listen(PORT,HOST,() =>{
    console.log(HOST)
    console.log(PORT)
    console.log('wait....')
})