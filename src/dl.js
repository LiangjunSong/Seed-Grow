var download = require('download-git-repo');

var dlRepo = function(username,repo,path){
    download(`${username}/${repo}`, path, function (err) {
      console.log(err ? "Error" : "Bolierplate created")
    });
}

module.exports = dlRepo;