import api from '../services/api.js';
import loadProfile from '../services/load-profile.js';
import createChoice from '../services/create-choice.js';
import findById from '../services/find-by-id.js';
import scoreQuest from './score-quest.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = api.getQuest(questId);

if(!quest) {
    window.location = 'map.html';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

title.textContent = quest.title;
image.src = 'assets/quests/' + quest.id + '.jpg';
description.textContent = quest.description;

for(let index = 0; index < quest.choices.length; index++) {
    const choice = quest.choices[index];
    const questions = createChoice(choice);
    choiceForm.appendChild(questions);
}

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    const choice = findById(quest.choices, choiceId);

    const user = api.getUser();
    scoreQuest(choice, quest.id, user);
    api.saveUser(user);
    
    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;

    loadProfile();
});

