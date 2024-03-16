// Elementos HTML
const userSelect = document.getElementById('select-users');
const userContainer = document.getElementById('user-container');
const taskContainer = document.getElementById('task-container');
const user_name = document.getElementById('user-name');
const user_mail = document.getElementById('user-mail');
const task_list = document.getElementById('tasklist');
const btn = document.getElementById('btn');


// Codígo nesesario para mostrar información
userSelect.addEventListener('change', () => {
  const userId = parseInt(userSelect.value);
  
  getAllUsers()
    .then(function(json){
      console.log("JSON usuarios recibido:", json);
      for (let i = 0; i < json.usuarios.length; i++) {
        console.log("Comparando userId con id:", userId, json.usuarios[i].id);
        if (userId === json.usuarios[i].id) {
          const { firstname, lastname, email } = json.usuarios[i];
          user_name.innerHTML = `${firstname} ${lastname}`;
          user_mail.innerHTML = email;
          break;
        }else (userId === 0)
        {
          user_name.innerHTML = "";
          user_mail.innerHTML = "";
          task_list.innerHTML = "";
        }
      }

      btn.addEventListener('click', () =>{
        task_list.innerHTML = "";
        getAllTasks()
        .then(function(json){
          console.log("JSON tareas recibido:", json);
          const ul = document.createElement('ul');
          task_list.innerHTML = "";
          for (let i = 0; i < json.tareas.length; i++) {
            if (userId === json.tareas[i].userId) {
              const li = document.createElement('li');
              const checkbox = document.createElement('input');
              checkbox.type = 'checkbox';
              li.innerText = json.tareas[i].title;
              if(json.tareas[i].completed)
              {
                checkbox.checked = true;
              }
              li.appendChild(checkbox) 
              ul.appendChild(li);
            }
          }
          task_list.appendChild(ul);
        });
      })

      
    });
});

// Fin de codígo 

// Funciones
/**
 * Optiene una lista de todos los usuarios que pueden existir
 * @returns {Promise<User[]>}
 */
function getAllUsers() {
  return fetch('/todo-app/data/usuarios.json')
    .then(resp => resp.json());
}



/**
 * Optiene una lista de todas las tareas que hay de todos los usuarios
 * @returns {Promise<Task[]>}
 */
function getAllTasks() {
  return fetch('/todo-app/data/tareas.json')
    .then(resp => resp.json());
}

/**
 * @typedef User Definición de un usuario
 * @property {number} id Identificador unico del usuario
 * @property {string} firtsname Primer nombre del usuario
 * @property {string} lastname Apellido del usuario
 * @property {string} email Correo electronico del usuario
  */

/**
 * @typedef Task Definición de una tarea de usuario
 * @property {number} id Identificador unico de la tarea
 * @property {number} userId IDentificador del uaurio a quien corresponde la tarea
 * @property {string} title Titulo de la tarea
 * @property {boolean} completed Estado de la tarea si esta completada o no
 */