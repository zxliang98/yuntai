var express = require('express')
var app = express()
var db = require('./mysql')

// 引入包(获取post接口的参数)
const bodyParser = require('body-parser')

// 使用包(获取post接口的参数)
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// 跨域CORS设置
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Access-Token,adminid')
  res.header('Access-Control-Expose-Headers', '*')
  next()
})

app.listen(3000, () => {
  console.log('app listening on port 3000!')
})

/**
 * 获取用户信息
 * id
 */
app.get('/user/userInfo', (req, res) => {
  // console.log(req.query.id)
  // SQL语句
  let qSQL = `SELECT * from user_info where id=${req.query.id}`
  // 操作数据库
  db.query(qSQL, [], (rows, fields) => {
    let response = rows[0]
    console.log(response)

    if (rows.length) {
      res.json({
        code: 0,
        msg: 'success',
        data: response
      })
    } else {
      res.json({
        code: 1,
        msg: 'fail'
      })
    }
  })
})

/**
 * 用户登录
 * phoneNum
 * userPassword
 */
app.post('/user/userLogin', (req, res) => {
  console.log(req.body)
  const { phoneNum, userPassword } = req.body
  let qSQL = `select userPassword from user_info where phoneNum='${phoneNum}'`
  console.log(qSQL)

  db.query(qSQL, [], (rows, fields) => {
    console.log(rows)

    if (rows) {
      let response = rows[0]
      console.log(response, userPassword)
      if (response.userPassword === String(userPassword)) {
        return res.json({
          code: 0,
          msg: 'success'
        })
      }
      res.json({
        code: 1,
        msg: 'fail'
      })
    }
  })
})

app.post('/logout', (req, res) => {
  res.json({
    code: 0,
    msg: 'success'
  })
})

app.post('/add-user', (req, res) => {
  const { name, age, gender, userName, userPassword } = req.body
  // SQL语句
  let qSQL = `insert into user_info(name,age,gender,userName,userPassword) values('${name}','${age}','${gender}','${userName}','${userPassword}')`
  // 操作数据库
  db.query(qSQL, [], (rows, fields) => {
    res.json({
      code: 0,
      msg: 'success',
      userInfo: { name: name, age: age, gender: gender }
    })
  })
})
