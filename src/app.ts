import {  confirm, inquirerMenu, 
          listTasksDelete, 
          pause, 
          readInput,
          showChecklist,
 } from "./helpers/inquirer.js";
import { readDB, saveDB } from "./helpers/manageDB.js";
import Tasks from "./models/tasks.js";

const main = async() => {

  let opt;
  const tasks = new Tasks();
  
  const tasksDB = readDB();

  if( tasksDB ){
    tasks.loadTasksFromArray(tasksDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1: 
        const desc = await readInput('Descripción: ');
        tasks.createTask(desc);
        break;
      case 2: 
        tasks.fullList();
        break;
      case 3: 
        tasks.listPendingCompleted(true);
        break;
      case 4: 
        tasks.listPendingCompleted(false);
        break;
      case 5: 
        const ids = await showChecklist(tasks.listArr);
        tasks.toggleCompleted(ids);
        break;
      case 6: 
        const id = await listTasksDelete(tasks.listArr);
        if(id !== '0'){
          const ok = await confirm('¿Está seguro?');
          if( ok ){
            tasks.deleteTask(id);
            console.log('Tarea eliminada correctamente!')
          }
        }
        break;
    }

    saveDB(tasks.listArr);
    await pause();

  
  } while ( opt !== 0);
}

main();