import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  user: DS.attr(),
  body: DS.attr(),
  createdAt: DS.attr(),
  book: DS.belongsTo('book')
});
