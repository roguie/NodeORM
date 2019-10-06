const Table = require('./table');

module.exports = class Schema {

    constructor(){
        
    }

    create(name, callback){
        this.table = new Table(name);
        callback(this.table);
        console.log(this.table);
    }

};