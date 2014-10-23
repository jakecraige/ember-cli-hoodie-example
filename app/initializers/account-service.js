export function initialize(container, application) {
  application.inject('route', 'accountService', 'service:account');
  application.inject('controller', 'accountService', 'service:account');
  application.inject('template', 'accountService', 'service:account');
};

export default {
  name: 'account-service',
  initialize: initialize
};
