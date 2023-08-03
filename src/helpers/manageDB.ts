import * as fs from 'fs';
import Task from '../models/task.js';

const path = './dist/db/data.json';

const saveDB = (data: Task[]) => {

  fs.writeFileSync(path, JSON.stringify(data));
}

const readDB = () =>{
  if (!fs.existsSync(path)) return null;

  const data = JSON.parse(fs.readFileSync(path, { encoding: 'utf-8' }));
  return data;
}

export { saveDB, readDB };