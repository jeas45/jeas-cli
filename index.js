#!/usr/bin/env node

const programme = require('commander') ;

programme
    .version('0.0.1')
    .description('Client management system') ;

programme
    .command('add <firstname> <lastname> ')
    .alias('a')
    .description('Add user')
    .action( (firstname,lastname ) => {
        console.log(firstname,lastname  ) ;
    })


programme.parse( process.argv ) ;
