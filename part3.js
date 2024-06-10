const counter = document.querySelector(".counter");
const result = document.querySelector(".result");

let number = counter.innerText;

console.log(number);

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function printPrimeNumbersToNum(num) {
        for (let i = 2; i <= num; i++) {
            if (isPrime(i)) {
        
                let item = document.createElement("li");
                item.innerText = i;
                result.appendChild(item);
              
            }
          } 
//Sometimes 0 works sometimes it doesn't, it seems to be a race condition, ie which one will occur first, 10ms seems to be the right amount to give the page time to render

setTimeout(() =>{
alert("calculations complete")
},10)

//The race condition is more noticeable if you uncomment the timeout function above and run the one below while repeatedly refreshing the page in the browser
// setTimeout(() =>{
// setTimeout(() =>{
//     alert("Calculations complete")
// },0)
// } ,0);


}

printPrimeNumbersToNum(10000);
