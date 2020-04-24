var fs = require('fs');
var shell = require('shelljs');

var contents = fs.readFileSync('update.sh', 'utf8');
console.log(contents);

if (shell.exec(contents).code !== 0) {
  shell.echo('Error: Git commit failed');
  shell.exit(1);
}