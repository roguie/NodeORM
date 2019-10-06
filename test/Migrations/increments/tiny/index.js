var expect = require('chai').expect;
var assert = require('assert');
var migration = require('./Migration');
var m = new migration();
var table = m.up();

describe('Migration', function(){

    describe('tinyIncrements', function(){

        it('Should contain 1 column with a tinyInteger auto increments', function(done){

            assert.equal(table.columns[0].type, 'tinyInteger');
            assert.equal(table.columns[0].autoIncrement, true);

            done();

        });

    });

});