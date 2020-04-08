/**
 * 公共方法
 * 使用时 引入后再调用
 * 方法定义规则： 前缀添加 utils
*/

/**
 * 时间操作 有参数时，时间转换成时间戳 | 无参数就是，获取现在的时间戳
*/
const getTimeData = (times) => {
  if (times) {
    return new Date(times).getTime()
  } else {
    return new Date().getTime()
  }
}
// 时间戳转换成时间
const getDataTime = (times) => {
  if (!times) {
    return '无'
  }
  let getBYT = (num) => {
    if (num === 0) {
      return '00'
    } else if (num < 10) {
      return '0' + num
    } else {
      return num
    }
  }
  let date = new Date(times) // 13位时间戳
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = getBYT(date.getDate()) + ' '
  let h = getBYT(date.getHours()) + ':'
  let m = getBYT(date.getMinutes()) + ':'
  let s = getBYT(date.getSeconds())
  return Y + M + D + h + m + s
}

// 时间戳转换成时间,没有秒，‘2019-08-03 16:00’格式
const getDataTimeStr = (times) => {
  if (!times) {
    return '无'
  }
  let getBYT = (num) => {
    if (num === 0) {
      return '00'
    } else if (num < 10) {
      return '0' + num
    } else {
      return num
    }
  }
  let date = new Date(times) // 13位时间戳
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = getBYT(date.getDate()) + ' '
  let h = getBYT(date.getHours()) + ':'
  let m = getBYT(date.getMinutes())
  return Y + M + D + h + m
}

// 判断两个时间戳之间，相差天数
const VerificationTime = (opt1, opt2, num) => {
  let timever = (opt2 - opt1) / (1000 * 60 * 60 * 24)

  // 判断是否小于标准值
  if (num >= timever) {
    return true
  } else {
    return false
  }
}
// 秒转换成分钟和小时格式 (针对视频时长 00:00 格式)
const getVideoLength = (time) => {
  time = Math.round(time)
  let t
  if (time > -1) {
    let hour = Math.floor(time / 3600)
    let min = Math.floor(time / 60) % 60
    let sec = time % 60
    if (hour === 0) {
      t = ''
    } else {
      if (hour < 10) {
        t = '0' + hour + ':'
      } else {
        t = hour + ':'
      }
    }
    if (min < 10) {
      t += '0'
    }
    t += min + ':'
    if (sec < 10) { t += '0' }
    t += sec
  }
  return t
}

// 秒转换成分钟和小时格式 (针对视频时长 00分00秒 格式)
const getVideoChineseLength = (time) => {
  time = Math.round(time) - 1
  let t
  if (time > -1) {
    let hour = Math.floor(time / 3600)
    let min = Math.floor(time / 60) % 60
    let sec = time % 60
    if (hour === 0) {
      t = ''
    } else {
      if (hour < 10) {
        t = '0' + hour + '时'
      } else {
        t = hour + '时'
      }
    }
    if (min < 10) {
      t += '0'
    }
    t += min + '分'
    if (sec < 10) { t += '0' }
    t = t + sec + '秒'
  }
  return t
}

// 时间转换函数
const presentStr = (pubTime) => {
  let t = parseInt((new Date().getTime() - pubTime) / 1000)
  if (t < 0) {
    return '1小时前'
  }
  if (t < 60) {
    return '刚刚'
  }
  t = parseInt(t / 60)
  if (t < 60) {
    return `${t}分钟前`
  }
  t = parseInt(t / 60)
  if (t < 24) {
    return `${t}小时前`
  }
  t = parseInt(t / 24)
  if (t === 1) {
    return '昨天'
  } else if (t === 2) {
    return '前天'
  } else if (t < 10 && t > 2) {
    return `${t}天前`
  }

  let d = new Date(+pubTime)
  let year = d.getFullYear()
  let month = d.getMonth() + 1
  let day = d.getDate()
  return `${year}.${month}.${day}`
}

/**
 * Array
*/

