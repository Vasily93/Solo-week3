import createCompletedQuest from '../src/services/create-completed-quest.js';

const test = QUnit.test;

QUnit.module('create quest link');

test('creates correct html', (assert) => {
    const quest = {
        id: 'trashcan',
        title: 'City Trashcan',
        map: {
            top:'60%',
            right: '60%'
        }
    };

    const expected = '<span class="quest completed" style="top: 60%; right: 60%;">City Trashcan</span>';
    
    const dom = createCompletedQuest(quest);

    assert.equal(dom.outerHTML, expected);

});