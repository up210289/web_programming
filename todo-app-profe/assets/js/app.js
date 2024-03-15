// Elementos HTML
const userSelect = document.getElementById('select-users');
const userContainer = document.getElementById('user-container');
const taskContainer = document.getElementById('task-container');
const user_name = document.getElementById('user-name');
const user_mail = document.getElementById('user-mail');

// Codígo nesesario para mostrar información
userSelect.addEventListener('change', () => {
  const userId = userSelect.value;
  const users = getAllUsers();
  const selectedUser = users.find(user => user.id === parseInt(userId));

  // Mostrar información del usuario seleccionado
  document.getElementById('user-name').innerHTML = `${selectedUser.firstname} ${selectedUser.lastname}`;
  document.getElementById('user-mail').innerHTML = selectedUser.email;

  console.log('5');
});

// Fin de codígo 

// Funciones
/**
 * Optiene una lista de todos los usuarios que pueden existir
 * @returns {Promise<User[]>}
 */
function getAllUsers() {
  return fetch('/data/usuarios.json')
    .then(resp => resp.json());
}



/**
 * Optiene una lista de todas las tareas que hay de todos los usuarios
 * @returns {Promise<Task[]>}
 */
function getAllTasks() {
  return fetch('/data/usuarios.json')
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