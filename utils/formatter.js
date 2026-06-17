import chalk from "chalk";

export function formatUser(user){

    const name = chalk.bold.blue(user.name || "No name provided");
    const login = chalk.bold.green(`@${user.login}`);
    const bio = chalk.italic.yellow(user.bio || "No bio provided");
    const location = chalk.magenta(user.location || "No location provided");
    const followers = chalk.cyan(`Followers: ${user.followers}`);
    const following = chalk.cyan(`Following: ${user.following}`);
    const publicRepos = chalk.cyan(`Public Repos: ${user.public_repos}`);

    return `${name} (${login})\n${bio}\n${location}\n${followers} | ${following} | ${publicRepos}`;
}