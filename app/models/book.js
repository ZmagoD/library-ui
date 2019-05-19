import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  username: DS.attr(),
  title: DS.attr(),
  ibsn: DS.attr(),
  publishDate: DS.attr(),

  author: DS.belongsTo('author'),
  reviews: DS.hasMany('review')
});
