const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
    if (error){
        return console.log("Cannot connect to the MongoDB Server.");
    }
    console.log("Connected to MongoDB Server.")

    //putting a value in the find function filter the documents to only show the properties indicated in the find argument
    //db.collection("Todos").find({task: "buy groceries"}).toArray().then((docs) => {
    //db.collection("Todos").find({completed: true}).toArray().then((docs) => {
    // db.collection("Todos").find({
    //     _id: new ObjectID("5951e084075e2b9c39561eee")
    // }).toArray().then((docs) => {
    //     console.log("Todos: ");
    //     //prints all
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (error) => {
    //     console.log("Unable to find todos");
    // });

    // db.collection("Todos").find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (error) => {
    //     console.log("Unable to find todos");
    // });

    //CHALLENGE#65 
    db.collection("Users").find({name: "Michaella Talento"}).count().then((count) => {
        console.log(`User count with the name: ${count}`);
    }, (error) => {
        console.log("Unable to count");
    });
    //db.close();
}); 