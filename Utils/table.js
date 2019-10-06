const Column = require('./column');

module.exports = class Table{

    constructor(name){
        this.name = name;
        this.columns = [];
    }

    addColumn(column){
        this.columns.push(column);
        return column;
    }

    increments(name){
        return this.unsignedInteger(name, true);
    }

    integerIncrements(name){
        return this.unsignedInteger(name, true);
    }

    tinyIncrements(name){
        return this.unsignedTinyInteger(name, true);
    }

    smallIncrements(name){
        return this.unsignedSmallInteger(name, true);
    }

    mediumIncrements(name){
        return this.unsignedMediumInteger(name, true);
    }

    bigIncrements(name){
        return this.unsignedBigInteger(name, true);
    }

    char(name, length = null){
        length = length ? length : 255;
        return this.addColumn(new Column({type: 'char', name: name, length: length}));
    }

    string(name, length = null){
        length = length ? length : 255;
        return this.addColumn(new Column({type: 'string', name: name, length: length}));
    }

    text(name){
        return this.addColumn(new Column({type: 'text', name: name}));
    }

    mediumText(name){
        return this.addColumn(new Column({type: 'mediumText', name: name}));
    }

    longText(name){
        return this.addColumn(new Column({type: 'longText', name: name}));
    }

    integer(name, autoIncrement = false, unsigned = false){
        return this.addColumn(new Column({type: 'integer', name: name, autoIncrement: autoIncrement, unsigned: unsigned}));
    }

    tinyInteger(name, autoIncrement = false, unsigned = false){
        return this.addColumn(new Column({type: 'tinyInteger', name: name, autoIncrement: autoIncrement, unsigned: unsigned}));
    }

    smallInteger(name, autoIncrement = false, unsigned = false){
        return this.addColumn(new Column({type: 'smallInteger', name: name, autoIncrement: autoIncrement, unsigned: unsigned}));
    }

    mediumInteger(name, autoIncrement = false, unsigned = false){
        return this.addColumn(new Column({type: 'mediumInteger', name: name, autoIncrement: autoIncrement, unsigned: unsigned}));
    }

    bigInteger(name, autoIncrement = false, unsigned = false){
        return this.addColumn(new Column({type: 'bigInteger', name: name, autoIncrement: autoIncrement, unsigned: unsigned}));
    }

    unsignedInteger(name, autoIncrement = false){
        return this.integer(name, autoIncrement, true);
    }

    unsignedSmallInteger(name, autoIncrement = false){
        return this.smallInteger(name, autoIncrement, true);
    }

    unsignedMediumInteger(name, autoIncrement = false){
        return this.mediumInteger(name, autoIncrement, true);
    }

    unsignedBigInteger(name, autoIncrement = false){
        return this.bigInteger(name, autoIncrement, true);
    }

    unsignedTinyInteger(name, autoIncrement = false){
        return this.tinyInteger(name, autoIncrement, true);
    }

    float(name, total = 8, places = 2){
        return this.addColumn(new Column({type: 'float', name: name, total: total, places: places}));
    }

    double(name, total = null, places = null){
        return this.addColumn(new Column({type: 'double', name: name, total: total, places: places}));
    }

    decimal(name, total = 8, places = 2){
        return this.addColumn(new Column({type: 'decimal', name: name, total: total, places: places}));
    }

    unsignedDecimal(name, total = 8, places = 2){
        return this.addColumn(new Column({type: 'decimal', name: name, total: total, places: places, unsigned: true}));
    }

    boolean(name){
        return this.addColumn(new Column({type: 'boolean', name: name}));
    }

    enum(name, allowed){
        return this.addColumn(new Column({type: 'enum', name: name, allowed: allowed}));
    }

    set(name, allowed){
        return this.addColumn(new Column({type: 'set', name: name, allowed: allowed}));
    }

    json(name){
        return this.addColumn(new Column({type: 'json', name: name}));
    }

    jsonb(name){
        return this.addColumn(new Column({type: 'jsonb', name: name}));
    }

    dateTime(name, precision = 0){
        return this.addColumn(new Column({type: 'dateTime', name: name, precision: precision}));
    }

    dateTimeTz(name, precision = 0){
        return this.addColumn(new Column({type: 'dateTimeTz', name: name, precision: precision}));
    }

    time(name, precision = 0){
        return this.addColumn(new Column({type: 'time', name: name, precision: precision}));
    }

    timeTz(name, precision = 0){
        return this.addColumn(new Column({type: 'timeTz', name: name, precision: precision}));
    }

    timestamp(name, precision = 0){
        return this.addColumn(new Column({type: 'timestamp', name: name, precision: precision}));
    }

    timestampTz(name, precision = 0){
        return this.addColumn(new Column({type: 'timestampTz', name: name, precision: precision}));
    }

    timestamps(precision = 0){
        this.timestamp('created_at', precision).nullable();
        this.timestamp('updated_at', precision).nullable();
    }

}