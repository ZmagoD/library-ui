import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AutenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AutenticatedRouteMixin, {
  session: service('session'),
  currentUser: service('current-user'),
  fastboot: service('fastboot'),

  beforeModel() {
    this._super(...arguments);
    this.loadUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this.get('currentUser').load();
  },

  sessionInvalidated() {
    window.location.replace('/login')
  },

  loadUser() {
    if (this.get('session.isAuthenticated')) {
      this.get('currentUser').load();
    }
  }
});
