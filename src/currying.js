// currying is taking a function that would require multiple arguments
// and return a series of functions that take excatly one argument.


const dogs = [
  {
    name: 'max',
    weight: 10,
    breed: 'boston terrier',
    state: 'wisconsin',
    color: 'black'
  },
  {
    name: 'don',
    weight: 90,
    breed: 'labrador',
    state: 'kansas',
    color: 'black'
  },
  {
    name: 'max',
    weight: 40,
    breed: 'labrador',
    state: 'wisconsin',
    color: 'chocolate'
  }
]


// by currying the function, you can make it pass multiple 
// parameters at different points. You are also able to pass a function around as data.
const weightCheck = weight => dog => dog.weight < weight


// return the names of the dog which weigh less than 20 pounds
function getDogNames(dogs, filterFunc) {
  return dogs.filter(filterFunc).map(dog => dog.name)
}

getDogNames(dogs, weightCheck(20))