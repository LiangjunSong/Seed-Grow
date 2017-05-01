var jsonfile = require('jsonfile');

file ='~/.seedgrowconfig.json'
obj = {
  'username': 'liangjunsong'
}

jsonfile.writeFile(file, obj, function (err) {
  console.error(err)
})