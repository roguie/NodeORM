const Schema = require('../../../../Utils/schema');

module.exports = class TestMigration {

    constructor(){
        this.schema = new Schema();
    }

    up(){
        return this.schema.create('test', (table) => {

            table.smallIncrements('id');

        });
    }

    down(){

    }

};