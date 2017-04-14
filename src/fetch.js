var request = require('request');

var fetchRepos = function(username,cb){
    request({
        url: `https://api.github.com/users/${username}/repos`,
        headers: {
          'User-Agent': 'seedgrow cli'
        }
      }, (err,response,body)=>cb(err,body)
      );
}

module.exports = fetchRepos;