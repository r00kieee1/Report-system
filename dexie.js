var db = new Dexie("StudentDatabase");

    // DB with single table "students" with primary key "id" and
    // indexes on properties "name" and "age"
    db.version(1).stores({
      students: `
        class,
        name,
        `,
    });


//     db.version(1).stores({
//         students: 'class, name', // Define your object store and its properties
//       }).upgrade(async (trans) => {
//         // Create an index on the 'name' property
//         await trans.table('students').createIndex('name', 'name', { unique: true });
      
//         // Create an index on the 'email' property with a unique constraint
//         await trans.table('students').createIndex('class', 'class', { unique: false });
//     });

//     // Query using the 'name' index
// const result = await db.students.where('name').equals(lis).toArray();

// // Query using the 'email' index
// const user = await db.students.where('class').equals(listUl).first();


//     // Now add some values.
//     db.students.bulkPut([
//       { class: listUl, name: lis, },

//     ]).then(() => {

//       return db.students.where("age").between(0, 25).toArray();

//     }).then(students => {

//       alert("Found young students: " +
//         students.map(friend => friend.name));

//       return db.students
//         .orderBy("age")
//         .reverse()
//         .toArray();

//     }).then(students => {

//       alert("students in reverse age order: " +
//         students.map(friend => `${friend.name} ${friend.age}`));

//       return db.students.where('name').startsWith("S").keys();

//     }).then(friendNames => {

//       alert("students on 'S': " + friendNames);

//     }).catch(err => {

//       alert("Ouch... " + err);

//     });

    // const db = new Dexie('StudentDatabase'); // Replace with your actual database name

// Use the `open()` method to open the database.
db.open().then(() => {
    // Database opened successfully
    console.log(`Database ${db.name} opened. Version: ${db.verno}`);
}).catch((error) => {
    // Error opening the database
    console.error(`Error opening database: ${error}`);
});
