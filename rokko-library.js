//Library of JavaScript functions with sample cases

//add total of multi-array objects to be used for billing
var cart = [
    ["shirt", {"quantity" : 3,"price" : 4.5} ],
    ["blouse", {"quantity" : 1,"price" : 5} ],
    ["socks", {"quantity" : 12,"price" : 1.75} ],
    ["watch", {"quantity" : 1,"price" : 13} ],
    ["shoes", {"quantity" : 2,"price" : 7.5} ],
    ["purse", {"quantity" : 2,"price" : 5.99} ],
    ["rings", {"quantity" : 3,"price" : 20.99} ],
    ["necklace", {"quantity" : 3,"price" : 24.99} ]
];
sumCart(cart) 

function sumCart(cart) {
    var sum = 0;
    for(var i = 0; i<cart.length; i++) {
        var storeObj = cart[i][1];
        sum += storeObj.quantity * storeObj.price;
    }
    return sum;
}


//Go through the data and determine if two objects contain the same data to check for objects that aren't unique but are duplicates
//for this to work the properties that exist in object 1 must exist and be equal to those in object 2
function compareObjects(obj1, obj2) {
  for(var key in obj1) {
      if(obj1[key] !== obj2[key]) {
          return false
      }
  }
  for(var key2 in obj2) {
      if(obj2[key2] !== obj1[key2]) {
          return false
      }
  }
  return true;
}



//check employee attendance for timesheet
var employeeCheck = [
    {
        "Hermione" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Harry" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Ron" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Luna" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];
employeePresent('Monday');


function employeePresent(day) {
  var presentEmployees = [];

  for (var i = 0; i < employeeCheck.length; i++) {
    var employeeObj = employeeCheck[i];

    for (var employeeName in employeeObj) {
      var attendances = employeeObj[employeeName];

      for (var j = 0; j < attendances.length; j++) {
        var attendance = attendances[j];

        for (var dayName in attendance) {
          if (dayName === day && attendance[dayName]){
            presentEmployees.push(employeeName);
          }
        }
      }
    }
  }
  return presentEmployees;
}

// Create defaults for object
//If user fails to put a name in, default to Dumbledoore.
//If someone fails to put an age in, default to 0.

userAccount("Sam", 12)
userAccount(15)    

function userAccount(name, age) {
  if (age === undefined) {
    if (typeof name === "string") {
      age = 0;
    } else {
      age = name;
      name = "Dumbledoore"
    }
  }
  return {name: name, age: age}
}


//this is a function takes a two-dimensional array and returns a flattened one-dimensional copy of the array
flatten([1,[2,3],4])   

function flatten(arr) {
  var flatArray = [];
  for (var i=0; i<arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (var j=0; j<arr[i].length; j++) {
        flatArray.push(arr[i][j]);
      }
    } else {
      flatArray.push(arr[i]);
    }
  }

  return flatArray;
}


//make a grid according to specifications needed
makeGrid(3,4);

function makeGrid(x, y) {
  var grid = [];
  for (var i=0; i<y; i++) {
    var row = [];
    for (var j=0; j<x; j++) {
      row.push(j+1);
    }
    grid.push(row);
  }

  return grid;
}

//remove extra columns from the grid
removeColumns([[1, 2, 3],
               [1, 2, 3],
               [1, 2, 3],
               [1, 2, 3]], 2);
               
function removeColumns(grid, count) {
  for (var i=0; i<grid.length; i++) {
    for (var j=0; j<count; j++) {
      grid[i].pop();
    }
  }
  return grid;
}

//A function that returns an object containing the count for each value in a string.
frequencyAnalysis('abca');

function frequencyAnalysis(str) {
  var countObj = {};

  for (var i=0; i<str.length; i++) {
    if (countObj[str[i]]) {
      countObj[str[i]]++;
    } else {
      countObj[str[i]] = 1;
    }
  }
    return countObj;
}
//return the average amount of each value in the string
function normalizedFrequency(str) {
  var countObj = frequencyAnalysis(str);
  var normalizedObj = {};

  for (var i=0; i<str.length; i++) {
    var char = str[i];
    if (!normalizedObj[char]) {
      normalizedObj[char] = countObj[char] / str.length;
    }
  }
  return normalizedObj;
}

//function to find will return the room number and its price of cheapest room available

findCheapestVacantRoom(["occupied", 820, "occupied", 700, 455, 722])

function findVacantRooms(arr){
	var vacantRooms = [];
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === "vacant"){
			vacantRooms.push(i);
		}
	}
	return vacantRooms;
}
function findCheapestVacantRoom(arr){
  var cheapest;
  var cheapestRoom = [];
  for(var index = 0; index < arr.length; index++){
    if(arr[index] !== "occupied"){
      if(cheapest === undefined || cheapest > arr[index]){
        cheapest = arr[index];
      }
    }
  }
  
  if(cheapest){
    cheapestRoom.push(arr.indexOf(cheapest), cheapest)
    return cheapestRoom;
  } else {
    return cheapestRoom;
  }
  
}
