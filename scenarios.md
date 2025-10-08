# Test Scenarios - Sauce Demo

## Authentication Scenarios

### TC-01: Successful Login with Standard User
**Given** I am on the login page
**When** I enter valid credentials (standard_user / secret_sauce)
**And** I click the login button
**Then** I should be redirected to the inventory page
**And** I should see the products list

### TC-02: Login Failure with Locked Out User
**Given** I am on the login page
**When** I enter locked_out_user credentials
**And** I click the login button
**Then** I should see an error message "Epic sadface: Sorry, this user has been locked out."
**And** I should remain on the login page

### TC-03: Login Failure with Invalid Credentials
**Given** I am on the login page
**When** I enter invalid credentials
**And** I click the login button
**Then** I should see an error message about invalid credentials
**And** I should remain on the login page

## Shopping Cart Scenarios

### TC-04: Add Single Product to Cart
**Given** I am logged in as standard_user
**When** I add a product to the cart
**Then** The cart badge should show "1"
**And** The product button should change to "Remove"

### TC-05: Add Multiple Products to Cart
**Given** I am logged in as standard_user
**When** I add 3 different products to the cart
**Then** The cart badge should show "3"
**And** All products should appear in the cart page

### TC-06: Remove Product from Cart
**Given** I am logged in and have a product in the cart
**When** I click the "Remove" button
**Then** The cart badge should disappear
**And** The button should change back to "Add to cart"

## Checkout Scenarios

### TC-07: Complete Checkout with Valid Information
**Given** I am logged in with products in the cart
**When** I proceed to checkout
**And** I fill in valid customer information
**And** I complete the purchase
**Then** I should see the order confirmation page
**And** I should see "Thank you for your order!" message

### TC-08: Checkout Validation - Missing First Name
**Given** I am on the checkout information page
**When** I leave the first name field empty
**And** I click continue
**Then** I should see an error "Error: First Name is required"

## Sorting & Filtering Scenarios

### TC-09: Sort Products by Price (Low to High)
**Given** I am on the inventory page
**When** I select "Price (low to high)" from the sort dropdown
**Then** Products should be displayed in ascending price order

### TC-10: Sort Products by Name (Z to A)
**Given** I am on the inventory page
**When** I select "Name (Z to A)" from the sort dropdown
**Then** Products should be displayed in reverse alphabetical order

## Navigation Scenarios

### TC-11: Logout Successfully
**Given** I am logged in
**When** I open the sidebar menu
**And** I click the logout link
**Then** I should be redirected to the login page
**And** I should not be able to access inventory without logging in again

### TC-12: Cart Persistence Across Pages
**Given** I am logged in with 2 products in the cart
**When** I navigate to different pages
**Then** The cart badge should consistently show "2"
**And** The cart contents should remain unchanged