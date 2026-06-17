#!/usr/bin/env node

import { Command } from 'commander';
import { getUser, getUserActivity } from './commands/search-user.js';

const cli = new Command();
const options = cli.opts();

cli
    .name('gitsearch')
    .description('Return a search from github api')
    .version('0.0.1')


cli
    .command("user <user>")
    .description("Return a user")
    .option("-A, --activity", "return the activity of specific user")
    .action(async (user, options) => {
        if (options.activity) {
            const activity = await getUserActivity(user);
            return console.log(activity);
        }

        const data = await getUser(user);
        return console.log(data);
    });

cli.parse();