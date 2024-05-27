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

