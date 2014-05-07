var attr = DS.attr;

App.Operator = DS.Model.extend({
	id: attr('number'),
	name: attr('string'),
	abbreviation: attr('string'), // Find out more about this, is it just a convenience method or something they actually need
	address: attr('string'),
	field: DS.belongsTo('field'),
	ppn: DS.belongsTo('ppn')
})