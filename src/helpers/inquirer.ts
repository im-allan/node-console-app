import inquirer from 'inquirer';
import colors from 'colors';
import Task from '../models/task.js';
const questions = [
  {
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: 1,
        name: 'Crear tarea',
      },
      {
        value: 2,
        name: 'Listar tareas',
      },
      {
        value: 3,
        name: 'Listar tareas completadas',
      },
      {
        value: 4,
        name: 'Listar tareas pendientes',
      },
      {
        value: 5,
        name: 'Completar tarea(s)',
      },
      {
        value: 6,
        name: 'Borrar tarea',
      },
      {
        value: 0,
        name: 'Salir',
      },
    ],
  }
]

const inquirerMenu = async () => {

    console.clear();
    console.log(colors.blue('========================'));
    console.log(colors.blue(' Seleccione una opción'));
    console.log(colors.blue('========================\n'));

    const { option } = await inquirer.prompt(questions);

    return option;
}


const pauseQuestion = [{
  type:'input',
  name:'enter',
  message:`Presione ${colors.green('enter') } para continuar`,
}]

const pause = async() => {
  console.log('\n');
  const { enter } = await inquirer.prompt(pauseQuestion);
  return enter;
}

const readInput = async(message:string) => {
  const question = [{
    type: 'input',
    name: 'desc',
    message,
    validate( value:string ){
      if( value.length === 0 ){
        return 'Por favor, ingrese un valor';
      }
      return true;
    }
  }]

  const { desc } = await inquirer.prompt(question);
  return desc;
}

const listTasksDelete = async( tasks: Task[]) => {
  const choices = tasks.map((task, index) => {
    return{
      value: task.id,
      name: `${colors.blue(index + 1 + '.')} ${task.desc}`,
    }
  });

  choices.unshift({
    value: '0',
    name: `${colors.blue('0.')} Cancelar`
  })

  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'Borrar',
      choices
    }
  ]
  const { id } = await inquirer.prompt(questions);
  return id;
}

const confirm = async(message:string) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    }
  ]
  const { ok } = await inquirer.prompt(question);
  return ok;
}

const showChecklist  = async( tasks: Task[]) => {
  const choices = tasks.map((task, index) => {
    return{
      value: task.id,
      name: `${colors.blue(index + 1 + '.')} ${task.desc}`,
      checked: (task.completedAt) ? true : false
    }
  });

  const question = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Selecciones',
      choices
    }
  ]
  const { ids } = await inquirer.prompt(question);
  return ids;
}

export {
  confirm,
  inquirerMenu, 
  listTasksDelete,
  pause,
  readInput,
  showChecklist
}