import Route from '@ember/routing/route';
import AutenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AutenticatedRouteMixin, {
  model() {
    let book = this.modelFor('book.detail');

    return({
      book,
      review: {
        user: '',
        body: '',
        book
      }
    });
  }
});
