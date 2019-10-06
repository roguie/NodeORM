import {getTableName} from '../Utils/util';

export default class Model {

    constructor(){

        

    }

    static getTableName(){
        return getTableName(this.name);
    }



}