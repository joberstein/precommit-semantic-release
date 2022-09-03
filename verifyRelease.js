#!/usr/bin/env node

const { execSync } = require('child_process');

const [,, previousHash, currentHash] = process.argv;

const FILES = [
    '.pre-commit-hooks.yml',
    'package.json',
];

try {
    execSync(`git diff --quiet ${previousHash}..${currentHash} -- ${FILES.join(' ')}`);
} catch (e) {
    console.info('Continuing with the release because source code has changed.');
    return;
}

console.error('There are source code changes to deploy, but the commit history does not indicate a new release.');
process.exit(1);