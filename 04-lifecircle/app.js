// app.js
App({

  // onLaunch 是小程序的钩子函数，这个钩子函数在冷启动时肯定会执行到
  // 当小程序冷启动时，会自动微信后台请求新版本的信息，如果有新版本，会立即进行下载
  // 如果是热启动，不会触发 onLaunch 钩子函数，会触发 onShow 钩子函数
  // 因此呢 onLaunch（全局只触发一次）
  onLaunch() {
    console.log('onLaunch 小程序初始化完成时')
    // 使用 wx.getUpdateManager 方法监听下载的状态
    const updateManager = wx.getUpdateManager()

    // 当下载完成新版本以后，会触发 onUpdateReady 回调函数
    updateManager.onUpdateReady(function () {
      // 在回调函数中给用户提示，
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          console.log(res)
          if (res.confirm) {
            // 强制当前小程序使用新版本并且会重启当前小程序
            updateManager.applyUpdate()
          }
        }
      })
    })
  },

  onShow: function (options) {
    console.log('onShow 小程序启动，或从后台进入前台显示')
  },

  onHide: function () {
    console.log('onHide 小程序从前台进入后台')
  },
})