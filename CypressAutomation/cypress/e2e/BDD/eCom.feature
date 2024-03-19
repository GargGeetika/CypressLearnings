Feature: ecom regression

Scenario: ecom product delivery
Given Go to the website
When I select and add products into the cart
#Then find the total price
Then find the subtotal
Then submit the order and verify the message


Scenario: Fill the customer details for ecom site
Given Go to the website
When I fill the customer details
Then validate the data
Then I navigate to the shop link