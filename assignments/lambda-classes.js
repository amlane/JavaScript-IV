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
    theWheelOfFortune(student){
        student.grade += Math.ceil(Math.random() * 11);
        return `${student.name} has ${student.grade}%`
    }
    
}

class Student extends Person {
    constructor(studentAtts){
        super(studentAtts);
        this.previousBackground = studentAtts.previousBackground;
        this.className = studentAtts.className;
        this.favSubjects = studentAtts.favSubjects;
        this.listsSubjects = studentAtts.listsSubjects;
        this.grade = studentAtts.grade;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
    tellGrade() {
        return `${this.name} has ${this.grade}%`
    }
}

class ProjectManager extends Instructor{
    constructor(mentor){
        super(mentor);
        this.gradClassName = mentor.gradClassName;
        this.favInstructor = mentor.favInstructor;
        this.standUp = mentor.standUp;
        }
      debugsCode(student, subject){
          return `${this.name} debugs ${student.name}'s code on ${subject}.`
      }
} 

const ross = new Person({
    name: 'Ross',
    location: 'New York City',
    age: 30,
    gender: 'M',
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `Hey`
});

const rachel = new Person({
    name: 'Rachel',
    location: 'NYC',
    age: 32,
    gender: 'F',
    favLanguage: 'CSS',
    specialty: 'Full Stack',
    catchPhrase: `Closure! That's what I need!`
});

const chandler = new Person({
    name: 'Chandler',
    location: 'New York, NY',
    age: 27,
    gender: 'M',
    favLanguage: 'React',
    specialty: 'Front-end',
    catchPhrase: `Could I BE coding any more?`
});

const blossom = new Instructor({
    name: 'Blossom',
    location: 'New England',
    age: 37,
    gender: 'F',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Rollin with the homies`
});

const bubbles = new Instructor({
    name: 'Bubbles',
    location: 'Lake of the Ozarks',
    age: 32,
    gender: 'F',
    favLanguage: 'Python',
    specialty: 'Network Security',
    catchPhrase: `I'm the sweet one!`
});

const buttercup = new Instructor({
    name: 'Buttercup',
    location: 'Oklahoma',
    age: 25,
    gender: 'M',
    favLanguage: 'Ruby',
    specialty: 'Back-end',
    catchPhrase: `None of this gray matters`
});

const april = new Student({
    name: 'April',
    location: 'Indiana',
    age: 20,
    gender: 'F',
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: `Blood orphans`,
    grade: 40
});

const andy = new Student({
    name: 'Andy',
    location: 'Eagleton',
    age: 25,
    gender: 'M',
    favLanguage: 'Python',
    specialty: 'Network Security',
    catchPhrase: `Woah that's awesome!`,
    grade: 65
});

const leslie = new Student({
    name: 'Leslie',
    location: 'Pawnee',
    age: 35,
    gender: 'F',
    favLanguage: 'Ruby',
    specialty: 'Back-end',
    catchPhrase: `Let's go team!`,
    grade: 55
});

const alvin = new ProjectManager({
    name: 'Alvin',
    location: 'Kansas City, MO',
    age: 24,
    gender: 'M',
    favLanguage: 'Django',
    specialty: 'Front-end',
    catchPhrase: `Alvin!!`
});

const simon = new ProjectManager({
    name: 'Simon',
    location: 'Denver, CO',
    age: 22,
    gender: 'M',
    favLanguage: 'Markdown',
    specialty: 'Network Security',
    catchPhrase: `I'm Simon!`
});

const theodore = new ProjectManager({
    name: 'Theodore',
    location: 'Chicago, Il',
    age: 45,
    gender: 'M',
    favLanguage: 'C#',
    specialty: 'Back-end',
    catchPhrase: `Let's read books!`
});


console.log(chandler.speak());
console.log(blossom.speak());
console.log(buttercup.demo("Javascript Fundamentals"));
console.log(bubbles.grade(blossom, "Preprocessors"));
console.log(april.PRAssignment("React"));
console.log(andy.sprintChallenge("Responsive Design"));
console.log(theodore.debugsCode(andy, "Semantic HTML"));
console.log(andy.tellGrade());
console.log(leslie.tellGrade());
console.log(blossom.theWheelOfFortune(andy));
console.log(alvin.theWheelOfFortune(leslie));

