import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  username: DS.attr(),
  first: attr(),
  last: attr(),
  
  books: DS.hasMany('book')
});
