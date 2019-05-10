import api from '../src/services/api.js';
import questData from "../src/services/quest-data.js";
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

test('returns lists of quests', (assert) => {
    const expected = questData;
    const quests = api.getQuests();
    assert.deepEqual(quests, expected);
});

test('return quest by id', (assert) => {
    const expectedQuest = questData[1];
    const foundQuest = api.getQuest(expectedQuest.id);
    assert.deepEqual(foundQuest, expectedQuest);
})