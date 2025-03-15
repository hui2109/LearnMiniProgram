Page({
  data: {
    numList: [11, 22, 33],
    fruitList: [{
        id: 1,
        name: '🍎',
        price: 66
      },
      {
        id: 2,
        name: '🍋',
        price: 77
      }, {
        id: 1,
        name: '🍅',
        price: 88
      },
    ],
    obj: {
      name: 'Tim',
      age: 12
    },
    num: 1,
    isFlag: true
  },

  updateNum() {
    this.setData({
      num: this.data.num + 1
    })
  }
});