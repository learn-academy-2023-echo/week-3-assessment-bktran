// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("toFibs", () => {
  it("Returns an array of input length containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(toFibs(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(toFibs(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
//--> ReferenceError: toFibs is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// declare function name toFibs with 1 number param
// declare a variable fibArr and assign it to [1, 1]
// declare a sum variable and assign to 1
// iterate with for loop starting at the second index 
// on each iteration, sum = prev index value + prev index minus 1 value
// push sum into fibArr
// return fibArr

const toFibs = (length) => {
  let fibArr = [1, 1]
  let sum = 1
  for (let i = 2; i < length; i++){
    sum = fibArr[i - 1] + fibArr[i - 2]
    fibArr[i] = sum
  }
  return fibArr
}
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("objToArrSorted", () => {
  it("returns an array of the values sorted from least to greatest.", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    // Expected output: [15, 15, 20, 30, 30, 60, 90]
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]
    expect(objToArrSorted(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(objToArrSorted(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})
//--> ReferenceError: objToArrSorted is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// declare function objToArrSorted with 1 obj param
// assign object values to a variable with Object.values()
// return sorted values with sort()

const objToArrSorted = (obj) => {
  let arrayOfValues = Object.values(obj)
  return arrayOfValues.sort((a, b) => a - b)
}
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accumulate", () => {
  it("Returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]
    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    const accountTransactions3 = []
    // Expected output: []
    expect(accumulate(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accumulate(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accumulate(accountTransactions3)).toEqual([])
  })
})
//--> ReferenceError: accumulate is not defined


// b) Create the function that makes the test pass.

// Pseudo code:
// declare function accumulate with one array param
// if array param === empty array
  // return empty array
// else 
  // make a new empty array
  // declare a sum variable = 0
  // iterate over array length with for loops
    // assign sum to equal index value
    // push sum to empty array
  //return "empty array"

const accumulate = (arr) => {
  if(arr === []){
    return []
  } else {
    let newArr = []
    let sum = 0
    for (let i = 0; i < arr.length; i++){
      sum += arr[i]
      newArr.push(sum)
    }
    return newArr
  }
}

