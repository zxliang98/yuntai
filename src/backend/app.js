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

// 发布公告
app.post('/notice', (req, res) => {
  const { title, type, content, userName, state } = req.body
  let qSQL = `insert into notice(title, type, content, publishTime, userName, state) values('${title}','${type}','${content}','${Date.now()}','${userName}','${state}')`
  db.query(qSQL, [], (rows, fields) => {
    let id
    let qSQL1 = 'select max(id) from notice'
    db.query(qSQL1, [], (rows, fields) => {
      console.log('rowsrowsrows', rows[0])
      id = rows[0]['max(id)']
      res.json({
        code: 0,
        msg: 'success',
        data: {
          id: id,
          title: title,
          type: type,
          content: content
        }
      })
    })
  })
})

// 获取公告列表
app.get('/noticeList', (req, res) => {
  let { pn, pl } = req.query
  let state = req.query.state
  let type = req.query.type
  let qSQL
  if (state && type) {
    qSQL = `select * from notice where state=${state}&&type=${type} order by id desc limit ${pn * pl},${pl} `
  } else if (state) {
    qSQL = `select * from notice where state=${state} order by id desc limit ${pn * pl},${pl} `
  } else if (type) {
    qSQL = `select * from notice where type=${type} order by id desc limit ${pn * pl},${pl} `
  } else {
    qSQL = `select * from notice order by id desc limit ${pn * pl},${pl}`
  }
  db.query(qSQL, [], (rows, fields) => {
    res.json({
      code: 0,
      msg: 'success',
      data: rows
    })
  })
})

// 获取单个公告
app.get('/notice', (req, res) => {
  let { id } = req.query
  let qSQL = `select * from notice where id=${id}`
  db.query(qSQL, [], (rows, fields) => {
    res.json({
      code: 0,
      msg: 'success',
      data: rows[0]
    })
  })
})

// 发布景区
app.post('/view', (req, res) => {
  const { title, content, userName, state } = req.body
  let qSQL = `insert into view(title, content, publishTime, userName, state) values('${title}','${content}','${Date.now()}','${userName}','${state}')`
  db.query(qSQL, [], (rows, fields) => {
    let id
    let qSQL1 = 'select max(id) from view'
    db.query(qSQL1, [], (rows, fields) => {
      console.log('rowsrowsrows', rows[0])
      id = rows[0]['max(id)']
      res.json({
        code: 0,
        msg: 'success',
        data: {
          id: id,
          title: title,
          content: content
        }
      })
    })
  })
})

// 获取景区列表
app.get('/viewList', (req, res) => {
  let { pn, pl } = req.query
  let state = req.query.state
  let type = req.query.type
  let qSQL
  if (state && type) {
    qSQL = `select * from view where state=${state}&&type=${type} order by id desc limit ${pn * pl},${pl} `
  } else if (state) {
    qSQL = `select * from view where state=${state} order by id desc limit ${pn * pl},${pl} `
  } else if (type) {
    qSQL = `select * from view where type=${type} order by id desc limit ${pn * pl},${pl} `
  } else {
    qSQL = `select * from view order by id desc limit ${pn * pl},${pl}`
  }
  db.query(qSQL, [], (rows, fields) => {
    res.json({
      code: 0,
      msg: 'success',
      data: rows
    })
  })
})

// 获取单个景区
app.get('/view', (req, res) => {
  let { id } = req.query
  let qSQL = `select * from view where id=${id}`
  db.query(qSQL, [], (rows, fields) => {
    res.json({
      code: 0,
      msg: 'success',
      data: rows[0]
    })
  })
})

// 发布游玩
app.post('/play', (req, res) => {
  const { title, type, content, userName, state } = req.body
  let qSQL = `insert into play(title, type, content, publishTime, userName, state) values('${title}','${type}','${content}','${Date.now()}','${userName}','${state}')`
  db.query(qSQL, [], (rows, fields) => {
    let id
    let qSQL1 = 'select max(id) from play'
    db.query(qSQL1, [], (rows, fields) => {
      console.log('rowsrowsrows', rows[0])
      id = rows[0]['max(id)']
      res.json({
        code: 0,
        msg: 'success',
        data: {
          id: id,
          title: title,
          type: type,
          content: content
        }
      })
    })
  })
})

// 获取游玩列表
app.get('/playList', (req, res) => {
  let { pn, pl } = req.query
  let state = req.query.state
  let type = req.query.type
  let qSQL
  if (state && type) {
    qSQL = `select * from play where state=${state}&&type=${type} order by id desc limit ${pn * pl},${pl} `
  } else if (state) {
    qSQL = `select * from play where state=${state} order by id desc limit ${pn * pl},${pl} `
  } else if (type) {
    qSQL = `select * from play where type=${type} order by id desc limit ${pn * pl},${pl} `
  } else {
    qSQL = `select * from play order by id desc limit ${pn * pl},${pl}`
  }
  db.query(qSQL, [], (rows, fields) => {
    res.json({
      code: 0,
      msg: 'success',
      data: rows
    })
  })
})

// 获取单个游玩
app.get('/play', (req, res) => {
  let { id } = req.query
  let qSQL = `select * from play where id=${id}`
  db.query(qSQL, [], (rows, fields) => {
    res.json({
      code: 0,
      msg: 'success',
      data: rows[0]
    })
  })
})
