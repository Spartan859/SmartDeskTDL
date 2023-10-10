class todolist_item{
  constructor(id){
    this.id=id;
  }
  setProperties(title,DDL,AlarmTime,AlarmType){
    this.title=title;
    this.DDL=DDL;
    this.AlarmTime=AlarmTime;
    this.AlarmType=AlarmType;
  }
}
module.exports=todolist_item;