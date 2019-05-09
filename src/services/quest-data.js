const park = {
    id: 'park',
    title: 'City Park',
    map: {
        top: '10%',
        right: '40%'
    },
    description: `
    You are at city central park. You are hungry and looking
    for food. People running around playing freesbe,
    picknicking and walking their dogs.
    `,
    choices: [{
        id:'talk',
        description:'Try talk to humans',
        result:`
        You can talk human lenguage!!! People gathering around
        to talk to you and take selfies. You go viral and become 
        famous. You have enougth food for next few centuryes
        `,
        life: 20,
        food: 100
    }, {
        id:'steal',
        description:'Steel food',
        result:`
        You seccesfuly steel a browny from a table, but it was
        with weed. You getting high and feel great, but soon you 
        getting even more hungry then before.
        `,
        life: 10,
        food: -10
    }, {
        id:'pretend',
        description:'Pretend to be dead',
        result:`
        Out of fear you pretending to be dead. You just lay there
        for couple hours and then fall asleep. A dog running by,
        and without hesitation swollows you all at once.
        `,
        life: -150,
        food: 0
    }]
};

const highway = {
    id: 'highway',
    title: 'Highway',
    map: {
        top: '45%',
        right: '20%'
    },
    description: `
    You standing on a side of highway and see on the other side 
    mention of thrown away food. You thinking about crossing the road.
    `,
    choices: [{
        id:'run',
        description:'Try to run across highway',
        result:`
        You run first few feet, but suddenly you getting hit by
        a school bus.
        `,
        life: -80,
        food: 0
    }, {
        id:'roll',
        description:'Roll across highway',
        result:`
        Oddly enough you slowly crossing highway without a scrach.
        You running to food and eat as much as you can.
        `,
        life: 0,
        food: 40
    }, {
        id:'wait',
        description:'Wait until dark',
        result:`
        You  just seat on side of the road waiting. Suddenly animal 
        emergency van pull over and pick you up.Thay drive you to 
        hospital and fix up all your little wounds and sraches,
        but no food were offered.
        `,
        life: 20,
        food: 0
    }]
};

const trashcan = {
    id: 'trachcan',
    title: 'City Trashcan',
    map: {
        top: '60%',
        right: '60%'
    },
    description: `
    You find yourself next to largest trashcan in the city. Among 
    city animals you heard legends about how rich it is. But something
    suspicious was in that trashcan. Too good to be true...
    `,
    choices: [{
        id:'jumpIn',
        description:'Jump in!',
        result:`
        You jump into trahscan and enjoy everything that's in there. But 
        suddenly lid drops and you got trapped. You getting drove out to
        landfield.
        `,
        life: -10,
        food: 40
    }, {
        id:'ask',
        description:'Ask nearby cat for help',
        result:`
        You ask homeless red cat for help, but he gets mad because it's actually 
        very small and angry lepricon! He beats you up, and you barely escape
        near death.
        `,
        life: -60,
        food: 0
    }, {
        id:'restaraunt',
        description:'Eat at nearby Restaraunt',
        result:`
        You decide that it's absolute madness to eat out of trashcan even for an animal.
        You have pride! You go to a restaraunt and demend the best dish of the day.
        Waiter brings you all kinds of food and a bill. You slowly eat everything to  
        single crumb and loudly screaming " Fire! Fire!" running out of there.
        `,
        life: 0,
        food: 50
    }]
};