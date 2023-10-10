// index.js
import todolist_item from "../../utils/todolist_item"
// 获取应用实例
const app = getApp()
var TDLcp=[],CPLcp=[]
Page({
  data: {
    TDL: [],
    CPL: [],
    rmTask: [0]
  },

  refreshTDLview(){
    TDLcp=[]
    CPLcp=[]
    for(var key in app.globalData.todo_list){
      var completedx=app.globalData.todo_list[key].completed;
      if(!completedx) TDLcp.push(app.globalData.todo_list[key]);
      else CPLcp.push(app.globalData.todo_list[key]);
    }
    TDLcp.sort(todolist_item.cmp);
    this.setData({TDL:TDLcp,CPL:CPLcp});
  },
  onLoad(){
    this.refreshTDLview();
  },
  addTask(){
    wx.navigateTo({
      url: '../task_set/task_set?id=-1'
    })
    console.log(app.globalData.todo_list);
  },
  onTDLchange(e){
    var tid=parseInt(e.currentTarget.id);
    app.globalData.todo_list[tid].switchStatus();
    this.refreshTDLview();
  },
  onEditTask(e){
    var tid=e.currentTarget.id;
    wx.navigateTo({
      url: '../task_set/task_set?id='+tid,
    })
  }

})
