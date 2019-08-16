'use strict';

class Animal {
    constructor(voice) {
        this.voice = voice || 'grunt'
    }

    speak() {
        display(this.voice)
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super('Meow')
        this.name = name
        this.color = color
    }
}

var fluffy = new Cat('Fluffy', 'White')

fluffy.speak()
display(fluffy.constructor)



/* function Animal(voice) {
    this.voice = voice || 'grunt'
}
Animal.prototype.speak = function () {
    display(this.voice)
}

function Cat(name, color) {
    Animal.call(this, 'Meow')
    this.name = name
    this.color = color
}
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat
var fluffy = new Cat('Fluffy', 'White')

// fluffy.speak()
display(fluffy.__proto__.__proto__) */



/* function Cat(name, color) {
    this.name = name
    this.color = color
}

Cat.prototype.age = 4

var fluffy = new Cat('Fluffy', 'White')
var muffin = new Cat('Muffin', 'Brown')

fluffy.age = 5

display(fluffy.age)
display(fluffy.__proto__.age)

// display(Object.keys(fluffy))
display(fluffy.hasOwnProperty('age')) */



/* function Cat(name, color) {
    this.name = name
    this.color = color
}
var fluffy = new Cat('Fluffy', 'White')
Cat.prototype.age = 3

display(Cat.prototype)
display(fluffy.__proto__)

var muffin = new Cat('Muffin', 'Brown')
display(muffin.__proto__) */


/* var myFunc = function () {}
display(myFunc.prototype)

var cat = {
    name: 'Fluffy'
}
//display(cat.prototype) //nothing shows up because objects do not have prototypes
display(cat.__proto__) //an object has a proto  */


/* var arr = ['red', 'blue', 'green']

Object.defineProperty(Array.prototype, 
    //using the array prototype allows me to use the property on all arrays
    'last', {
        get: function () {
            return this[this.length - 1]
        }
    })
var last = arr.last
display(arr.last) */