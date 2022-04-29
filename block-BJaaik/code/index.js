class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat() {
        console.log('eat method')
    }
    sleep() {
        console.log('sleep method')
    }
    walk() {
        console.log('walk method')
    }
}

class Player extends Person {
    constructor(name, age, gender, sportsName) {
        super(name, age, gender);
        this.sportsName = sportsName;
    }
    play() {
        console.log('play method')
    }
}

class Teacher extends Person {
    constructor(name, age, gender, instituteName) {
        super(name, age, gender);
        this.instituteName = instituteName;
    }
    teach() {
        console.log('teach method')
    }
}

class Artist extends Person {
    constructor(name, age, gender, kind) {
        super(name, age, gender);
        this.kind = kind;
    }
    createArt() {
        console.log('create art method')
    }
}

class Cricketer extends Player {
    constructor(name, age, gender, sportsName, teamName) {
        super(name, age, gender, sportsName);
        this.teamName = teamName;
    }
    playCricket() {
        console.log('play cricket method')
    }
}