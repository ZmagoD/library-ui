import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveReview(attr) {
      let review = this.store.createRecord('review', attr);

      review.save()
        .then(() => {
          this.transitionToRoute('book.detail', this.model.book.id)
        })
    }
  }
});
