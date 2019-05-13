import createChoice from '../src/services/create-choice.js';

const test = QUnit.test;

QUnit.module('create-choice');

test('createChoice returns DOM elements', (assert) => {
    const choice = {
        id: 'park',
        description: 'city park with people and pets'
    };

    const expected = '<label class="choice"><input type="radio" name="choice" value="park"><span>city park with people and pets</span></label>';

    const dom = createChoice(choice);

    assert.equal(dom.outerHTML, expected);
});