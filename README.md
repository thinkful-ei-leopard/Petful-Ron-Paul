# DSA-Petful
For EI petful project - React, Node, DSA
### DO BRANCHES


## User Story 1
### Landing Page
* when you go the '/' (FRONTEND) endpoint (landing page): 
* GET a description of the adoption process: text explaination of how this process works
* a meaningful picture related to the description
* needs a "Start Adoption" button that starts the adoption process
    * takes you to the endpoint for the adoption page

## User Story 2
### Adoption Page
* When I visit the adoption page, I can only see the 
pet that is next in line to be adopted.
    * An image of the pet
    * A physical description of the pet
    * The pet's name, gender, age, and breed
    * A story of the pet's journey to the shelter


## User Story 3
### Adoption Page
* When I visit the adoption page, I can only see the 
pet that is next in line to be adopted.

## User Story 4
### Adoption Page
* I can see a list of other people currently in line.
* I can submit my name and be added to the end of the line.
* When I am not at the beginning of the line, I cannot see an option to adopt a pet.
* For demo purposes: Once I join the line, I can see other pets being adopted until I am at the front of the line.
    * Every five seconds, the user at the front of the line should be removed from the line and one of the pets up for adoption should disappear.
    * When I am at the front of the line, a new user should be added to the line behind me every five seconds until there are a total of five users in line.

## User Story 5
### Adoption Page
* I can see an option to adopt a pet.
* When I choose to adopt a pet: 
    * I see a confirmation that I have adopted the pet.
    * I see my name removed from the line.
    * I see the pet I adopted is removed from view and replaced with another pet.

Other requirements
Use a Queue data structure that is implemented with either a singly linked list or doubly linked list.
Deploy your client using Zeit
Deploy your server using Heroku
Test the functionality of your code often! Make incremental changes and see that they're working in the browser before you move on.
Apply the same approach to accessibility. Resolve any accessibility warnings your linter generates, and run aXe when you write new markup and styles.
