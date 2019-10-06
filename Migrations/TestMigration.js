const Schema = require('../Utils/schema');

module.exports = class TestMigration {

    constructor(){
        this.schema = new Schema();
    }

    up(){
        this.schema.create('test', (table) => {

            table.increments('id');
            table.timestamps();
            table.string('test', 50);

            console.log(table);

        });
    }

    down(){

    }

};