var myName = 'Cat';
const statesUSA = 50;
var addedNum = 5 + 4;
/* created  variables for my name, the sum of 5 +4 and the number of states in the USA */

function sayHello(greeting){
    alert(greeting)
}
sayHello(greeting ="Hello World!")


function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ", you are not old enough to view this page!");
    }
};

checkAge((name = "Charles"), 21);
checkAge((name = "Abby"), 27);
checkAge((name = "James"), 18);
checkAge((name = "John"), 17);

var favVeg = ['Carrots', 'Asparagus', 'Corn'];

for(var i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i]);
};

var friends = [ (Cat = {name: "Cat", age: 30}), (John = {name: "John", age: 29}), Mollie = {name: "Mollie", age: 19}, David = {name: 'David', age: 14}, Brad = {name: 'Brad', age: 30}]

for(var i = 0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age)
}

function getLength(word) {
    console.log(word.length)
        if (word.length%2 == 0) {
            console.log('The World is nice and even!')
} else { 
    console.log('The world is an odd place!')
    }
    
}
getLength(word = 'Hello World!')