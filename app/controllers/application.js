import Ember from 'ember';

export default Ember.ArrayController.extend({
  flash:  null,
  user:   Ember.Object.create({
    email: null,
    password: null
  }),

  setFlash: function(message) {
    this.set('flash', message);

    Ember.run.later(this, function() {
      this.set('flash', null);
    }, 3000);
  }
});
