// TODO: rename this file from '.txt' to '.js'
function isPalindrome(str) {
  // Your codes here.

    // First you need to check if the inputted value is a string or not  
      if(typeof str === 'string' || str instanceof String){
        // Second, you need to lowercase the inputted value   
        const palindromeStringChecker = str.toLowerCase()
        // Strip out non-alphanumeric characters
        .match(/[a-z0-9]/g)
        // Merging the String of the inputted value and passing it into variable

        if(palindromeStringChecker === null){
          //Outputing inputted value that is not a string
          console.log('The given value: ' + palindromeStringChecker + ' is not a string! The expected data type of the value is string')

        }else{
          var stringPalindrome = palindromeStringChecker.join('')
          // Merging the Reverse of the String of the inputted value and passing it into variable
          var reverseString = palindromeStringChecker.reverse().join('')

          // Checking if the inputted value is a palindrome
          if(stringPalindrome === reverseString){
            // Outputing inputted value that is a palindrome

            console.log('The given string ' + stringPalindrome + ' is an example of panlidrome, the reversed value is: ' + reverseString)

            return stringPalindrome
          
          }else{
            // Outputing inputted value that is not a palindrome
            console.log('The given string: ' + stringPalindrome + ' is not an example of palindrome')

            return stringPalindrome
          }
        }
          
      }else{
        //Outputing inputted value that is not a string
        console.log('The given value: ' + str + ' is not a string! The expected data type of the value is string')
      }
    
}
// Call the function and pass an argument.
isPalindrome('[][[][]')
