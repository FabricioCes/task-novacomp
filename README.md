# React Search Engine Application

You are implementing search/filter functionalities for an online shop application for your client. A colleague of yours has already implemented some of the functionalities requested by the client, but he is currently on holidays. You have to help finish the remaining functionalities, so the team meets the deadline.

This task uses **React Class Components** and **`enzyme` testing framework**.

## Introduction

The missing functionalities include:
* Checkbox fields that allow users to display or hide specific columns in the table of products.
* Filter fields that allow users to set a range on the items prices.
* If the user provides only the starting price, the product price should be inside the [startPrice, infinity] interval. However, if the user provides the ending price only, the interval should be [0, endPrice].
* Users should be able to see the filtered or searched products in a table.

## Problem Statement

Your task is to:

* Import products from the `products.json` inside `/src/assets/` folder, which will be used for the search/filter functionalities.
* Put the imported data in the `products` array in the `Search` component.
* Implement the toggle functionality by adding a handler to the checkbox change in the `ToggleColumns` component.
* Pass a column object to the `ProductList` and reflect the change in the checkbox appropriately (by displaying or hiding the column).
* Pass the filtered products to the `ProductList.js` component, so they get displayed in the table.
* Show each item from the passed prop in the table inside the `ProductList` component.
* Pass the `priceFrom` and the `priceTo` attributes to the `FilterForm` component as props.
* Implement the change input and submit the form handlers to the `FilterForm` component.
* Change the filtered products that are displayed in the `ProductList`, so that it only contains the products with a price within the specified range.

Note that you're not allowed to change names or signatures of functions passed to components as properties.

For more details, please run the task on the Devskiller platform and see the failing tests.

### Make sure that all tests pass.

## Setup

Follow these steps if you are using zip/git mode (i.e. not available inside Devskiller in-browser IDE):

1. `npm install` – install dependencies
2. `npm test` – run all tests (this will be used to evaluate your solutions)
3. `npm run test:watch` – run all tests in _watch mode_ (alternative to `npm test` which you might find more convenient to use locally)
4. `npm start` – (optional) serve the application locally at [http://localhost:3000/](http://localhost:3000/) (it won't be used to evaluate your solutions)
5. `nvm install` - (optional) set up the expected _major_ version of Node.js locally ([`nvm`](https://github.com/nvm-sh/nvm) required; Node.js version defined in `.nvmrc` file)

This application was generated using [Create React App](https://github.com/facebook/create-react-app). It has all the standard setups.

**Good Luck!**
