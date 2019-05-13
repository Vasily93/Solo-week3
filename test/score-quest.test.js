import scoreQuest from '../src/quest/score-quest.js';
const test = QUnit.test;

QUnit.module('score quest');

test('creates correst html', (assert) => {
    const questId = 'park';
    
    const choice = {
        life: 20,
        food: -14
    };

    const user = {
        life: 30,
        food: 20,
        completed: {}
    };

    const expected = {
        life:50,
        food: 6,
        completed: {
            park: true
        }
    };

    scoreQuest(choice, questId, user);
    assert.deepEqual(user, expected);
    
});
