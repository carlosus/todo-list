import todoTemplate from '../src/todo-template.js';
const test = QUnit.test;

QUnit.module('todos template');

test('todos template', (assert) => {
    // Arrange
    const todo = {
        task: 'Kettle Chips',
        completed: true
    };

    const expected = /*html*/ `
        <li>
            <input type="checkbox" checked>Kettle Chips
        </li>
    `;

    // Act 
    const html = todoTemplate(todo);

    // Assert
    assert.htmlEqual(html, expected);
});