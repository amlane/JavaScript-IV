/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject {
    constructor(obj){
        this.createdAt = obj.createdAt;
        this.name = obj.name;
        this.dimensions = obj.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

class CharacterStats extends GameObject {
    constructor(obj){
    super(obj);
    this.healthPoints = obj.healthPoints;
    }
    takeDamage() {
        return `${this.name} takes damage.`
    }
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

class Humanoid extends CharacterStats {
    constructor(obj){
        super(obj);
        this.team = obj.team;
        this.weapons = obj.weapons;
        this.language = obj.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`
    }
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// stretch constructors

class Villian extends Humanoid{
    constructor(obj) {
        super(obj);
        this.spell = obj.spell;
    }
    attack(human) {
        human.healthPoints -= 5;
        if (human.healthPoints > 0) {
            return `${this.name} attacks ${human.name} with ${this.spell}! \n ${human.takeDamage()} \n Health points: ${human.healthPoints}`;
        } else if (human.healthPoints <= 0) {
            return `${human.destroy()}`;
        }
}
}

class Hero extends Humanoid{
    constructor(obj){
        super(obj);
        this.spell = obj.spell;
    }
    protect(human) {
        return `${this.name} protects with ${this.spell} and saves ${human.name}!`;
    }
}



// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

const witch = new Villian({
    createdAt: new Date(),
    dimensions: {
        length: 7,
        width: 2,
        height: 8,
    },
    healthPoints: 20,
    name: 'Malificent',
    team: 'Slytherin',
    weapons: [
        'Knife',
        'Sarcasm',
    ],
    language: 'Demon',
    spell: 'Storm Curse'
});

const angel = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 5,
        width: 3,
        height: 5
    },
    healthPoints: 25,
    name: "Radha",
    team: "A-Team",
    weapons: ["Armor",
        "Clever"],
    language: "French",
    spell: "white light"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(witch.attack(archer));// villian uses spell to attack
console.log(angel.protect(archer)); //hero protects Humanoid from villian hit

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

