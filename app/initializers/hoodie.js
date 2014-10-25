import config from '../config/environment';

export function initialize(/* container, application */) {
  window.hoodie = new Hoodie(config.hoodieURL);
}

export default {
  name: 'hoodie',
  before: 'store',
  initialize: initialize
};
