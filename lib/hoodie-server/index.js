var spawn = require('child_process').spawn;
var path  = require('path');

module.exports = {
  name: "hoodie-server",
  postprocessTree: function(name, tree) {
    if(this._serverRunning) {
      return;
    }

    this.startServer();

    return tree;
  },

  startServer: function() {
    console.log('Start hoodie server');
    var hoodie = path.resolve(path.join(this.project.root, 'hoodie'));

    var server = spawn('hoodie', ['start'], {
      cwd: hoodie
    });

    server.stdout.on('data', function(data) {
      console.log(data.toString());
    });

    server.stderr.on('data', function(data) {
      console.log(data.toString());
    });

    server.on('close', function(data) {
      this._serverRunning = false;
    }.bind(this));

    this._serverRunning = true;

    process.on('exit', function() {
      console.log('Stopping hoodie server');
      server.kill('SIGINT');
    }.bind(this));
  }
};
