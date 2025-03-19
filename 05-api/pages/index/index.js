// index.js
Page({
  data: {
    list: [],
  },
  // 获取数据
  getData() {
    // 显示 loading 提示框
    wx.showLoading({
      // 用来显示提示的内容
      // 提示的内容不会自动换行，如果提示的内容比较多，因为在同一行展示
      // 多出来的内容就会被隐藏
      title: '数据加载中...',
      // 是否展示透明蒙层，防止触摸穿透
      mask: true
    })

    // 如果需要发起网络请求，需要使用 wx.request API
    wx.request({
      // 接口地址
      url: 'https://gmall-prod.atguigu.cn/mall-api/index/findBanner',
      // 请求方式
      method: 'GET',
      // 请求参数
      data: {},
      // 请求头
      header: {},
      // API 调用成功以后，执行的回调
      success: (res) => {
        console.log('成功!', res);
        if (res.data.code === 200) {
          // 成功就将数据写入list
          this.setData({
            list: res.data.data
          })
        };
      },
      // API 调用失败以后，执行的回调
      fail: (err) => {
        console.log('失败', err);
      },
      // API 不管调用成功还是失败以后，执行的回调
      complete: (res) => {
        console.log('完成', res);
        // 关掉 loading 提示框
        // hideLoading 和 showLoading 必须结合、配对使用才可以
        wx.hideLoading()
      }
    });
  },
})