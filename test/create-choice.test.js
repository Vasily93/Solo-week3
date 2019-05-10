import api from '../src/services/api.js';
import createChoice from '../src/services/create-choice.js';

const test = QUnit.test;

QUnit.module('create-choice');

api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('createChoice returns DOM elements', (assert) => {
    const choice = {
        id: 'park',
        description: 'city park with people and pets'
    };
    const expected = '<div><label>city park with people and pets</label><input type="radio" value"park" id="park" name="radioButtons"></div>;
    const result = createChoice(choice);
    assert.equal(result.outerHTML, expected);
})
