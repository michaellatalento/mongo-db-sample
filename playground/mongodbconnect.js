//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");
//Object ID constructor functions lets us make id's

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
    if (error){
        //return doesn;'t do anything.
        //it just prevents the execution of the next codes
        return console.log("Cannot connect to the MongoDB Server.");
    }
    console.log("Connected to MongoDB Server.")

    // db.collection("Todos").insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (error, result) => {
    //     if(error){
    //         return console.log("Unable to insert todo", error);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //CHALLENGE#63
    //Insert new doc to Users collection (name, age, location)
    // db.collection("Users").insertOne({
    //     name: "Andrew Mead",
    //     age: 19,
    //     location: "USA"
    // }, (error, result) => {
    //     if (error){
    //         return console.log("Unable to insert user credentials.");
    //     }

    //     //Object ID
    //     //_id is a 12-byte number
    //     //first 4 bytes are timestamp
    //     //second 3 bytes are machine identifiers
    //     //third 2 bytes are process ids
    //     //last 3 bytes are counters similar to mySQL

    //     //this gets the timestamp from the object id
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    //     //console.log(result.ops);
    // });

    //this closes the database.
    db.close();
});