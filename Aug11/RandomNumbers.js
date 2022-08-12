

//Write a function dice that returns like a dice a random number between 1 and 6.


function dice(min, max) {

    let min = 1
    let max = 6

    return Math.floor(Math.random() * (max - min + 1)) + min
  };
