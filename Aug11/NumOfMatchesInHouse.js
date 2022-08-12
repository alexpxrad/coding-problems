// Create a function that takes a number (step) as 
// an argument and returns the number of matchsticks in that step. 
// See step 1, 2 and 3 in the image above.

//matchhouse = x amount of matches
//number (argument )  => returns the number in same step





function matchHouses(step) {

    
   
    
    if (step == 0) {
        let numOfMatches = 0
        return numOfMatches
    }
    else {
        
        let numOfMatches = step * 6 - (step - 1)

        return numOfMatches
    }
	
}
        console.log(matchHouses(2))



        