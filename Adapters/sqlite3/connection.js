const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, 'game.db');

module.exports = class Connection {    

    constructor(){
        this.file = dbPath;
        this.conn = null;
        this.connected = false;
        this.connect();
    }

    /*
    *   Connect to the database and return that connection
    *   back to the object.
    */
    connect(){
        this.conn = new sqlite3.Database(this.file, (err) => {

            if(err){
                this.connected = false;
                throw new Error(`Unable to connect to database.\n${err.message}`);
            }
            this.connected = true;
            console.log("Connected to file based SQlite database.");
        
        });
    }

    /*
    *   Close the connection to the database and set connection
    *   to null
    */
    close(){
        this.conn.close();
        this.conn = null;
        this.connected = false;
    }

    /*
    *   Get DB connector
    */
    getConnection(){
        return this.conn;
    }

}