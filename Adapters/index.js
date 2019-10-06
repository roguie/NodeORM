/*
*   Attempt to return adapter based on selected DB Drive
*/

try{
    module.exports = require(`./${process.env.DB_DRIVER}`);
}catch(e){
    console.error(e);
    throw new Error("Please define a database driver in your environment.");
}