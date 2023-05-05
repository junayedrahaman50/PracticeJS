//  Objects are stored in key-value pairs
//  unlike arrays objects have no order
var Person = {
    name: 'Jade Williams',
    age: 32,
    profession: 'Photographer',
    education: 'MS',
    children: ["Harry", "Jane", "Nicole"],
    bestFriend: {
        name: "Samuel Jones",
        age: 34,
        education: 'MS',
        children: ["Aldrin"]
    },
    friends: []
}
// Retrieving Data:
console.log(Person["name"]);    // bracket notation
console.log(Person.education);  // dot notation

console.log(Person.bestFriend.name);
Person.children.forEach(function(child){
    console.log(child);
})
Person.friends.push("Eve Jones");
Person.friends.forEach(function(friend){
    console.log(friend);
})
console.log(Person);



