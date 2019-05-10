import api from '../services/api.js';
import loadProfile from '../services/load-profile.js';
import createQuestLink from './create-quest-link.js';

loadProfile();

const quests = api.getQuests();

const nav = document.getElementById('quests');

for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    const link = createQuestLink(quest);
    nav.appendChild(link);
}
