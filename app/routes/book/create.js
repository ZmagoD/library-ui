import Route from '@ember/routing/route';
import AutenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AutenticatedRouteMixin, {
  model() {
    return {
      title: "",
      ibsn: "",
      publishDate: null,
      author: null
    }
  }
});
