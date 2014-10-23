/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import({
  development: 'bower_components/hoodie/dist/hoodie.js',
  production: 'bower_components/hoodie/dist/hoodie.min.js'
});

// Use vendor version instead of bower so we can make our custom modifications
app.import('vendor/ember-hoodie-adapter/ember-hoodie-adapter.js');

module.exports = app.toTree();
