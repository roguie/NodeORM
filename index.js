const dotenv = require('dotenv');
dotenv.config();
console.log(`Driver: ${process.env.DB_DRIVER}`);
// const adapter = require('./Adapters');

// let db = new adapter();

// async function test(){
//     return await db.insert({model: {}, query: {query: "INSERT INTO test (name, age) VALUES (?, ?)", args: ["Lewis", 20]}});
// }

// test()
// .catch((err) => {
//     console.error(err);
// });


const migration = require('./Migrations/TestMigration');

let test = new migration();
test.up();