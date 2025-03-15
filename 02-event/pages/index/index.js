// index.js
Page({
  clickMe(event) {
    console.log("被点了被点了")
    console.log(event)
  },

  inputMe(event) {
    console.log(event.detail.value)
  },

  btnHandler(e) {
    console.log("子节点事件")
    console.log(e)
  },

  parentHandler(e) {
    console.log("父节点事件")
    console.log(e)
  },
})