// CODE here for your Lambda Classes

class Person {
    constructor(user){
        this.name = user.name;
        this.age = user.age;
        this.location = user.location;
        this.gender = user.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(staff) {
        super(staff);
        this.specialty = staff.specialty;
        this.favLanguage = staff.favLanguage;
        this.catchPhrase = staff.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}!`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}!`
    }
}

// class GrandChild extends Child {
//     constructor(grandChildAttributes) {
//         super(grandChildAttributes);
//         this.food = grandChildAttributes.food;
//     }
//     eat() {
//         return `${this.newName} likes to eat ${this.food} after he plays with ${this.newToy}`;
//     }
// }





