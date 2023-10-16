import todolist_item from 'utils/todolist_item'
// app.js
App({
  onLaunch() {
    var tdl_get=wx.getStorageSync('todo_list');
    if(tdl_get!=''){
      for(var key in tdl_get){
        this.globalData.todo_list[key]=new todolist_item(key);
        this.globalData.todo_list[key].reconstruct_by_object(tdl_get[key]);
      }
    }
    console.log(this.globalData.todo_list);
  },
  globalData: {
    todo_list: []
  }
})
