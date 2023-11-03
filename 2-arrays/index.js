/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */




/**
 * Question 5 - concat two different arrays by using .concat() method
 * 
 *  
 */
/**
 * initialize the variable called "movie" to an array containing the values popcorn, butter, pop
 * initialize the variable called "playground" to an array containing the values swing, seesaw, slide
 * 
 * initialize a variable called fun and combine the two arrays together using the concat method
 * 
 * consolelog fun
 * 
 * write a single line comment
 */

var movie = ["popcorn", "butter", "pop"]
var playground = ["swing","seesaw","slide"]

var fun = movie.concat(playground);

console.log(fun); //[ 'popcorn', 'butter', 'pop', 'swing', 'seesaw', 'slide' ]






/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * 
 *  innitialize a variable called groceries containing the values below:
 * 
 *            column[0]      column[1]      column[2]      column[3]
 * veggies     corn           potatoe        beans          broccoli
 * fruits      banana         strawberry     orange         grape
 * 
 * Then based on the values stored in the schedule 2D array, console log out the following sentence (using concentation)
 * 
 * i like _grapes_ and _beans_
 */

var groceries = [
    veggies = ["corn", "potatoe", "beans", "broccoli"],
    fruits = ["banana", "strawberry", "orange", "grapes"]

]

console.log("i like " + groceries[1][3] + " and " + groceries[0][2]);