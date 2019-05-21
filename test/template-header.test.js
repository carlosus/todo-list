import templateHeader from '../src/template-header.js';

const test = QUnit.test;
QUnit.module('header template');

test('header template', (assert) => {
    // Arrange
    const header = 'To Do List';

    const expected = /*html*/ `
    <header>
        <h1>To Do List</h1>
    </header>
`;

    // Act
    const html = templateHeader(header);

    // Assert
    assert.htmlEqual(html, expected);
});