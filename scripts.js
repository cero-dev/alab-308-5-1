// part one

function arraySum(givenArray) {
    let sum = 0;
    givenArray.forEach(element => {
        sum = element + sum;
    });

    return sum;
}

function arrayAverage(givenArray) {
    let sum = arraySum(givenArray);

    return sum / givenArray.length;
}

function longestString(givenArray) {
    let longest = "";

    givenArray.forEach(element => {
        if (longest.length < element.length) {
            longest = element;
        }
    });

    return longest;
}

function stringsLongerThan(givenArray, givenNumber) {
    let strings = []
    givenArray.forEach(element => {
        if (element.length > givenNumber) {
            strings.push(element);
        }
    });

    return strings;
}

function recursivePrintNumbers(givenNumber) {
    if (givenNumber === 1) {
        console.log(1)
        return;
    } else {
        console.log(givenNumber)
        return recursivePrintNumbers(givenNumber - 1);
    }
}
console.log(arraySum([1, 2, 3, 4]));
console.log(arrayAverage([1, 2, 3, 4]))
console.log(longestString(['red', 'yellow', 'blue', 'green']))
console.log(stringsLongerThan(['hello', 'how', 'are', 'you', 'person'], 4));
recursivePrintNumbers(10);

// part two

givenArray = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

console.log(JSON.stringify(givenArray.sort((a, b) => a.age - b.age)));
console.log(JSON.stringify(givenArray.filter((a) => a.age > 50)))

givenArray.forEach(obj => {
    obj.job = obj.occupation;
    delete obj.occupation;
    obj.age = Number(obj.age) + 1;
});

console.log(JSON.stringify(givenArray));

let sumOfAges = 0;
givenArray.forEach(obj => {
    sumOfAges = obj.age + sumOfAges;
});

console.log(`sum of ages: ${sumOfAges}`);
console.log(`average age: ${sumOfAges / givenArray.length}`)

// part three
function incrementAge(obj) {
    obj.age = Number(obj.age) + 1;
}

function incrementAgeTwo(obj) {
    let objCopy = obj;

    objCopy.age = Number(objCopy.age) + 1;
    return objCopy;
}
let testingObject = { id: "42", name: "Bruce", occupation: "Knight", age: "41" }



incrementAge(testingObject);
console.log(testingObject);
testingObject = incrementAgeTwo(testingObject);
console.log(testingObject);