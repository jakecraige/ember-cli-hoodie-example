export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
  window.hoodie = new Hoodie('http://localhost:6007');
};

export default {
  name: 'hoodie',
  before: 'store',
  initialize: initialize
};
