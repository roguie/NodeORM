module.exports = class Column {

    constructor({type, name, autoIncrement = false, unsigned = false, nullable = false, precision = null, total = null, spaces = null, places = null}){

        this.type = type;
        this.name = name;
        this.autoIncrement = autoIncrement;
        this.isunsigned = unsigned;
        this.null = nullable;
        this.precision = precision;
        this.total = total;
        this.places = places;

    }

    nullable(n = true){
        this.null = n;
    }

    autoIncrements(n = true){
        this.autoIncrement = n;
    }

    unsigned(n = true){
        this.isunsigned = n;
    }

};