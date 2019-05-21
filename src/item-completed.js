function taskCompleted(todo) {
    let checked = '';

    if(todo.completed) {
        checked = 'checked';
    }

    return /*html*/`
        <li>
            <input type="checkbox" ${checked}>${todo.task}
        </li>
    `;
}

export default taskCompleted;