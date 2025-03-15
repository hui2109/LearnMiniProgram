Page({
  // 点击按钮
  // currentTarget 事件绑定者：view
  // target 事件触发者：按钮
  // 如果想获取 view 身上的数据，就必须使用 currentTarget 才可以
  // 如果想获取的是 事件触发者 本身的数据，就需要使用 target
  parentHandler(e) {
    console.log(e.currentTarget.dataset)
    console.log(e.target.dataset)
    console.log('----------------------------')
  }

  // 在传递参数的时候，如果自定义属性是多个单词，单词与单词直接使用中划线 - 进行连接
  // data-parent-id
  // 在事件对象中会被转换为小驼峰写法
  // console.log(event.currentTarget.dataset.parentId)

  // 在传递参数的时候，如果自定义属性是多个单词，单词如果使用的是小驼峰写法
  // data-parentName
  // 在事件对象中会被转为全部小写的
  // console.log(event.currentTarget.dataset.parentname)
})