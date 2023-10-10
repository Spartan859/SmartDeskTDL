// pages/task_set/task_set.js
const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskName: '',

    mode: '',
    dateVisible: false,
    minute: new Date().getTime(), // 支持时间戳传入

    notifyVisible: false,
    notifyWays:[
        {label: '无提醒',value: 0},
        {label: '桌板上升后回落',value: 1},
        {label: '桌板上升至站立位',value: 2},
        {label: '桌板前后小角度摆动',value: 3},
    ],
  },

  onLoad(opt){
      opt.id=parseInt(opt.id)
    if(opt.id!=-1){
        var task_this=app.globalData.todo_list[opt.id];
        console.log(app.globalData);
        this.setData({
            taskName: task_this.title
        })   
    }
  },
  showPicker(e) {
    const { mode } = e.currentTarget.dataset;
    this.setData({
      mode,
      [`${mode}Visible`]: true,
    });
  },
  hidePicker() {
    const { mode } = this.data;
    this.setData({
      [`${mode}Visible`]: false,
    });
  },
  onConfirm(e) {
    const { value } = e.detail;
    const { mode } = this.data;

    console.log('confirm', value);

    this.setData({
      [mode]: value,
      [`${mode}Text`]: value,
    });
    this.hidePicker();
  },
  bindtaskNameSet(e){
    this.setData({taskName: e.detail.value});
  },
  onNotifyPicker(){
      this.setData({notifyVisible: true});
  },
  onNotifyPickerChange(e) {
    const { key } = e.currentTarget.dataset;
    const { value } = e.detail;

    console.log('picker change:', e.detail);
    this.setData({
      [`${key}Visible`]: false,
      [`${key}Value`]: value[0],
      [`${key}Text`]: e.detail.label[0],
    });
    console.log(this.data.notifyValue);
  },
  confirmTaskInfo(){

  }
})