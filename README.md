# docker-node-mongo-base
Base container for nodejs and mongodb developement

**Just cd to the docker directory and run:**
`docker-compose build`
`docker-compose up`

**After the docker is up and running we should populate the database (TO-DO initialize db with some fancy bash)**

-from another terminal execute:
`docker exec -it mongo mongo`

-inside the mongo shell initialize a the stuff database:
`use stuff` (create database and use it)

-create the collection:
 `db.createCollection('stuffcollection')` (create the collection)
 
- finally populate collection:
`db.stuffcollection.insert(
   [
     { username: "User 1", says: "Hello, I am User 1!" },
     { username: "User 2", says: "Hello, I am User 2!" },
     { username: "User 3", says: "Hello, I am User 3!" },
   ]
)`

- make sure the items were added to the collection:
`db.stuffcollection.find()`

And you are good to go. 
Now just open http://localhost:8080/ from your browser.