// 获取，某一个数据，在数组中的个数，
const getArrayItemNum = (arr, data, key) => {
  let dataol = []
  dataol = arr.filter((item) => {
    if (key) {
      if (item[key] === data) {
        return item
      }
    } else {
      if (item === data) {
        return item
      }
    }
  })
  return dataol.length
}

// 获取两个数组中相同的元素
const getArrayRepeat = (arr1, arr2) => {
  if (!arr1 || !arr2) {
    return false
  }
  let bgarr = []
  bgarr = arr1.filter((num) => {
    if (arr1.indexOf(num) !== -1 && arr2.indexOf(num) !== -1 && bgarr.indexOf(num) === -1) {
      return num
    }
  })
  return bgarr
}

/**
 * 定时器操作
 *
*/

// 定时器操作
const mySetInterval = (func, interval) => {
  let startTime = Date.now()
  const config = { shouldStop: false }
  const check = () => {
    if (!config.shouldStop) {
      if (Date.now() - startTime > interval) {
        func()
        startTime = Date.now()
      }
      if (typeof window === 'undefined') {
        setImmediate(check)
      } else {
        window.requestAnimationFrame(check)
      }
    }
  }
  check()
  return config
}

// 清除定时器
const myClearInterval = config => {
  if (config) {
    config.shouldStop = true
  }
}

/**
 *  Router
 *
 * **/

// 更新现在的页面   替换router-view上面的key值
const updataPage = (that) => {
  that.Hub.$emit('reloadPage')
}
// 获取文件后缀名
const getFileSuffix = (url, arr) => {
  let index1 = url.lastIndexOf('.')
  let index2 = url.length
  let postf = url.substring(index1, index2)// 后缀名
  if (!arr || arr.indexOf(postf) === -1) {
    return false
  } else {
    return true
  }
}
/**
 * 判断file类型，只要为了不同文件格式展示不同的icon图
 * params: name-->文件名
 */

const getFileTypeClass = (name) => {
  // let _noaudio = new RegExp(/(.mp3|.wav|.wma|.ogg|.ape|.acc)$/);
  let _name = name.toLowerCase()
  let _isword = new RegExp(/(.doc|.docx)$/)
  let _isexcel = new RegExp(/(.xlsx|.xls)$/)
  let _ispdf = new RegExp(/.pdf$/)
  let _isppt = new RegExp(/(.pptx|.ppt)$/)
  let _bgclass = ''
  if (_name.match(_isexcel)) {
    _bgclass = 'excel'
  } else if (_name.match(_ispdf)) {
    _bgclass = 'pdf'
  } else if (_name.match(_isppt)) {
    _bgclass = 'ppt'
  } else if (_name.match(_isword)) {
    _bgclass = 'word'
  } else {
    _bgclass = 'word'
  }
  return _bgclass
}

// 时间方法
export const useTimes = {
  getTimeData, // 有参数时，时间转换成时间戳 | 无参数就是，获取现在的时间戳
  getDataTime, // 时间戳转换成时间
  VerificationTime, // 两个时间戳之间，相差天数，是否正确
  getVideoLength, // 秒转换成分钟和小时格式  "29:21"
  getVideoChineseLength, // 秒转换成分钟和小时格式  "29分21秒"
  getDataTimeStr, // 时间戳转换成时间,没有秒，‘2019-08-03 16:00’格式
  presentStr // 计算一个时间与当前时间的差值,
}

// 数组方法
export const useArray = {
  getArrayItemNum, // 获取值在, 整个数组中的个数 (key 筛选 item = Object 的数据)
  getArrayRepeat // 获取两个数组中相同的元素
}

// 定时器
export const userInterval = {
  mySetInterval, // 与普通定时器方法一样
  myClearInterval // 清除定时器
}

export const useRouter = {
  updataPage // 更新当前的页面，所传参数为当前的this
}
// 文件
export const useFile = {
  getFileSuffix, // 获取文件的后缀名
  getFileTypeClass
}
