function todoTemplate(todo) {
    return /*html*/`
        <li>
            <input type="checkbox" checked>${todo.task}
        </li>
`;
}

export default todoTemplate;