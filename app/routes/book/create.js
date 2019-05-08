import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      title: "",
      ibsn: "",
      publishDate: null,
      author: null
    }
  }
});
