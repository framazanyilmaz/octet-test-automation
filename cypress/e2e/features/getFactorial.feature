@getFactorial
Feature: Calculate Factorial
  Scenario Outline: Should calculate positive integer
   Given I am on the home page
   Then Verify home page is opened "mainPageText","Factorial Calculator Extreme!"
   When User type integer "numberInput","<input>"
   When User clikcs button "calculateButton"
   Then Verify result message "result","<message>"
  
   
   Examples:
   |input|message|
   |0|The factorial|
   |2|The factorial| 

   Scenario Outline: Should not calculate negative integer, special char. and alphabetic char
   Given I am on the home page
   Then Verify home page is opened "mainPageText","Factorial Calculator Extreme!"
   When User type integer "numberInput","<input>"
   When User clikcs button "calculateButton"
   Then Verify result message "result","<message>"


   Examples:
   |input|message|
   |-1|Please enter an positive integer|
   |3/4|Please enter an integer| 
   |*|Please enter an integer|
   |test|Please enter an integer| 

  