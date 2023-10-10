// pages/task_set/task_set.js
import todolist_item from "../../utils/todolist_item"
import Toast from 'tdesign-miniprogram/toast/index'
const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskName: '',

    datetimeVisible: false,
    datetime: '',
    minute: new Date().getTime(), // 支持时间戳传入

    notifyVisible: false,
    notifyWays:[
        {label: '无提醒',value: 0},
        {label: '桌板上升后回落',value: 1},
        {label: '桌板上升至站立位',value: 2},
        {label: '桌板前后小角度摆动',value: 3},
    ],

    notifyValue: -1,
    isEditMode: false
  },

  onLoad(opt){
    console.log('LD!!!!!!!!!');
    var tid=parseInt(opt.id)
    this.setData({isEditMode: tid});
    console.log(tid)
    if(tid!=-1){
        
        var task_this=app.globalData.todo_list[tid];
        console.log(app.globalData);
        this.setData({
            taskName: task_this.title,
            datetime: task_this.DDL,
            datetimeText: todolist_item.getGoodTime(task_this.DDL),
            notifyValue: task_this.AlarmType,
            notifyText: this.data.notifyWays[task_this.AlarmType].label
        })   
    }
  },
  showTimePicker(e) {
    this.setData({
      datetimeVisible: true
    });
  },
  hideTimePicker() {
    this.setData({
      datetimeVisible: false,
    });
  },
  onTimeConfirm(e) {
    const { value } = e.detail;

    console.log('confirm', value);

    this.setData({
      datetime: value,
      datetimeText: todolist_item.getGoodTime(value),
    });
    this.hideTimePicker();
  },
  bindtaskNameSet(e){
    this.setData({taskName: e.detail.value});
  },
  onNotifyPicker(){
      this.setData({notifyVisible: true});
  },
  onNotifyPickerChange(e) {
    const { value } = e.detail;

    console.log('picker change:', e.detail);
    this.setData({
      notifyVisible: false,
      notifyValue: value[0],
      notifyText: e.detail.label[0],
    });
  },
  confirmTaskInfo(){
    
    var taskName=this.data.taskName;
    var datetime=this.data.datetime;
    var notifyValue=this.data.notifyValue;
    
    if(taskName==''){
      Toast({selector: '#t-toast',message: "请输入任务名称！"});
      return;
    }
    if(datetime==''){
      Toast({selector: '#t-toast',message: "请选择日期与时间！"});
      return;
    } 
    if(notifyValue==-1){
      Toast({selector: '#t-toast',message: "请选择提醒方式！"});
      return;
    } 
    if(this.data.isEditMode!=-1){
      app.globalData.todo_list[this.data.isEditMode].setProperties(this.data.taskName,this.data.datetime,"qwq",this.data.notifyValue);
    }else{
      var nid=app.globalData.todo_list.length;
      app.globalData.todo_list.push(new todolist_item(nid));
      app.globalData.todo_list[nid].setProperties(this.data.taskName,this.data.datetime,"qwq",this.data.notifyValue);
    }
    wx.navigateTo({
      url: '../index/index',
    });
  }
})