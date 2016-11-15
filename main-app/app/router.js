import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('blogs', function() {
    // Mount the main blog at /blogs/engine-a
    this.mount('engine-a', {as: 'engine'});
  });
});

export default Router;
