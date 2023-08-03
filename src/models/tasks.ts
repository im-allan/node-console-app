import colors from 'colors';
import Task from "./task.js";

class Tasks {
  _list: {[key: string]: Task}

  get listArr() {
    const list: Task[] = [];
    Object.keys(this._list).forEach( key => {
      list.push(this._list[key]);
    })
    return list;
  }
  constructor() {
    this._list = {};
  }

  deleteTask(id:string){
    if(this._list[id]){
      delete this._list[id];
    }
  }

  loadTasksFromArray( tasks: Task[] ) {
    tasks.forEach( task => {
      this._list[task.id] = task;
    })
  }

  createTask( desc: string) {
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  fullList() {
    Object.values(this._list).forEach( (task, index) => {
      console.log(`${colors.blue(index + 1 + '.')} ${task.desc} ::: ${task.completedAt ? colors.green('completada') : colors.red('pendiente')}`)
    })
  }

  listPendingCompleted( completed = true ) {
    let index = 0;
    Object.values(this._list).forEach( (task) => {
      if(!!task.completedAt && completed){
        console.log(`${colors.blue(index + 1 + '.')} ${task.desc} ::: ${colors.green(task.completedAt)}`);
        index++;
      }
      else if (!task.completedAt && !completed){
        console.log(`${colors.blue(index + 1 + '.')} ${task.desc} ::: ${task.completedAt}`);
        index++;
      }
    })
  }

  toggleCompleted(ids: string[]) {
    ids.forEach(id => {

      const task = this._list[id];
      if(!task.completedAt){
        task.completedAt = new Date().toISOString();
      }
    
    });
    this.listArr.forEach(task => {
      if(!ids.includes(task.id)){
        this._list[task.id].completedAt = null;
      }
    })
  }
}

export default Tasks;