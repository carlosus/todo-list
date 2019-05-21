import taskCompleted from './item-completed.js';
import htmlToDom from './html-to-dom.js';
import todos from './todos-data.js';
import templateHeader from '../src/template-header.js';

const list = document.getElementById('todo-list');
const header = document.getElementById('page-header');

// loop thru todo data
todos.forEach(todo => {
    // Convert image object to html using template
    const html = taskCompleted(todo);

    // Convert html to DOM using htmlToDOM
    const dom = htmlToDom(html);

    // Append to list parent 
    list.appendChild(dom);
});

const html = templateHeader();
const dom = htmlToDom(html);
header.appendChild(dom);
