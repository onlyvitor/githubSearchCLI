#!/usr/bin/env node

import { Command } from 'commander';
import { getUser } from './commands/search-user.js';

const cli = new Command();

cli
    .name('gitsearch')
    .description('Return a search from github api')
    .version('0.0.1')


cli
    .command("user <user>")
    .description("Return a user")
    .action(async (user)=>{
        const data = await getUser(user);
        console.log(data);
    })

cli.parse();