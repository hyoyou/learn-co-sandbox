// const pbj = {
//   name: 'PB&J',
//   bread: 'white',
//   ingredients: ['Peanut Butter', 'Jelly'],
//   cut: 'Triangles'
// }

function serve() {
  // first check the # of arguments - an object that JS provides within a function that contains all of the arguments passed to that function
  if (arguments.length > 0) {
    // arguments is not a true array, but an array-like object. use slice() to convert an array-like object to an array of that object's values
    // use call to borrow the slice function from Array
    const customers = Array.prototype.slice.call(arguments);
    
    last = customers.pop();
    
    console.log(`${this.name} for ${customers.join(', ')} and ${last}. Enjoy!`);
  } else {
    // if function serve() is called without any arguments, it will log out name of food
    console.log(`${this.name}. Order up!`);
  }
}