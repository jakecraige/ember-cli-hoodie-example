import Ember from 'ember';

export default Ember.Object.extend({
  hasValidSession: false,

  initializeListeners: function() {
    Ember.run.next(this, function() {
      this._setSession();
    });

    var auth = this;

    hoodie.account.on('authenticated signin signup', function(user) {
      auth.set('hasValidSession', true);
      auth.set('user', user);
    });

    hoodie.account.on('unauthenticated', function(user) {
      auth.set('hasValidSession', false);
      auth.set('user', user);
    });
  }.on('init'),

  _setSession: function() {
    this.set('hasValidSession', hoodie.account.hasValidSession());
  },

  signIn: function(username, password) {
    return hoodie.account.signIn(username, password);
  },

  signOut: function(options) {
    return hoodie.account.signOut(options);
  }
});
