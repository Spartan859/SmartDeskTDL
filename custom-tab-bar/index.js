Component({
  //  组件的属性列表
  properties: { },
  //  组件的初始数据
  data: {
    value: '/pages/home/index',
    tabBar: [{
      value: '/pages/index/index',
      icon: 'task-checked',
      label: 'ToDo',
    }, {
      value: '/pages/pomodoro/pomodoro',
      icon: 'time',
      label: '番茄钟',
    }]
  },
  //  组件的方法列表
  methods: {
    onChange(e) {
      wx.switchTab({
        url: e.detail.value
      });
    }
  }
})