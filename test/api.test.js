import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.module('api');

api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('signUp set user and return getUser', (assert) => {
    const user = {
        animal: 'raccoon',
        name: 'vasily',
        life: 100,
        food: 0
    };

    api.signUp(user);
    const result = api.getUser();

    assert.deepEqual(result, user);
});