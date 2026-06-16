#!/usr/bin/env node

import { Command } from 'commander';

const cli = new Command();

cli
    .name('gitsearch')
    .description('Return a search from github api')
    .version('0.0.1')


cli
    .command("user")
    .description("Return a user")
    .action(()=>{
        console.log("garota isso é um teste");
    })

cli.parse();