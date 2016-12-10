
var Human = {
    name: 'Johny',
    surname: 'Cash',
    age: 80,
    weight: 80,
    height: 1.8
}
console.log(Human);

var Worker = {
    job: "front-end junior",
    payment: 300,
};

Worker.doWork = function() {
    alert("okay okay! im working on it!")
};

Worker.__proto__ = Human;
console.log("worker name: ", Worker.name + ' ' + Worker.surname);

var action = prompt("Force worker to work? y/n");
if (action === "y") {
    Worker.doWork();
} else {
    console.log("maybe next time...");
}


var Student = {
    profile: "science",
    univer: "MIT",
    whatDo: function() {
        alert("It is the last episode and I'll study!");
    }
}

Student.__proto__ = Human;
console.log("Student weight: ", Student.weight);
console.log("Student height: ", Student.height);


var action = prompt("Force student to study? y/n");
if (action === "y") {
    Student.whatDo();
} else {
    console.log("maybe next time...");
}
