# Coding Process Document
Documenting the problem solving strategy and the process.

## TASK 1: 
```
Create a React[^1] application that lists all users and their addresses provided by the users API of JSONPlaceholder[^2].
```
### Strategy
Created a customhook for getting fetched data from 
JSONPlaceholder API Link and then need to map for 
showing user's list and there addresses
### Process
- Created a custom hook named `useFetchHook` that can fetch API.
- Mapped data over a list card that can show `Name`, `Address` and `Zipcode`


## Task 2
```
Add at least one unit test for each of the components you created using Jest[^3]. More is better.
```
### Strategy
Adding test js files using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [jest](https://jestjs.io/)
### Process
- Target the specific component using `render()` by specifying the id or screen query of the component.
- Need to specify the expected value for the component being tested.
- Lastly, returns the status of component by `passed` or `failed`.

## TASK 3: 
```
Add the possibility to view the albums and the photos of a selected user.
```
### Strategy
Get multiple API datas by using with only one customHook that is `useFetchHook`

Have to Filter and Map with conditional rendering
### Process
- Used single customHook `useFetchHook` for fetching multiple API Datas
- Rendered and painted with array.Map method then the results are displyed are `UsersList` , `AlbumsList` and `PhotosList`
## Task 2 Continued
```
Add at least one unit test for each of the components you created using Jest[^3]. More is better.
```
### Strategy
Adding test js files using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [jest](https://jestjs.io/)
### Process
- Target the specific component using `render()` by adding specific component in render function
- Tested show `AlbumList` and `PhotoList` list datas
- Need to specify the expected value for the component being tested.
- Lastly, returns the status of component by `passed` or `failed`.
## TASK 4: 
```
Add at least one end-to-end for your application using cypress[^4]. More is better.
```
### Strategy
Adding and Installing Cypress files using [Cypress](https://jestjs.io/)

Access the Cypress by using respectable commands

Running project with using `cy.visit()` for Redirecting
to localhost server project
### Process
- Installed and Added the cypress using [Cypress](https://jestjs.io/) 
- Runned the project by using `cy.visit(https//:Localhost 3000)`
- Checked the all user experience functionality in that project 
