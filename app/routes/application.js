import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  },

  actions: {
    createTodo: function() {
      var ctrl   = this.get('controller');
      var record = this.store.createRecord('todo', {text: ctrl.get('text')});

      record.save().then(function() {
        ctrl.set('text', '');
      }, function(err) {
        ctrl.setFlash(err.message);
      });
    },

    destroyTodo: function(todo) {
      todo.destroyRecord();
    },

    signIn: function() {
      var ctrl     = this.get('controller');
      var email    = ctrl.get('user.email');
      var password = ctrl.get('user.password');

      this.accountService.signIn(email, password).catch(function(err) {
        ctrl.setFlash(err.message);
      });
    },

    signUp: function() {
      var ctrl     = this.get('controller');
      var email    = ctrl.get('user.email');
      var password = ctrl.get('user.password');

      this.accountService.signUp(email, password).catch(function(err) {
        ctrl.setFlash(err.message);
      });
    },

    signOut: function() {
      var ctrl     = this.get('controller');
      this.accountService.signOut().catch(function(err) {
        ctrl.setFlash(err.message);
      });
    }
  }
});
