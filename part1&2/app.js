// Part 1

let counter = 0;

function callMe() {
  counter += 1;
  console.log(counter);
  try {
    callMe();
  } catch (error) {
    console.log(`An error has occurred ${counter}`)
  }
}


callMe()



// Part 2

let testArray = [1,2,3,[[5,6,2,4],[6,8]]]

result = [1,2,3,5,6,2,4,6,8,5,6,2,4,6,8]


function flattenArray (array){
    result = []

    for (let i =0; i < array.length; i++){
        if(Array.isArray(array[i])){
           result = result.concat(flattenArray(array[i]))
        } else{
            result.push(array[i])
        }
    }

    return result

}


console.log(flattenArray(testArray))




