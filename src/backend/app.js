var express = require('express')
var app = express()

// 配置数据库
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'testdb'
})

// 创建链接
connection.connect()

/**
 * 测试
 */
app.get('/', (req, res) => {
  res.send('Hello World!')
})
/**
 * 测试
 */
app.get('/name', (req, res) => {
  // console.log(req.query.id)

  // SQL语句
  let qSQL = `SELECT name,age from user_info where id=${req.query.id}`
  // 操作数据库
  connection.query(qSQL, (err, rows, fields) => {
    if (err) throw err
    res.send(rows.map(item => ({ name: item.name, age: item.age })))
  })
})

// app.post('/register', (req, res) => {
//   console.log(req.body)
//   console.log(res);
//   res.send("ok")
// })

app.listen(3000, () => {
  console.log('app listening on port 3000!')
})

// // 结束链接
// connection.end()
