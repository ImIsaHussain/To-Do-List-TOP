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

const addTodo = () => {
    const { addTodoButton } = cacheDOM();

    addTodoButton.addEventListener('click', () => {
        const newTodo = prompt('Enter a new todo');
        return newTodo;
    });
};

document.addEventListener('DOMContentLoaded', () => {    
    addTodo();
});