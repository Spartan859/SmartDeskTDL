class todolist_item{
  constructor(id){
    this.id=id;
    this.AlarmTypeTextArr=['无提醒','桌板上升后回落','桌板上升至站立位','桌板前后小角度摆动']
  }
  static cmp(a,b){
    let ax=a.DDL.split('-'),bx=b.DDL.split('-');
    for(var i=0;i<5;i++){
      if(parseInt(ax[i])!=parseInt(bx[i])) return parseInt(ax[i])-parseInt(bx[i]);
    }
    return 0;
  }
  static getGoodTime(DDL){
    var tmparr=DDL.split('-')
    return tmparr[0]+'-'+tmparr[1]+'-'+tmparr[2]+' '+tmparr[3]+':'+tmparr[4];
  }
  setProperties(title,DDL,AlarmTime,AlarmType){
    this.title=title;
    this.DDL=DDL;
    this.AlarmTime=AlarmTime;
    this.AlarmType=AlarmType;
    this.completed=false;
    this.DDLtext=this.constructor.getGoodTime(DDL);
    this.AlarmTypeText=this.AlarmTypeTextArr[this.AlarmType];
  }
  switchStatus(){
    this.completed^=1;
  }
}
module.exports=todolist_item;