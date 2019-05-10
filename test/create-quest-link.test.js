import createQuestLink from '../src/map/create-quest-link.js';

const test = QUnit.test;

QUnit.module('create completed quest');

test('creates correct link html', (assert) => {
    const quest = {
        id: 'park',
        title: 'City Park',
        map: {
            top:'10%',
            right: '40%'
        }
    };

    const expected = '<a class="quest" href="quest.html?id=park" style="top: 10%; right: 40%;"></a>';

    const dom = createQuestLink(quest);

    assert.equal(dom.outerHTML, expected);

});