function scoreQuest(choice, user) {
    user.life += choice.life;
    user.food += choice.food;
}

export default scoreQuest;