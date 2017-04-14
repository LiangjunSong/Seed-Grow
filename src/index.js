#!/usr/bin/env node
var fetchRepos = require('./fetch');
var program = require('commander');
var jsonfile = require('jsonfile');
var fs = require('fs');
var dl = require('./dl');

var username = '';
if (fs.existsSync('./config.json')) {
    username = require('./config').username;
}

program
  .version(require('../package').version)
  .usage('[options] [keywords]')
  .option('-i, --init [username]', 'Config with github user name')
  .option('-l, --list', 'List available seeds')
  .parse(process.argv);

if (program.init)
    jsonfile.writeFile(`${__dirname}/config.json`, {'username':program.init})
else if (program.list) 
    fetchRepos(username,(err,body)=>{
        var re = new RegExp('-seed$');
        body = JSON.parse(body);
        body.forEach(function(repo) {
            if (repo.name.match(re))
                console.log(repo.name)
        }, this);
    });
else{ 
    repo = program.args[0];
    dir = program.args[1];
    fs.mkdirSync(`${__dirname}/${dir}`);
    dl(username,repo,`${__dirname}/${dir}`);
}