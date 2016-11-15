import Ember from 'ember';

export default Ember.Route.extend({
  foobar: Ember.inject.service(),
  barfoo: Ember.inject.service(),
  floop: Ember.inject.service(),
  model() {
    return {
      foobar: this.get('foobar').value(),
      barfoo: this.get('barfoo').value(),
      floop: this.get('floop').value()
    };
  }
});
