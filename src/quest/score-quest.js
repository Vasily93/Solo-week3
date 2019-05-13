function scoreQuest(choice, questId, user) {
    user.life += choice.life;
    user.food += choice.food;
    user.completed[questId] = true;
}

export default scoreQuest;