import makeUser from '../src/home/make-user.js';
const test = QUnit.test;

QUnit.module('make user');

test('create user object from form data', (assert) => {
    const formData = new FormData();
    formData.set('animal', 'raccoon');
    formData.set('name', 'john');

    const expected = {
        animal: 'raccoon',
        name: 'john',
        life: 100,
        food: 0
    };

    const user = makeUser(formData);

    assert.deepEqual(user, expected);
});
