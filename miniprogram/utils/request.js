const request = (
  url,
) => {
  console.log(url, 'url')
  return new Promise((resolve, reject) => {
    console.log('request')
    url = 'http://localhost:8081' + url;
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res)
        resolve(res.data)
      },
      error: (e) => {
        reject(e);
      }
    })
  });
}

request.get = (url, params) => {
  return request(url, {
    params: params
  })
}

request.post = (url, data) => {
  return request(url, {
    data: data
  })
}

module.exports = request;