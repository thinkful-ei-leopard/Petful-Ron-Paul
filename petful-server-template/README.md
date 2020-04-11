# Petful Server


#### /api/people
- GET 
returns a JSON object with key "allPeople":['person name', 'person2 name', 'etc']

- POST
requires a string "name" to be sent in the POST request
returns back with the name of that you sent in.

#### /api/pets
- GET
Returns a JSON list of all pets. There are two keys "dogs" and "cats". The key's value is an array of objects - each object has all of the details of one pet.

- DELETE

#### /api/pets/dogs
- DELETE

#### /api/pets/cats
- DELETE