'use strict';

/*//Getter and Setters
var cat = {
    name: {
        first: 'Fluffy',
        last: 'LaBeouf'
    },
    color: 'White'
}

Object.defineProperty(cat, 'fullName', {
    get: function () {
        return this.name.first + ' ' + this.name.last
    },
    set: function (value) {
        var nameParts = value.split(' ')
        this.name.first = nameParts[0]
        this.name.last = nameParts[1]
    }
})

cat.fullName = 'Muffin Top'
display(cat.fullName)
display(cat.name.first)
display(cat.name.last)
*/


/*//Configurable Attribute
var cat = {
    name: {
        first: 'Fluffy',
        last: 'LaBeouf'
    },
    color: 'White'
}

Object.defineProperty(cat, 'name', {
    configurable: false
})
// Object.defineProperty(cat, 'name', {
//     enumerable: false
// })

// delete cat.name
//End */



/*//Enumerable Attribute
var cat = {
    name: {
        first: 'Fluffy',
        last: 'LaBeouf'
    },
    color: 'White'
}

Object.defineProperty(cat, 'name', {
    enumerable: false
})

for (var propertyName in cat) {
    display(propertyName + ': ' + cat[propertyName])
}
//End */



/*//Writable Attribute
var cat = {
    name: {
        first: 'Fluffy',
        last: 'LaBeouf'
    },
    color: 'White'
}

Object.defineProperty(cat, 'name', {
    writable: false
})
Object.freeze(cat.name)
cat.name.first = 'Scratchy'
display(cat.name)
//End*/