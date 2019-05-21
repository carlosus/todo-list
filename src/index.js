import taskCompleted from './item-completed.js';
import htmlToDom from './html-to-dom.js';
import todos from './todos-data.js';

const list = document.getElementById('todo-list');

// loop thru todo data
todos.forEach(todo => {
    // Convert image object to html using template
    const html = taskCompleted(todo);

    // Convert html to DOM using htmlToDOM
    const dom = htmlToDom(html);

    // Append to list parent 
    list.appendChild(dom);
});
