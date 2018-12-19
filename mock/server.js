let http = require('http')
let url = require('url')
let fs = require('fs')
let sliders = require('./slider')
function read (cb) {
  fs.readFile('./good.json', 'utf8', (err, data) => {
    if (err || data.length === 0) { // 文件错误或者没长度
      cb([])
    } else {
      cb(JSON.parse(data))
    }
  })
}
function write (data, cb) { // 写入内容
  fs.writeFile('./good.json', JSON.stringify(data), cb)
}
let offset = 5
http.createServer((req, res) => {
  // 设置哪个域名可以跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.setHeader('X-Powered-By', ' 3.2.1')
  // 试探性请求
  if (req.method === 'OPTIONS') return res.end('200')

  let {pathname, query} = url.parse(req.url, true)
  // 设置哪个域名可以跨域
  
  // 轮播图 接口
  if (pathname === '/slider') {
    // console.log(fs, query)
    res.setHeader('content-type', 'text/json;charset=utf8')
    return res.end(JSON.stringify(sliders))
  }
  // 首页接口
  if (pathname === '/new') {
    res.setHeader('content-type', 'text/json;charset=utf8')
    read((data) => {
      let newss = data.reverse().slice(0, 4)
      setTimeout(() => {
        return res.end(JSON.stringify(newss))
      }, 1000)
    })
    return
  }
  if (pathname === '/all') {
    res.setHeader('content-type', 'text/json;charset=utf8')
    read((data) => {
      // let newlist=data.reverse().slice(0, 4)
      return res.end(JSON.stringify(data))
    })
    return
  }
  // 列表接口
  if (pathname === '/list') {
    res.setHeader('content-type', 'text/json;charset=utf8')
    let id = parseInt(query.id)
    // console.log(req.method, '请求方式')
    switch (req.method) {
      // 删除接口
      case 'DELETE':
        // console.log('进入了delete请求')
        if (id) {
          read(data => {
            // 把不等于传递过来的id的值变化出那个一个新的data
            data = data.filter(item => item.id !== id)
            // 把新的数据重新写回到json文件里
            write(data, () => {
              res.end(JSON.stringify({}))
            })
          })
        }
        break
        // 修改接口
      case 'PUT':
        // console.log('这是put请求')
        let str = ''
        req.on('data', chunk => {
          str += chunk
        })
        req.on('end', () => {
          // console.log(str)
          // good是前端传过来的数据
          let good = JSON.parse(str)
          // console.log(good, '传过来的数据')

          read(data => {
            var newgoods = data.map(item => {
              // 如果等于改变这项的id，非农户改变后的数据，如果不等于直接返回原来的
              if (item.id === id) {
                return good
              }
              return item
            })
            // 把改变后的值重新写入json文件
            write(newgoods, () => {
              res.end(JSON.stringify(good))
            })
          })
        })
        break
        // 添加接口
      case 'POST':
        // console.log('进入post添加接口')
        let str1 = ''
        req.on('data', chunk => {
          str1 += chunk
        })
        req.on('end', () => {
          // console.log(str1)
          let adgood = JSON.parse(str1)
          // console.log(adgod, '添加')
          read(data => {
            // 给天骄的商品加一个id，如果data 是空的id为1，否则id为最后一项的id加1
            adgood.id = data.length ? data[data.length - 1].id + 1 : 1
            // console.log(adgood, '增加的哪一项')
            data = [...data, adgood]
            // console.log(data, '所有数据')
            write(data, () => {
              return res.end(JSON.stringify(adgood))
            })
          })
        })
        break
    }

    read((data) => {
      if (id) {
        // 拿到其中一条,data.find也可以因为id唯一filter
        let good = data.find(item => item.id === id)
        if (good) {
          res.end(JSON.stringify(good))
        } else {
          res.end(JSON.stringify({}))
        }
      } else {
        return res.end(JSON.stringify(data))
      }
    })
    return
  }
  // 分页接口
  // localhost:3000/page?page=2
  if (pathname === '/page') {
    res.setHeader('content-type', 'text/json;charset=utf8')
    let page = parseInt(query.page)
    if (!page) {
      page = 1
    }
    page = page - 1
    // 默认有下一页
    let hasmore = true
    read((data) => {
      let lastindex = page * offset + offset
      let pagedata = data.slice(page * offset, lastindex)
      // 如果当期最后的索引大于data的长度，则表示没有了
      if (lastindex > data.length) {
        hasmore = false
      }
      res.end(JSON.stringify({data: pagedata, hasmore}))
    })
    return
  }
  res.end('40400')
}).listen(3000, () => { console.log('3000启动成功') })
