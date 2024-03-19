Feature: ecom regression

Scenario: ecom product delivery
Given Go to the website
When I select and add products into the cart
And find the total price
And find the subtotal
Then submit the order and verify the message


Scenario: Fill the customer details for ecom site
Given Go to the website
When I fill the customer details
And validate the data
Then I navigate to the shop link

Scenario: Fill the customer details for ecom site using BDD data table
Given Go to the website
When I fill the customer details using dataTable
|name|email        |password |gender|
|Saki|Saki@test.com|yahoo    |Female|
# And validate the data
Then I navigate to the shop link

Scenario: Fill the customer details for ecom site passing variable in function
Given Go to the website
When I fill the customer 'harry' 'harry@test.com' 'happydays' and 'Female' details
# And validate the data
Then I navigate to the shop link