// making a todo list app

// 1. add a new (todo / project) (input field, add button)
// 2. delete a (todo / project) (delete button)
// 3. complete a (todo / project) (checkbox, line-through, grayed out)
// 4. show all (todos / projects) (ul, li, class active then completed)
// 5. sort by urgency (projects) (ul, li, class high medium low)
// 6. show active (todos / projects) (ul, li, class active)
// 7. show completed (todos / projects) (ul, li, class completed)

// project / section (personal, team, school, work, etc.)

// nav bar on the side
// filer / search (today, week / upcoming, labels)
// tag items (existing tag, new tag) (home, fitness, appointments, groceries)
// urgency of items (high, medium, low)
// date / time on items (from - to time, complete before / on date)

import './reset.css';
import './styles.css';

const cacheDOM = () => {
    const addTodoButton = document.querySelector('.add-todo');

    return {
        addTodoButton,
    };
};

let todos = [];

const createTodoItem = () => {
    return {
        title: '',
        description: '',
        dueDate: '',
        priority: '',
        status: 'active',
    };
};

const addTodoPopup = () => {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <div class="popup-content">
            <h2>Add New Todo</h2>
            <input type="text" id="todo-title" placeholder="Title">
            <textarea id="todo-description" placeholder="Description"></textarea>
            <input type="date" id="todo-due-date">
            <select id="todo-priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button id="save-todo">Save</button>
            <button id="cancel-todo">Cancel</button>
        </div>
    `;
    document.body.appendChild(popup);

    return new Promise((resolve) => {
        document.getElementById('save-todo').addEventListener('click', () => {
            const newTodo = {
                title: document.getElementById('todo-title').value,
                description: document.getElementById('todo-description').value,
                dueDate: document.getElementById('todo-due-date').value,
                priority: document.getElementById('todo-priority').value,
                status: 'active'
            };
            document.body.removeChild(popup);
            resolve(newTodo);
        });

        document.getElementById('cancel-todo').addEventListener('click', () => {
            document.body.removeChild(popup);
            resolve(null);
        });
    });
};

const addTodo = () => {
    const addTodoButton = document.querySelector('.add-todo');

    addTodoButton.addEventListener('click', async () => {
        const newTodo = await addTodoPopup();
        if (newTodo) {
            const todoList = document.querySelector('.todo-list');
            const newTodoItem = document.createElement('li');
            newTodoItem.classList.add('todo-item');
            newTodoItem.innerHTML = `
                <input type="checkbox" class="todo-checkbox" id="todo-${todos.length + 1}">
                <span class="todo-text">${newTodo.title}</span>
                <span class="todo-priority">${newTodo.priority}</span>
                <span class="todo-due-date">${newTodo.dueDate}</span>
            `;
            todoList.appendChild(newTodoItem);
            todos.push(newTodo);
            console.log('New todo added:', newTodo);
            console.log('All todos:', todos);
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {    
    addTodo();  
});