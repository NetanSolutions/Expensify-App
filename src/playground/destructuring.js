// Object destructuring
// const person = {
//     name: 'Paul',
//     age: 46,
//     location: {
//         city: 'London',
//         temp: 5
//     }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`)


// const { temp: temperature, city } = person.location
// if (temperature && city) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

// Array destructuring

const address = ['16 Lebanon Road', 'Croydon', 'Surrey', 'CR0 6UR']

const [, city = 'London', county = 'NA'] = address
console.log(`You are in ${city} ${county}`)

const item = ['Coffee (hot)', '£2.00', '£2.50', '£3.00' ]

const [coffee, , medium] = item
console.log(`A medium ${coffee} costs ${medium}`)