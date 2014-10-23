import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  },

  actions: {
    createTodo: function() {
      var text = this.get('controller.text');
      var record = this.store.createRecord('todo', {text: text});

      record.save().then(function() {
        this.set('controller.text', '');
      }.bind(this), function(err) {
        alert('Error saving record');
        console.log(err);
      });
    },

    destroyTodo: function(todo) {
      todo.destroyRecord();
    },

    signIn: function() {
      this.accountService.signIn('admin', 'password').then(function() {
        alert('Signed in!');
      }, function(err) {
        alert('Error signing in');
        console.log(err);
      });
    },

    signOut: function() {
      this.accountService.signOut().then(function() {
        alert('Signed out');
      }, function(err) {
        alert('Error signing out');
        console.log(err);
      });
    }
  }
});
