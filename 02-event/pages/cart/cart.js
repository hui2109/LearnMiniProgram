// pages/cart/cart.js
Page({
  // 先点击蓝色区域 (不点击按钮)
  // 通过事件对象获取的是 view 身上绑定的数据

  // 先点击按钮 (不点击蓝色区域)
  // 通过事件对象获取到的是 触发事件的节点 和 父节点身上 [所有的] mark 数据
  parentHandler(e) {
    console.log(e.mark);
  }
})