// Create a script that uses module.exports to export a function.
// Create another script that uses require() to import the function and then calls it.

function Greet(message){
    console.log(`${message}`)
}

module.exports = Greet;
