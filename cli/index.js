#! /usr/bin/env node

const program = require('commander');

// Require Handlers
const model = require('./Commands/model');
const migration = require('./Commands/migration');

program
    .command('make:model <name>')
    .option('-m, --migration', 'Generate matching migration')
    .action(model);

program
    .command('make:migration <name>')
    .option('-m, --model <model>', 'Prefills model information')
    .action(model);

program.parse(process.argv);
