function parseCSV(csvString) {
    // Split the CSV string into an array of rows
    const rows = csvString.trim().split('\n')

    // Extract the header row and create an object to store the column names
    const headers = rows[0].split(',')
    const headerObj = {}
    headers.forEach((header, i) => {
        headerObj[header] = i
    })

    // Create an array to store the data rows
    const data = []
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(',')
        const rowObj = {}
        headers.forEach((header, j) => {
            rowObj[header] = row[j]
        })
        data.push(rowObj)
    }

    return { headers: headerObj, data }
}

// Define a function to retrieve values from a specific column
function getColumnValues(data, columnName) {
    return data.map(row => row[columnName])
}

// Define a function to transform the data
function transformData(data, columnName) {
    const values = getColumnValues(data, columnName)
    const sum = values.reduce((acc, val) => acc + parseFloat(val), 0)
    const average = sum / values.length
    return average
}

// Define a function to write data to a new CSV file
function writeCSV(data, fileName) {
    // Implementation goes here
}

// Example usage
const csvString = `name,age,gender
John,25,male
Jane,30,female
Bob,35,male`

const { headers, data } = parseCSV(csvString)
console.log(headers) // { name: 0, age: 1, gender: 2 }
console.log(data) // [{ name: 'John', age: '25', gender: 'male' }, { name: 'Jane', age: '30', gender: 'female' }, { name: 'Bob', age: '35', gender: 'male' }]

const ageValues = getColumnValues(data, 'age')
console.log(ageValues) // ['25', '30', '35']

const averageAge = transformData(data, 'age')
console.log(averageAge) // 30

// Part 2: Expanding Functionality

function parseCSV(csvString) {
    const rows = csvString.trim().split('\n')
    const headers = rows[0].split(',')
    const numColumns = headers.length

    const data = []
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(',')
        const rowData = []
        for (let j = 0; j < numColumns; j++) {
            rowData.push(row[j])
        }
        data.push(rowData)
    }

    return { headers, data }
}

const { headers, data } = parseCSV(csvString)

console.log(headers) // ['ID', 'Name', 'Occupation', 'Age']
console.log(data)
/*
[
    ['42', 'Bruce', 'Knight', '41'],
    ['57', 'Bob', 'Fry Cook', '19'],
    ['63', 'Blaine', 'Quiz Master', '58'],
    ['98', 'Bill', 'Doctor\'s Assistant', '26']
]
*/

// Access a specific value
console.log(data[1][1]) // 'Bob'

// Iterate over the data
for (const row of data) {
    console.log(row.join(', '))
}
/*
42, Bruce, Knight, 41
57, Bob, Fry Cook, 19
63, Blaine, Quiz Master, 58
98, Bill, Doctor's Assistant, 26
*/


// Part 3: Transforming Data

function transformDataToObjects(data) {
    const objects = []

    for (let i = 1; i < data.length; i++) {
        const row = data[i]
        const obj = {}

        for (let j = 0; j < row.length; j++) {
            const key = data[0][j].toLowerCase()
            obj[key] = row[j]
        }

        objects.push(obj)
    }

    return objects
}

const { headers, data } = parseCSV(csvString)
const dataObjects = transformDataToObjects(data)

console.log(dataObjects)

[
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor's Assistant", age: "26" }
]

// Part 4: Sorting and Manipulating Data

let dataObjects = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor's Assistant", age: "26" }
];

// 1. Remove the last element from the sorted array
dataObjects.pop();

// 2. Insert the following object at index 1
dataObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// 3. Add the following object to the end of the array
dataObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(dataObjects);
/*
[
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
]
*/

// 4. Calculate the average age of the group
let totalAge = 0;
for (const obj of dataObjects) {
    totalAge += parseInt(obj.age);
}
const averageAge = totalAge / dataObjects.length;
console.log(`The average age of the group is: ${averageAge.toFixed(2)}`);
// The average age of the group is: 52.00