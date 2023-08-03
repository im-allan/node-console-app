import { v4 as uuidv4 } from 'uuid';
uuidv4();

class Task {
  id: string;
  desc: string;
  completedAt: string | null;

  constructor( desc: string ){
    this.id = uuidv4();
    this.desc = desc;
    this.completedAt = null;
  }  
}

export default Task;