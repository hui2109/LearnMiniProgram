// pages/info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        city: "北京",
        nameList: ["法师法", '放松放松', '哈哈']
    },

    clickMe(e) {
        console.log("点我了！")
        console.log(e.target.dataset.id)
        console.log(e.target.dataset.name)
    },

    clickGo(e) {
        wx.navigateTo({
            url: '/pages/mine/mine',
        })
    },

    Action(e) {
        wx.showActionSheet({
            itemList: ['A', 'B', 'C'],
            success(res) {
                console.log(res.tapIndex)
            },
            fail(res) {
                console.log(res.errMsg)
            }
        });
        console.log(e);

        // wx.showModal({
        //     title: '提示',
        //     content: '这是一个模态弹窗',
        //     success(res) {
        //         if (res.confirm) {
        //             console.log('用户点击确定')
        //         } else if (res.cancel) {
        //             console.log('用户点击取消')
        //         }
        //     }
        // })

        wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
        });
    },

    Uploadfile(e) {
        wx.chooseMedia({
            success(res) {
                console.log(res)
                const tempFilePaths = res.tempFilePaths
                console.log(tempFilePaths)
                // wx.uploadFile({
                //     url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
                //     filePath: tempFilePaths[0],
                //     name: 'file',
                //     formData: {
                //         'user': 'test'
                //     },
                //     success(res) {
                //         const data = res.data
                //         //do something
                //     }
                // })
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})