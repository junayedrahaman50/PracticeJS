// ForEach Exercise
Array.prototype.myForEach = function(func) {
    for(var i=0; i<this.length; i++){
        func(this[i]);
    }
    
}

var friends = ["Jim", "Emmanuel", "Jake", "Stephen"];
friends.myForEach(function(friend){
    alert("I Love " + friend);
});

var colors = ['red', 'green', 'blue'];
colors.forEach(function(color){
    alert("My colors are: " + color);
});

function myFunction(arr, func){
    for(var i=0; i<arr.length; i++){
        func(arr[i]);
    }
}

var cars = ['Toyota', 'Honda', 'Nissan', 'Suzuki'];
myFunction(cars, function(car){
alert("Car brands available are -- " + car);
});
