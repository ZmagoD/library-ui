import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | book/detail/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:book/detail/index');
    assert.ok(route);
  });
});
