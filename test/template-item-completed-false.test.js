const test = QUnit.test;
QUnit.module('list item checked equals false');

function taskCompleted(todo) {
    return /*html*/ `
        <li>
            <input type="checkbox">${todo.task}
        </li>
    `;

}

test('list item checked equals false', (assert) => {
    // Arrange
    const todo = {
        task: 'Kettle Chips',
        completed: false
    };

    const expected = /*html*/ `
        <li>
            <input type="checkbox">Kettle Chips
        </li>
    `;

    // Act 
    const html = taskCompleted(todo);

    // Assert
    assert.htmlEqual(html, expected);
});