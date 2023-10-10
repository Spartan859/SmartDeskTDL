// index.js
import todolist_item, {totodolist_item} from "../../utils/todolist_item"
// 获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../task_set/task_set?id=1'
    })
  },
  onLoad(){
    app.globalData.todo_list.push(new todolist_item(0));
    app.globalData.todo_list[0].setProperties("test","2023-10-09 12:07","qwq",1)
  }
})
