import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    searchAuthor(query) {
      return this.store.query("author", { filter: { query } } );
    },

    saveBook(attrs) {
      const book = this.store.createRecord("book", attrs);

      book.save()
        .then(() => {
          this.transitionToRoute("book");
        });
    }
  }
});
