import Ember from 'ember';

export default Ember.Component.extend({
  classes: null,
  selectNumColumns: null,  // Action to pass in.
  selectedNumColumns: 4,

  classNames: ['ComparisonModePicker'],
  classNameBindings: [
    'classes',
  ],
  actions: {
    selectNumColumns: function(numColumns) {
      this.set('numColumns', numColumns);
      this.get('selectNumColumns')(numColumns);
    },
  }
});