const Connection = require('./connection');

module.exports = class Sqlite3Adapter {

    constructor(){

        this.db = new Connection();

    }

    insert({model, query}){

        console.log(model);
        console.log(query);

        return new Promise((resolve, reject) => {

            this.db.conn.run(query.query, query.args, (err) => {

                if(err){
                    reject(`Failed executing query. ${err.message}`);
                }

                console.info(`A new row has been inserted with the ID ${this.lastID}`);
                resolve({id: this.lastID, query: query, model: model});

            });

        });

    }

    create({migration}){

        return new Promise((resolve, reject) => {

            this.db.conn.run(`CREATE TABLE ${migration.getTableName()}(${migration.fields()})`, (err) => {

                if(err){
                    reject(`Failed executing query. ${err.message}`);
                }

                console.info(`A new table as been created with the name ${migration.getTableName()}`);
                resolve({migration: migration});

            });

        });

    }

};