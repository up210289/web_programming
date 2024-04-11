import {getAllUsers} from './petitions.js';
import {getAllTasks } from './petitions.js';

const listUsers = document.getElementById('users');
const listTasks = document.getElementById('tbody');



document.addEventListener('DOMContentLoaded', async () =>{
    listTasks.innerHTML = "";
    const users = await getAllUsers();
    const tasks = await getAllTasks();
    let template = listUsers.innerHTML;
    let tasktemplate = listTasks.innerHTML;

    
    
    for (const user of users) {
        template += `
            <option value="${user.id}">${user.fullname}</option>
        `;        
    };

    for (const task of tasks) {
        tasktemplate += `
            <tr>
                <td>${task.idUser}</td>
                <td>${task.name}</td>
                <td>${task.title}</td>
                <td>${task.id}</td>
                <td>
                    <button class="btn btn-secondary btn-sm">
                        <span>Update</span> <i class="nf nf-md-pencil"></i>
                    </button>
                    <button class="btn btn-danger btn-sm">
                        <span>Delete</span> <i class="nf nf-cod-trash"></i>
                    </button>
                </td>
            </tr>
        
        `;        
    };

    
    listUsers.innerHTML = template;
    listTasks.innerHTML = tasktemplate;

    
    
});


