var jsonfile = require('jsonfile');

file = __dirname + '/config.json'
obj = {
  'username': 'liangjunsong'
}

jsonfile.writeFile(file, obj, function (err) {
  console.error(err)
})